/********************* Import The Mongoose Library *********************/

const Mongoose = require("mongoose");



/********************* Create The Schema *********************/

const LocationSchema = new Mongoose.Schema({

    ///**************** Declare The Fields Present In The Collection ****************///

    index: {
        type: Number,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    district: [
        {
            index: {
                type: Number,
                required: true
            },

            name: {
                type: String,
                required: true
            }
        }
    ]

}, {
    timestamps: true
});



/********************* Create The Model From Schema And Connect To The MongoDB Collection And Export The Model *********************/

module.exports = Mongoose.model("Location", LocationSchema, "Locations");