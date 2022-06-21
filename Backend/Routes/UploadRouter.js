/********************* Import The Router *********************/

const Router = require("express").Router();



/********************* Import The Controllers *********************/

const UploadImageController = require("../Controllers/UploadImageController");
const UploadImageMiddleware = require("../Middlewares/UploadImageMiddleware");



/********************* Declare The Routes And Bind With The Controller Or Middleware Methods *********************/

Router.post("/api/upload_avatar", UploadImageMiddleware, UploadImageController.UploadAvatar)
Router.post("/api/upload_background", UploadImageMiddleware, UploadImageController.UploadBackground)
Router.post("/api/upload_fundraising_image", UploadImageMiddleware, UploadImageController.UploadFundraisingImage)



/********************* Export The Router *********************/

module.exports = Router;