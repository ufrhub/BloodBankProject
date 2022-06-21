/********************* Import The Router *********************/

const Router = require("express").Router();



/********************* Import The Controllers *********************/

const BloodBankController = require("../Controllers/BloodBankController");



/********************* Declare The Routes And Bind With The Controller Methods *********************/

Router.post("/addNewBloodBank", BloodBankController.AddNewBloodBank);
Router.post("/filterBloodBanks", BloodBankController.FilterBloodBanks);
Router.post("/getBloodBanksByEmail", BloodBankController.GetBloodBanksByEmail);
Router.post("/getBloodBanksByLocation", BloodBankController.GetBloodBanksByLocation);
Router.post("/deleteBloodBank", BloodBankController.DeleteBloodBank);



/********************* Export The Router *********************/

module.exports = Router;