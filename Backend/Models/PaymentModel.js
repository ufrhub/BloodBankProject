/********************* Import The Mongoose Library *********************/

const Mongoose = require("mongoose");



/********************* Create The Schema *********************/

const PaymentSchema = new Mongoose.Schema({

    ///**************** Declare The Fields Present In The Collection ****************///

    EMAIL: {
        type: String,
        required: true
    },

    MOBILE_NO: {
        type: String,
        required: true
    },

    RECIEVER_RREQUEST_ID: {
        type: String,
        required: true
    },

    RECIEVER_EMAIL: {
        type: String,
        required: true
    },

    TXNID: {
        type: String,
        required: true
    },

    BANKTXNID: {
        type: String,
        required: true
    },

    ORDERID: {
        type: String,
        required: true
    },

    TXNAMOUNT: {
        type: String,
        required: true
    },

    STATUS: {
        type: String,
        required: true
    },

    TXNTYPE: {
        type: String,
        required: true
    },

    GATEWAYNAME: {
        type: String,
        required: true
    },

    RESPCODE: {
        type: String,
        required: true
    },

    RESPMSG: {
        type: String,
        required: true
    },

    BANKNAME: {
        type: String,
        required: true
    },

    MID: {
        type: String,
        required: true
    },

    PAYMENTMODE: {
        type: String,
        required: true
    },

    REFUNDAMT: {
        type: String,
        required: true
    },

    TXNDATE: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});



/********************* Create The Model From Schema And Connect To The MongoDB Collection And Export The Model *********************/

module.exports = Mongoose.model("Payment", PaymentSchema, "Payments");