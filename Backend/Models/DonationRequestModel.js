/********************* Import The Mongoose Library *********************/

const Mongoose = require("mongoose");



/********************* Create The Schema *********************/

const DonationRequestSchema = new Mongoose.Schema({

    ///**************** Declare The Fields Present In The Collection ****************///

    Name: {
        type: String,
        required: true
    },

    Gender: {
        type: String,
        required: true
    },

    DateOfBirth: {
        type: Date,
        required: true
    },

    MobileNumber: {
        type: String,
        required: true
    },

    Address: {
        type: String
    },

    TentativeDate: {
        type: Date
    },

    State: {
        type: String,
        required: true
    },

    District: {
        type: String,
        required: true
    },

    BloodBankName: {
        type: String,
        required: true
    },

    BloodGroup: {
        type: String
    },

    GoIID: {
        type: String
    },

    GoIIDNumber: {
        type: String
    }

}, {
    timestamps: true
});



/********************* Create The Model From Schema And Connect To The MongoDB Collection And Export The Model *********************/

module.exports = Mongoose.model("DonationRequest", DonationRequestSchema, "DonationRequests");