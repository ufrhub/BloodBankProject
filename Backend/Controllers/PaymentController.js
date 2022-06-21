/********************* Import All The Required Pakages *********************/

require("dotenv").config();
const Formidable = require("formidable");
const HTTPS = require("https");
const { v4: uuidv4 } = require("uuid");
const PaymentRequest = require("../Models/PaymentRequestModel");
const Payment = require("../Models/PaymentModel");



/********************* Import The PaytmChecksum File To Authenticate The Payment Requests *********************/

const PaytmChecksumFile = require("./PaytmChecksum");



/********************* Export The Controller Functionality *********************/

///**************** (1) Payments ****************///

exports.Payment = (Request, Response) => {

    const {

        PayableAmmount,
        CustomerEmail,
        CustomerMobileNumber,
        RecieverRequestID,
        RecieverUserEmail

    } = Request.body;

    const TotalAmount = JSON.stringify(PayableAmmount);


    /////**************** Prepare The Request Object ****************/////

    let Parameters = {

        MID: process.env.PAYTM_MERCHANT_ID,
        WEBSITE: process.env.PAYTM_WEBSITE,
        CHANNEL_ID: process.env.PAYTM_CHANNEL_ID,
        INDUSTRY_TYPE_ID: process.env.PAYTM_INDUSTRY_TYPE,
        ORDER_ID: uuidv4(),
        CUST_ID: CustomerEmail,
        TXN_AMOUNT: TotalAmount,
        EMAIL: CustomerEmail,
        MOBILE_NO: CustomerMobileNumber,
        CALLBACK_URL: "http://localhost:5000/PaymentCallback"

    };


    /*** Save The Parameter In Database ***/

    const NewPaymentRequest = new PaymentRequest({
        ORDERID: Parameters.ORDER_ID,
        EMAIL: Parameters.EMAIL,
        MOBILE_NO: Parameters.MOBILE_NO,
        RECIEVER_RREQUEST_ID: RecieverRequestID,
        RECIEVER_EMAIL: RecieverUserEmail
    });

    NewPaymentRequest.save().then(Update => {
        return Update;

    }).catch(Error => {
        return Error;
    });


    /////**************** Use PaytmChecksum To Generate A Signature ****************/////

    let Signature = PaytmChecksumFile.generateSignature(Parameters, process.env.PAYTM_MERCHANT_KEY);

    Signature.then(Result => {

        let PaytmChecksumResponce = {
            ...Parameters,
            "CHECKSUMHASH": Result
        };

        Response.json(PaytmChecksumResponce);

    }).catch(Error => {
        Response.status(500).json({
            message: "Error in Payment",
            error: Error
        });
    });

};



/********************* It Is Called By The Paytm Server, And Paytm Server Will Send The Transaction Status *********************/

///**************** (2) Payments Callback ****************///

exports.PaymentCallback = (Request, Response) => {

    /////**************** We Need To Read The Transaction Details ****************/////

    const Form = new Formidable.IncomingForm();

    Form.parse(Request, (Error, Fields, File) => {

        /////**************** Check For The Error ****************/////

        if (Error) {
            console.log(Error);
            Response.status(500).json({ Error });
        };


        /////**************** Verify The Signature ****************/////

        const ChecksumHash = Fields.CHECKSUMHASH;
        delete Fields.CHECKSUMHASH;

        const IsVerified = PaytmChecksumFile.verifySignature(Fields, process.env.Paytm_Merchant_Key, ChecksumHash);
        if (IsVerified) {

            /////**************** Response Is Valid : Make An API Call To Get The Transaction Status Form Paytm Server ****************/////

            let Parameter = {
                MID: Fields.MID,
                ORDERID: Fields.ORDERID
            };

            PaytmChecksumFile.generateSignature(Parameter, process.env.PAYTM_MERCHANT_KEY).then(Chucksum => {

                Parameter["CHECKSUMHASH"] = Chucksum;
                const Data = JSON.stringify(Parameter);
                const RequestObject = {
                    hostname: "securegw-stage.paytm.in",
                    port: 443,
                    path: "/order/status",
                    method: "POST",
                    header: {
                        "Content-Type": "application/json",
                        "content-Length": Data.length
                    },
                    data: Data
                };

                let RESPONSE = "";
                let REQUEST = HTTPS.request(RequestObject, (ResponseFromPaytmServer) => {
                    ResponseFromPaytmServer.on("data", (Chunk) => {
                        RESPONSE += Chunk;
                    });

                    ResponseFromPaytmServer.on("end", () => {

                        let Result = JSON.parse(RESPONSE);

                        const {
                            TXNID,
                            BANKTXNID,
                            ORDERID,
                            TXNAMOUNT,
                            STATUS,
                            TXNTYPE,
                            GATEWAYNAME,
                            RESPCODE,
                            RESPMSG,
                            BANKNAME,
                            MID,
                            PAYMENTMODE,
                            REFUNDAMT,
                            TXNDATE
                        } = Result;

                        /*** Save The Result In Database ***/

                        PaymentRequest.findOneAndUpdate({ ORDERID: Result.ORDERID },
                            {
                                TXNID,
                                BANKTXNID,
                                ORDERID,
                                TXNAMOUNT

                            }).then((Updated) => {
                                if (Updated) {
                                    console.log("Updated");

                                    const EMAIL = Updated.EMAIL;
                                    const MOBILE_NO = Updated.MOBILE_NO;
                                    const RECIEVER_RREQUEST_ID = Updated.RECIEVER_RREQUEST_ID;
                                    const RECIEVER_EMAIL = Updated.RECIEVER_EMAIL;

                                    const NewPayment = new Payment({
                                        EMAIL,
                                        MOBILE_NO,
                                        RECIEVER_RREQUEST_ID,
                                        RECIEVER_EMAIL,
                                        TXNID,
                                        BANKTXNID,
                                        ORDERID,
                                        TXNAMOUNT,
                                        STATUS,
                                        TXNTYPE,
                                        GATEWAYNAME,
                                        RESPCODE,
                                        RESPMSG,
                                        BANKNAME,
                                        MID,
                                        PAYMENTMODE,
                                        REFUNDAMT,
                                        TXNDATE
                                    });

                                    NewPayment.save().then((Success) => {
                                        if (Success) {
                                            const OrderID = Success.ORDERID;

                                            PaymentRequest.findOneAndDelete({ ORDERID: OrderID }).then(() => {
                                                Response.redirect(`http://localhost:3000/payment_status/${Result.ORDERID}`);

                                            }).catch((Error) => {
                                                console.log(Error);
                                            });
                                        };

                                    }).catch((Error) => {
                                        console.log(Error);
                                    });

                                } else {
                                    console.log("An error occured while Updaing Payment Details");
                                };

                            }).catch((Error) => {
                                console.log(Error);
                            });
                    });
                });

                REQUEST.write(Data);
                REQUEST.end();

            }).catch(Error => {
                Response.status(500).json({
                    message: "Error in Payment",
                    error: Error
                });
            });

        } else {

            /////**************** Response Not Valid ****************/////

            console.log("Checksum Mismatched");
            Response.status(500).json({ Error: "It's a Hacker" });
        };
    });

};



///**************** (3) Transactions ****************///

exports.GetTransaction = (Request, Response) => {

    const { ORDERID } = Request.body;

    Payment.findOne({ ORDERID: ORDERID }).then((Result) => {
        Response.status(200).json({
            status: "Success",
            details: Result
        });

    }).catch(Error => {
        Response.status(500).json({
            error: Error.message,
            message: "An error occured while finding transaction...!",
        });
    });

};