/********************* Import The Mongoose Library *********************/

const Mongoose = require("mongoose");



/********************* Create The Schema *********************/

const TokenSchema = new Mongoose.Schema({

    ///**************** Declare The Fields Present In The Collection ****************///

    token: {
        type: String,
        required: true
    },

    createdAt: {
        type: String,
        required: true
    },

    expiresAt: {
        type: String,
        required: true
    }

});



/********************* Create The Model From Schema And Connect To The MongoDB Collection And Export The Model *********************/

module.exports = Mongoose.model("Token", TokenSchema, "Tokens");