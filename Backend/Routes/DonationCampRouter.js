/********************* Import The Router *********************/

const Router = require("express").Router();



/********************* Import The Controllers *********************/

const DonationCampController = require("../Controllers/DonationCampController");



/********************* Declare The Routes And Bind With The Controller Methods *********************/

Router.post("/saveDonationCamp", DonationCampController.SaveDonationCamp);
Router.post("/getDonationCampsByEmail", DonationCampController.GetDonationCampsByEmail);
Router.post("/filterDonationCamps", DonationCampController.FilterDonationCamps);



/********************* Export The Router *********************/

module.exports = Router;