/********************* Import The Router *********************/

const Router = require("express").Router();



/********************* Import The Controllers *********************/

const DonationRequest = require("../Controllers/DonationRequestController");



/********************* Declare The Routes And Bind With The Controller Methods *********************/

Router.post("/saveDonationRequest", DonationRequest.SaveDonationRequest);



/********************* Export The Router *********************/

module.exports = Router;