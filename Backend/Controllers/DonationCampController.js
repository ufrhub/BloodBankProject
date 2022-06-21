/********************* Import The Models *********************/

const DonationCamp = require("../Models/DonationCampModel");



/********************* Export The Controller Functionality *********************/

///**************** (1) Save Donation Camp ****************///

exports.SaveDonationCamp = (Request, Response) => {

    const {
        CampName,
        ConductedBy,
        OrganizedBy,
        Email,
        State,
        District,
        Register,
        Date,
        Time,
        Contact,
        Address
    } = Request.body;

    const NewCamp = new DonationCamp({
        CampName,
        ConductedBy,
        OrganizedBy,
        Email,
        State,
        District,
        Register,
        Date,
        Time,
        Contact,
        Address
    });

    NewCamp.save().then(() => {
        Response.status(200).json({
            message: "Donation Camp Added Successfully"
        });

    }).catch(Error => {
        Response.status(500).json({
            message: "An error occured while saving Donation Camp",
            error: Error.message
        });
    });

};



///**************** (2) Get Donation Camps By Email ****************///

exports.GetDonationCampsByEmail = (Request, Response) => {

    const { Email } = Request.body;

    DonationCamp.find({ Email }).then((Result) => {
        Response.status(200).json({
            message: "Donation Camps Fetched Successfully",
            camps: Result
        });

    }).catch(Error => {
        Response.status(500).json({
            message: "An error occured while fetching Donation Camps",
            error: Error.message
        });
    });

};



///**************** (3) Filter Donation Camps ****************///

exports.FilterDonationCamps = (Request, Response) => {

    const {
        State,
        District,
        ConductedBy,
        Date,
        Limit,
        Page = 1
    } = Request.body;

    let Filters = {};

    if (State && !District) {
        Filters.State = State;
    }

    if (District) {
        Filters.District = District;
    }

    if (ConductedBy) {
        Filters.ConductedBy = ConductedBy;
    }

    if (Date) {
        Filters.Date = Date;
    }

    DonationCamp.find(Filters).then((Result) => {
        let PageLimit = Limit;
        let TemporaryArray = [];

        const Paginate = (Array, PageSize, PageNumber) => {

            let PaginatedResult = [];
            PaginatedResult = Array.slice((PageNumber - 1) * PageSize, PageNumber * PageSize);
            return PaginatedResult;

        };

        TemporaryArray = Paginate(Result, PageLimit, Page);

        Response.status(200).json({
            message: "Donation Camps Filtered List",
            totalCamps: Result,
            camps: TemporaryArray,
            totalResultsCount: Result.length,
            pageNumber: Page,
            limit: PageLimit
        });

    }).catch(Error => {
        Response.status(500).json({
            message: "An error occured while fetching Donation Camps",
            error: Error.message
        });
    });

};