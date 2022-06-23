import React, { useEffect, useState } from 'react';
import './AddYourBloodBankPage.css';
import Server from 'axios';
import { useHistory } from 'react-router-dom';
import BloodBankInformation from './BloodBankInformation';
import DonationInformation from './DonationInformation';
import Miscellaneous from './Miscellaneous';
import UserType from './UserType';
import { isEmpty, isValid, isValidPin, isValidPhone } from '../../Utilities/Validation';
import { Loading, SuccessMessage, ErrorMessage } from '../../Utilities/Notification';

function AddYourBloodBankPage() {

    const [State, setState] = useState("");
    const [District, setDistrict] = useState("");
    const [Address, setAddress] = useState("");
    const [ApheresisFacility, setApheresisFacility] = useState("");
    const [BloodBank, setBloodBank] = useState("");
    const [Category, setCategory] = useState("");
    const [City, setCity] = useState("");
    const [ComponentFacility, setComponentFacility] = useState("");
    const [Phone, setPhone] = useState();
    const [ContactPerson, setContactPerson] = useState("");
    const [Email, setEmail] = useState("");
    const [FAX, setFax] = useState();
    const [FromDate, setFromDate] = useState("");
    const [HelplineNumber, setHelplineNumber] = useState();
    const [Licence, setLicence] = useState("");
    const [NumberOfBeds, setNumberOfBeds] = useState();
    const [ParentHospital, setParentHospital] = useState("");
    const [PinCode, setPinCode] = useState();
    const [ShortName, setShortName] = useState("");
    const [ToDate, setToDate] = useState("");
    const [Website, setWebsite] = useState("");

    const [TTIType, setTTIType] = useState([]);
    const [BagType, setBagType] = useState([]);
    const [ComponentType, setComponentType] = useState([]);
    const [DonationType, setDonationType] = useState([]);
    const [DonorType, setDonorType] = useState([]);
    const [Remarks, setRemarks] = useState("");

    const [ChargeTarrifDetails, setChargeTarrifDetails] = useState([]);
    const [AreaDetails, setAreaDetails] = useState([]);
    const [StorageDetails, setStorageDetails] = useState([]);
    const [RefreshmentDetails, setRefreshmentDetails] = useState([]);

    const [userType, setUserType] = useState("");

    const [bloodBankInformationBTN, setBloodBankInformationBTN] = useState("");
    const [donationInformationBTN, setDonationInformationBTN] = useState("");
    const [miscellaneousBTN, setMiscellaneousBTN] = useState("");
    const [userTypeBTN, setUserTypeBTN] = useState("");

    const [loading, setLoading] = useState(false);
    const [Success, setSuccess] = useState("");
    const [Error, setError] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (bloodBankInformationBTN === "Next") {
            document.getElementById("DonationInformation").checked = true;

        } else if (bloodBankInformationBTN === "Cancel") {
            history.push("/");
            window.location.reload(false);

        } else if (donationInformationBTN === "Next") {
            document.getElementById("Miscellaneous").checked = true;

        } else if (donationInformationBTN === "Back") {
            document.getElementById("BloodBankInformation").checked = true;

        } else if (donationInformationBTN === "Cancel") {
            history.push("/");
            window.location.reload(false);

        } else if (miscellaneousBTN === "Next") {
            document.getElementById("UserType").checked = true;

        } else if (miscellaneousBTN === "Back") {
            document.getElementById("DonationInformation").checked = true;

        } else if (miscellaneousBTN === "Cancel") {
            history.push("/");
            window.location.reload(false);

        } else if (userTypeBTN === "Back") {
            document.getElementById("Miscellaneous").checked = true;

        } else if (userTypeBTN === "Cancel") {
            history.push("/");
            window.location.reload(false);
        }
    }, [bloodBankInformationBTN, donationInformationBTN, history, miscellaneousBTN, userTypeBTN]);

    useEffect(() => {

        if (userTypeBTN === "Save") {

            if (isEmpty(State) || isEmpty(District) || isEmpty(BloodBank) || isEmpty(Category) || isEmpty(ContactPerson) || isEmpty(Email) || isEmpty(Phone) || isEmpty(Address) || isEmpty(PinCode)) {
                setError("Please fill in all star fields...!");
                document.getElementById("BloodBankInformation").checked = true;

            } else if (!DonorType.length > 0 || !DonationType.length > 0) {
                setError("Please fill in all star fields...!");
                document.getElementById("DonationInformation").checked = true;

            } else if (!AreaDetails.length > 0 || !StorageDetails.length > 0 || !RefreshmentDetails.length > 0) {
                setError("Please fill in all star fields...!");
                document.getElementById("Miscellaneous").checked = true;

            } else if (isEmpty(userType)) {
                setError("Please select User Type...!");

            } else if (Email && !isValid(Email)) {
                setError("Invalid email...!");
                document.getElementById("BloodBankInformation").checked = true;

            } else if (!isValidPin(PinCode)) {
                setError("Invalid pincode...!");
                document.getElementById("BloodBankInformation").checked = true;

            } else if (!isValidPhone(Phone)) {
                setError("Invalid mobile number...!");
                document.getElementById("BloodBankInformation").checked = true;

            } else {
                setLoading(true);
                Server.post("/addNewBloodBank", {
                    State,
                    District,
                    City,
                    BloodBank,
                    ParentHospital,
                    ShortName,
                    Category,
                    ContactPerson,
                    Email,
                    Phone,
                    FAX,
                    Licence,
                    FromDate,
                    ToDate,
                    ComponentFacility,
                    ApheresisFacility,
                    HelplineNumber,
                    Address,
                    PinCode,
                    Website,
                    NumberOfBeds,
                    DonorType,
                    DonationType,
                    ComponentType,
                    BagType,
                    TTIType,
                    Remarks,
                    ChargeTarrifDetails,
                    AreaDetails,
                    StorageDetails,
                    RefreshmentDetails,
                    UserType: userType,
                }).then(Response => {
                    setLoading(false);
                    setSuccess(Response.data.message);
                    setTimeout(() => {
                        history.push("/");
                    }, 3000);

                }).catch(Error => {
                    setLoading(false);
                    Error.response.data.message &&
                        setError(Error.response.data.message);
                });
            };

        };

    }, [Address, ApheresisFacility, AreaDetails, BagType, BloodBank, Category, ChargeTarrifDetails, City, ComponentFacility, ComponentType, ContactPerson, District, DonationType, DonorType, Email, FAX, FromDate, HelplineNumber, Licence, NumberOfBeds, ParentHospital, Phone, PinCode, RefreshmentDetails, Remarks, ShortName, State, StorageDetails, TTIType, ToDate, Website, history, userType, userTypeBTN]);

    const GetBloodBankInformationData = (Data, ButtonClicked) => {
        const Address1 = Data.data.Address1;
        const address = Address1.concat(Data.data.Address2);
        const ContactNumber = Number(Data.data.ContactNumber);
        const FaxNumber = Number(Data.data.FaxNumber);
        const helplineNumber = Number(Data.data.HelplineNumber);
        const NoOfBedHospital = Number(Data.data.NoOfBedHospital);
        const Pin_code = Number(Data.data.Pincode);

        setState(Data.selectedState);
        setDistrict(Data.selectedDistrict);
        setAddress(address);
        setApheresisFacility(Data.data.ApheresisFacility);
        setBloodBank(Data.data.BloodBankName);
        setCategory(Data.data.Category);
        setCity(Data.data.City);
        setComponentFacility(Data.data.ComponentFacility);
        setPhone(ContactNumber);
        setContactPerson(Data.data.ContactPerson);
        setEmail(Data.data.Email);
        setFax(FaxNumber);
        setFromDate(Data.data.FromDate);
        setHelplineNumber(helplineNumber);
        setLicence(Data.data.LicenceNumber);
        setNumberOfBeds(NoOfBedHospital);
        setParentHospital(Data.data.ParentHospitalName);
        setPinCode(Pin_code);
        setShortName(Data.data.ShortName);
        setToDate(Data.data.ToDate);
        setWebsite(Data.data.Website);

        setDonationInformationBTN("");
        setMiscellaneousBTN("");
        setUserTypeBTN("");
        setBloodBankInformationBTN(ButtonClicked);
    };

    const GetDonationInformationData = (Data, ButtonClicked) => {
        setTTIType(Data.TTIType);
        setBagType(Data.BagType);
        setComponentType(Data.ComponentType);
        setDonationType(Data.DonationType);
        setDonorType(Data.DonorType);
        setRemarks(Data.Remarks.value);

        setBloodBankInformationBTN("");
        setMiscellaneousBTN("");
        setUserTypeBTN("");
        setDonationInformationBTN(ButtonClicked);
    };

    const GetMiscellaneousData = (Data, ButtonClicked) => {
        setChargeTarrifDetails(Data.chargeTarrifFilter);
        setAreaDetails(Data.areaDetailsFilter);
        setStorageDetails(Data.storageDetailsFilter);
        setRefreshmentDetails(Data.refreshmentDetailsFilter);

        setBloodBankInformationBTN("");
        setDonationInformationBTN("");
        setUserTypeBTN("");
        setMiscellaneousBTN(ButtonClicked);
    };

    const GetUserTypeData = (Data, ButtonClicked) => {
        setUserType(Data);

        setBloodBankInformationBTN("");
        setDonationInformationBTN("");
        setMiscellaneousBTN("");
        setUserTypeBTN(ButtonClicked);
    };

    return (
        <div className="AddYourBloodBankPage">

            <div className="addBloodBankHeading">Blood Bank Details</div>

            {loading && <Loading loading={loading} />}
            {Success && <SuccessMessage message={Success} />}
            {Error && <ErrorMessage message={Error} />}

            <div className="addBloodBankSwitch">
                <input type="radio" name="AddYourBloodBank" className="radio-btn-one" id="BloodBankInformation" />
                <input type="radio" name="AddYourBloodBank" className="radio-btn-two" id="DonationInformation" />
                <input type="radio" name="AddYourBloodBank" className="radio-btn-three" id="Miscellaneous" />
                <input type="radio" name="AddYourBloodBank" className="radio-btn-four" id="UserType" />

                <label htmlFor="BloodBankInformation" id="label-one"><div>Blood Bank Information</div> </label>
                <label htmlFor="DonationInformation" id="label-two"><div>Donation Information</div> </label>
                <label htmlFor="Miscellaneous" id="label-three">Miscellaneous </label>
                <label htmlFor="UserType" id="label-four">UserType </label>

                <div id="BloodBankInformationPage"><BloodBankInformation Data={GetBloodBankInformationData} /></div>
                <div id="DonationInformationPage"><DonationInformation Data={GetDonationInformationData} /></div>
                <div id="MiscellaneousPage"><Miscellaneous Data={GetMiscellaneousData} /></div>
                <div id="UserTypePage"><UserType Data={GetUserTypeData} /></div>
            </div>

        </div>
    );

};

export default AddYourBloodBankPage;