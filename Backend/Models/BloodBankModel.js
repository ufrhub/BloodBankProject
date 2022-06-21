/********************* Import The Mongoose Library *********************/

const Mongoose = require("mongoose");



/********************* Create The Schema *********************/

const BloodBankSchema = new Mongoose.Schema({

    ///**************** Declare The Fields Present In The Collection ****************///

    State: {
        type: String,
        required: true
    },

    District: {
        type: String,
        required: true
    },

    City: {
        type: String
    },

    BloodBank: {
        type: String,
        required: true
    },

    ParentHospital: {
        type: String
    },

    ShortName: {
        type: String
    },

    Category: {
        type: String,
        required: true
    },

    ContactPerson: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true
    },

    Phone: {
        type: Number,
        required: true
    },

    FAX: {
        type: Number
    },

    Licence: {
        type: String
    },

    FromDate: {
        type: Date
    },

    ToDate: {
        type: Date
    },

    ComponentFacility: {
        type: String
    },

    ApheresisFacility: {
        type: String
    },

    HelplineNumber: {
        type: Number
    },

    Address: {
        type: String,
        required: true
    },

    PinCode: {
        type: Number,
        required: true
    },

    Website: {
        type: String,
    },

    NumberOfBeds: {
        type: Number
    },

    DonorType: {
        type: Array,
        required: true
    },

    DonationType: {
        type: Array,
        required: true
    },

    ComponentType: {
        type: Array
    },

    BagType: {
        type: Array
    },

    TTIType: {
        type: Array
    },

    Remarks: {
        type: String
    },

    ChargeTarrifDetails: [{
        TarrifName: {
            type: String
        },

        ChargesInRs: {
            type: String
        }
    }
    ],

    AreaDetails: [{
        AreaName: {
            type: String,
            required: true
        },

        AreaUsability: {
            type: String,
            required: true
        },

        RoomNumber: {
            type: String,
            required: true
        },
    }
    ],

    StorageDetails: [{
        StorageName: {
            type: String,
            required: true
        },

        StorageType: {
            type: String,
            required: true
        },

        AreaName: {
            type: String,
            required: true
        },
    }
    ],

    RefreshmentDetails: [{
        RefreshmentName: {
            type: String,
            required: true
        },

        RefreshmentQuantity: {
            type: String,
            required: true
        }
    }
    ],

    UserType: {
        type: String
    },

    Availability: {
        type: String
    },

    Type: {
        type: String
    },

    BloodType: {
        type: String
    },

    LastUpdated: {
        type: String
    }

}, {
    timestamps: true
});



/********************* Create The Model From Schema And Connect To The MongoDB Collection And Export The Model *********************/

module.exports = Mongoose.model("BloodBankModel", BloodBankSchema, "BloodBanks");