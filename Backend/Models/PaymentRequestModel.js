/********************* Import The Mongoose Library *********************/

const Mongoose = require("mongoose");



/********************* Create The Schema *********************/

const PaymentRequestSchema = new Mongoose.Schema({

    ///**************** Declare The Fields Present In The Collection ****************///

    EMAIL: {
        type: String
    },

    MOBILE_NO: {
        type: String
    },

    ORDERID: {
        type: String
    },

    TXNAMOUNT: {
        type: String
    },

    RECIEVER_RREQUEST_ID: {
        type: String
    },

    RECIEVER_EMAIL: {
        type: String
    }

}, {
    timestamps: true
});



/********************* Create The Model From Schema And Connect To The MongoDB Collection And Export The Model *********************/

module.exports = Mongoose.model("PaymentRequest", PaymentRequestSchema, "PaymentRequests");