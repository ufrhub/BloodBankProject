/********************* Import The Mongoose Library *********************/

const Mongoose = require("mongoose");



/********************* Create The Schema *********************/

const DonationCampSchema = new Mongoose.Schema({

    ///**************** Declare The Fields Present In The Collection ****************///

    CampName: {
        type: String,
        required: true
    },

    ConductedBy: {
        type: String,
        required: true
    },

    OrganizedBy: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true
    },

    State: {
        type: String,
        required: true
    },

    District: {
        type: String,
        required: true
    },

    Register: {
        type: String
    },

    Date: {
        type: String,
        required: true
    },

    Time: {
        type: String,
        required: true
    },

    Contact: {
        type: String,
        required: true
    },

    Address: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});



/********************* Create The Model From Schema And Connect To The MongoDB Collection And Export The Model *********************/

module.exports = Mongoose.model("DonationCamp", DonationCampSchema, "DonationCamps");