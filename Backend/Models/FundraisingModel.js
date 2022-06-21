/********************* Import The Mongoose Library *********************/

const Mongoose = require("mongoose");



/********************* Create The Schema *********************/

const FundraisingSchema = new Mongoose.Schema({

    ///**************** Declare The Fields Present In The Collection ****************///

    UserID: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true
    },

    Heading: {
        type: String,
        required: true
    },

    Amount: {
        type: Number,
        required: true
    },

    RecievedFunds: {
        type: Number,
        default: 0
    },

    Description: {
        type: String,
        required: true
    },

    Image: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});



/********************* Create The Model From Schema And Connect To The MongoDB Collection And Export The Model *********************/

module.exports = Mongoose.model("FundraisingModel", FundraisingSchema, "Fundraising");