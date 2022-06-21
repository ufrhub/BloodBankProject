/********************* Import All The Required Pakages *********************/

const Cloudinary = require("cloudinary").v2;
const FileSystem = require("fs");



Cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});



/********************* Export The Controller Functionality *********************/

///**************** (1) Upload Avatar ****************///

exports.UploadAvatar = (Request, Response) => {

    try {

        const File = Request.files.File

        Cloudinary.uploader.upload(File.tempFilePath, {
            folder: "Avatar",
            width: 1200,
            height: 1200,
            crop: "fill"
        }).then(Result => {
            Response.status(200).json({
                url: Result.secure_url
            });

        }).catch(Error => {
            RemoveTemporary(File.tempFilePath);
            Response.status(500).json({
                message: Error.message
            });
        });

    } catch (Error) {
        Response.status(500).json({
            message: Error.message
        });
    }

};



///**************** (1) Upload Background ****************///

exports.UploadBackground = (Request, Response) => {

    try {

        const File = Request.files.File

        Cloudinary.uploader.upload(File.tempFilePath, {
            folder: "Background",
            crop: "fill"
        }).then(Result => {
            Response.status(200).json({
                url: Result.secure_url
            });

        }).catch(Error => {
            RemoveTemporary(File.tempFilePath);
            Response.status(500).json({
                message: Error.message
            });
        });

    } catch (Error) {
        Response.status(500).json({
            message: Error.message
        });
    }

};



///**************** (1) Upload Fundraising Image ****************///

exports.UploadFundraisingImage = (Request, Response) => {

    try {

        const File = Request.files.File

        Cloudinary.uploader.upload(File.tempFilePath, {
            folder: "FundraisingImage",
            width: 150,
            height: 150,
            crop: "fill"
        }).then(Result => {
            Response.status(200).json({
                url: Result.secure_url
            });

        }).catch(Error => {
            RemoveTemporary(File.tempFilePath);
            Response.status(500).json({
                message: Error.message
            });
        });

    } catch (Error) {
        Response.status(500).json({
            message: Error.message
        });
    }

};



/********************* Function To Remove Temporary File *********************/

const RemoveTemporary = (Path) => {

    FileSystem.unlink(Path, Error => {
        if (Error) throw Error
    });

};