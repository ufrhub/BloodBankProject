/********************* Import The Router *********************/

const Express = require("express");
const Router = Express.Router();



/********************* Import The Controllers *********************/

const PaymentsController = require("../Controllers/PaymentController");
const FundraisingController = require("../Controllers/FundraisingController");
const AuthenticationController = require("../Middlewares/Authentication");



/********************* Declare The Routes And Bind With The Controller Methods *********************/

Router.post("/Payment", PaymentsController.Payment);
Router.post("/PaymentCallback", PaymentsController.PaymentCallback);
Router.post("/CurrentTransaction", PaymentsController.GetTransaction);



Router.post("/rais_fund", AuthenticationController.Authentication, FundraisingController.RaisFund);
Router.get("/getallfundraisings", FundraisingController.GetAllFundraisings);
Router.post("/getfundraisingbyemail", FundraisingController.GetFundraisingByEmail);
Router.post("/getfundraisingbyID", FundraisingController.GetFundraisingByID);
Router.patch("/updatefundraising", FundraisingController.UpdateFundraising);
Router.delete("/deletefundraising/:id", AuthenticationController.Authentication, FundraisingController.DeleteFundraising);



/********************* Export The Router *********************/

module.exports = Router;