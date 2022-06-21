/********************* Import The Mongoose Library *********************/

const Mongoose = require("mongoose");



/********************* Create The Schema *********************/

const UserSchema = new Mongoose.Schema({

    ///**************** Declare The Fields Present In The Collection ****************///

    FirstName: {
        type: String,
        required: [true, "Please enter your First Name...!"]
    },

    LastName: {
        type: String,
        required: [false, "Please enter your Last Name...!"]
    },

    DateOfBirth: {
        type: String,
        required: [false, "Please enter your Date of Birth...!"]
    },

    Gender: {
        type: String,
        required: [true, "Please select your Gender...!"]
    },

    Email: {
        type: String,
        required: [true, "Please enter your Email...!"],
        unique: true
    },

    State: {
        type: String,
        required: [true, "Please select your State...!"]
    },

    District: {
        type: String,
        required: [true, "Please select your District...!"]
    },

    PinCode: {
        type: Number,
        required: [true, "Please enter your Pin Code...!"]
    },

    MobileNumber: {
        type: Number,
        required: [true, "Please enter your Mobile Number...!"]
    },

    Password: {
        type: String,
        required: [true, "Please enter your Password...!"],
    },

    UserType: {
        type: String,
        required: [true, "Please enter your User Type...!"],
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    Avatar: {
        type: String,
        default: "https://res.cloudinary.com/dhp9cooxt/image/upload/v1644387806/Avatar/Default_User_Profile_Picture.webp"
    },

    Background: {
        type: String,
        default: "https://res.cloudinary.com/dhp9cooxt/image/upload/v1652097466/Background/Default%20Background.jpg"
    },

    Verified: {
        type: Boolean,
        default: false
    },

    BankAccountNumber: {
        type: String
    },

    IFSC: {
        type: String
    },

    UPI: {
        type: String
    }

}, {
    timestamps: true
});



/********************* Create The Model From Schema And Connect To The MongoDB Collection And Export The Model *********************/

module.exports = Mongoose.model("UserModel", UserSchema, "Users");