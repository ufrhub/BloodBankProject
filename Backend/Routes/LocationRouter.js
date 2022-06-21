/********************* Import The Router *********************/

const Router = require("express").Router();



/********************* Import The Controllers *********************/

const LocationController = require("../Controllers/LocationController");



/********************* Declare The Routes And Bind With The Controller Methods *********************/

Router.get("/locations", LocationController.GetAllLocations);



/********************* Export The Router *********************/

module.exports = Router;