/********************* Import The Models *********************/

const FundraisingModel = require("../Models/FundraisingModel");



/********************* Export The Controller Functionality *********************/

///**************** (1) Rais Fund ****************///

exports.RaisFund = (Request, Response) => {

    const {
        UserID,
        Email,
        Heading,
        Amount,
        Description,
        Image
    } = Request.body;

    const NewFundraising = new FundraisingModel({
        UserID,
        Email,
        Heading,
        Amount,
        Description,
        Image
    });

    NewFundraising.save().then(Result => {
        Response.status(200).json({
            message: "Data saved successfully",
            result: Result
        });

    }).catch(Error => {
        Response.status(500).json({
            message: "An error occured while saving data",
            error: Error.message
        });
    });

};



///**************** (2) Get All Fundraisings ****************///

exports.GetAllFundraisings = (Request, Response) => {

    FundraisingModel.find().then(Result => {
        Response.status(200).json({
            message: "Data fetched",
            result: Result
        });

    }).catch(Error => {
        Response.status(500).json({
            message: "An error occured while fetching data",
            error: Error.message
        });
    });
};



///**************** (3) Get Fundraisings By Email ****************///

exports.GetFundraisingByEmail = (Request, Response) => {
    const { Email } = Request.body;

    FundraisingModel.find({ Email }).then(Result => {
        Response.status(200).json({
            message: "Data fetched",
            result: Result
        });

    }).catch(Error => {
        Response.status(500).json({
            message: "An error occured while fetching data",
            error: Error.message
        });
    });
};



///**************** (4) Get Fundraisings By ID ****************///

exports.GetFundraisingByID = (Request, Response) => {
    const { ID } = Request.body;

    FundraisingModel.findById({ _id: ID }).then(Result => {
        Response.status(200).json({
            message: "Data fetched",
            result: Result
        });

    }).catch(Error => {
        Response.status(500).json({
            message: "An error occured while fetching data",
            error: Error.message
        });
    });
};



///**************** (5) Update Fundraising ****************///

exports.UpdateFundraising = (Request, Response) => {

    const { FundID, RecievedFunds, Heading, Amount, Description, Image } = Request.body;

    FundraisingModel.findOneAndUpdate({ _id: FundID }, { RecievedFunds: RecievedFunds, Heading, Amount, Description, Image }).then(Result => {
        Response.status(200).json({
            message: "Successfully Updated",
            result: Result
        });

    }).catch(Error => {
        Response.status(500).json({
            message: "An error occured while updating data",
            error: Error.message
        });
    });
};



///**************** (6) Delete Fundraising ****************///

exports.DeleteFundraising = (Request, Response) => {
    FundraisingModel.findByIdAndDelete({ _id: Request.params.id }).then(() => {
        Response.status(200).json({
            message: "User Deleted Successfully...!"
        });

    }).catch(Error => {
        Response.status(500).json({
            error: Error.message,
            message: "An error occured while deleting user...!"
        });
    });
};