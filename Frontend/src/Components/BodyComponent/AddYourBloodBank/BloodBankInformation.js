import React, { useState, useEffect } from 'react';
import './BloodBankInformation.css';
import Server from 'axios';
import { Loading, SuccessMessage, ErrorMessage } from '../../Utilities/Notification';

const initialState = {
  City: "",
  BloodBankName: "",
  ParentHospitalName: "",
  ShortName: "",
  Category: "",
  ContactPerson: "",
  Email: "",
  ContactNumber: "",
  FaxNumber: "",
  LicenceNumber: "",
  FromDate: "",
  ToDate: "",
  ComponentFacility: "",
  ApheresisFacility: "",
  HelplineNumber: "",
  Address1: "",
  Address2: "",
  Pincode: "",
  Website: "",
  NoOfBedHospital: ""
};

function BloodBankInformation(props) {

  const [data, setData] = useState(initialState);
  const { City, BloodBankName, ParentHospitalName, ShortName, Category, ContactPerson, Email, ContactNumber, FaxNumber, LicenceNumber, FromDate, ToDate, ComponentFacility, ApheresisFacility, HelplineNumber, Address1, Address2, Pincode, Website, NoOfBedHospital } = data;
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [bloodBankInformationBTN, setBloodBankInformationBTN] = useState("");
  const [Success, setSuccess] = useState("");
  const [Error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Server.get("/locations").then((Response) => {
      setLoading(false);
      setState(Response.data.states);
      setSuccess(Response.data.message);

    }).catch((Error) => {
      setLoading(false);
      setError(Error.response.data.message);
    });
  }, []);

  useEffect(() => {
    if (bloodBankInformationBTN.length > 0) {
      const Data = { selectedState, selectedDistrict, data };
      props.Data(Data, bloodBankInformationBTN);
    }
  }, [bloodBankInformationBTN, data, props, selectedDistrict, selectedState]);

  const handleState = (e) => {
    document.getElementById('district').value = "Select District";
    setSelectedDistrict("");
    const value = e.target.value;
    setSelectedState(value);
    setDistrict(state.find(location => location.state === value).districts);
  };

  const handleDistrict = (e) => {
    const value = e.target.value;
    setSelectedDistrict(value);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleCharInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value.replace(/[^a-z A-Z]/ig, "") })
  };

  const handleAddressInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value.replace(/[^a-z A-Z 0-9\s, ,./-]/ig, "") })
  };

  const handleNext = () => {
    setBloodBankInformationBTN("Next");
    setTimeout(() => {
      setBloodBankInformationBTN("");
    }, 100);
  };

  const handleCancel = () => {
    setBloodBankInformationBTN("Cancel");
    setTimeout(() => {
      setBloodBankInformationBTN("");
    }, 100);
  };

  return (
    <div className="BloodBankInformation">

      {loading && <Loading loading={loading} />}
      {Success && <SuccessMessage message={Success} />}
      {Error && <ErrorMessage message={Error} />}

      <div className="BloodBankInformation_box">
        <div className="BloodBankInformation_heading">Blood Bank Address</div>

        <div style={{ padding: "40px 5px", marginBottom: "-20px" }} className="BloodBankInformation_box_container">
          <div className="BloodBankInformation_box_row">
            <div style={{ width: "33%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "20%" }} className="BloodBankInformation_box_item">State<span style={{ color: "red" }}>*</span></div>
              <select style={{ width: "80%" }} className="BloodBankInformation_box_input" defaultValue={"Select State"} onChange={handleState}>
                <option value="Select State" disabled>Select State</option>

                {
                  state.map((element) => (
                    <option key={element.index} name="State" value={element.state}>{element.state}</option>
                  ))
                }
              </select>
            </div>

            <div style={{ width: "33%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "20%" }} className="BloodBankInformation_box_item">District<span style={{ color: "red" }}>*</span></div>
              <select style={{ width: "80%" }} className="BloodBankInformation_box_input" defaultValue={"Select District"} id="district" onChange={handleDistrict}>
                <option value="Select District" disabled>Select District</option>

                {
                  district.map((element) => (
                    <option key={element.index} value={element.district}>{element.district}</option>
                  ))
                }
              </select>
            </div>

            <div style={{ width: "33%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "20%" }} className="BloodBankInformation_box_item">City</div>
              <input style={{ width: "75%", height: "20px" }} type="text" name="City" value={City} className="BloodBankInformation_box_input" onChange={handleCharInput} />
            </div>
          </div>
        </div>
      </div>

      <div className="BloodBankInformation_box">
        <div className="BloodBankInformation_heading">Blood Bank Details</div>

        <div style={{ padding: "40px 5px", marginBottom: "-20px" }} className="BloodBankInformation_box_container">

          <div className="BloodBankInformation_box_row">
            <div style={{ width: "50%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "40%" }} className="BloodBankInformation_box_item">Blood Bank Name<span style={{ color: "red" }}>*</span></div>
              <input style={{ width: "60%", height: "20px" }} type="text" name="BloodBankName" value={BloodBankName} className="BloodBankInformation_box_input" onChange={handleCharInput} />
            </div>

            <div style={{ width: "50%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "40%" }} className="BloodBankInformation_box_item">Parent Hospital Name</div>
              <input style={{ width: "60%", height: "20px" }} type="text" name="ParentHospitalName" value={ParentHospitalName} className="BloodBankInformation_box_input" onChange={handleCharInput} />
            </div>
          </div>

          <div className="BloodBankInformation_box_row">
            <div style={{ width: "33%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "50%" }} className="BloodBankInformation_box_item">Short Name</div>
              <input style={{ width: "50%", height: "20px" }} type="text" name="ShortName" value={ShortName} className="BloodBankInformation_box_input" onChange={handleCharInput} />
            </div>

            <div style={{ width: "33%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "46%" }} className="BloodBankInformation_box_item">Category<span style={{ color: "red" }}>*</span></div>
              <select style={{ width: "52%", height: "43px" }} name="Category" value={Category} className="BloodBankInformation_box_input" onChange={handleChange}>
                <option value="">Select Type</option>
                <option value="Govt.">Govt.</option>
                <option value="Red Cross">Red Cross</option>
                <option value="Charitable/Vol">Charitable/Vol</option>
                <option value="Govt">Private</option>
              </select>
            </div>

            <div style={{ width: "33%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "50%" }} className="BloodBankInformation_box_item">Contact Person<span style={{ color: "red" }}>*</span></div>
              <input style={{ width: "50%", height: "20px" }} type="text" name="ContactPerson" value={ContactPerson} className="BloodBankInformation_box_input" onChange={handleCharInput} />
            </div>
          </div>

          <div className="BloodBankInformation_box_row">
            <div style={{ width: "33%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "50%" }} className="BloodBankInformation_box_item">Email<span style={{ color: "red" }}>*</span></div>
              <input style={{ width: "50%", height: "20px" }} type="text" name="Email" value={Email} className="BloodBankInformation_box_input" onChange={handleChange} />
            </div>

            <div style={{ width: "33%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "50%" }} className="BloodBankInformation_box_item">Contact No.<span style={{ color: "red" }}>*</span></div>
              <input style={{ width: "50%", height: "20px" }} type="number" name="ContactNumber" value={ContactNumber} className="BloodBankInformation_box_input" onChange={handleChange} />
            </div>

            <div style={{ width: "33%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "50%" }} className="BloodBankInformation_box_item">Fax No.</div>
              <input style={{ width: "50%", height: "20px" }} type="number" name="FaxNumber" value={FaxNumber} className="BloodBankInformation_box_input" onChange={handleChange} />
            </div>
          </div>

          <div className="BloodBankInformation_box_row">
            <div style={{ width: "33%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "50%" }} className="BloodBankInformation_box_item">Licence No.</div>
              <input style={{ width: "50%", height: "20px" }} type="text" name="LicenceNumber" value={LicenceNumber} className="BloodBankInformation_box_input" onChange={handleChange} />
            </div>

            <div style={{ width: "33%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "50%" }} className="BloodBankInformation_box_item">From Date</div>
              <input style={{ width: "50%", height: "20px" }} type="date" name="FromDate" value={FromDate} className="BloodBankInformation_box_input" onChange={handleChange} />
            </div>

            <div style={{ width: "33%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "50%" }} className="BloodBankInformation_box_item">To Date</div>
              <input style={{ width: "50%", height: "20px" }} type="date" name="ToDate" value={ToDate} className="BloodBankInformation_box_input" onChange={handleChange} />
            </div>
          </div>

          <div className="BloodBankInformation_box_row">
            <div style={{ width: "33%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "46%" }} className="BloodBankInformation_box_item">Component Facility</div>
              <select style={{ width: "52%", height: "43px" }} name="ComponentFacility" value={ComponentFacility} className="BloodBankInformation_box_input" onChange={handleChange}>
                <option>Select Value</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div style={{ width: "33%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "46%" }} className="BloodBankInformation_box_item">Apheresis Facility</div>
              <select style={{ width: "52%", height: "43px" }} name="ApheresisFacility" value={ApheresisFacility} className="BloodBankInformation_box_input" onChange={handleChange}>
                <option>Select Value</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div style={{ width: "33%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "50%" }} className="BloodBankInformation_box_item">Helpline No.</div>
              <input style={{ width: "50%", height: "20px" }} type="number" name="HelplineNumber" value={HelplineNumber} className="BloodBankInformation_box_input" onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>

      <div className="BloodBankInformation_box">
        <div className="BloodBankInformation_heading">Postal Address</div>

        <div style={{ padding: "40px 5px", marginBottom: "-20px" }} className="BloodBankInformation_box_container">
          <div className="BloodBankInformation_box_row">
            <div style={{ width: "100%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "30%" }} className="BloodBankInformation_box_item">Address 1<span style={{ color: "red" }}>*</span></div>
              <input style={{ width: "70%", height: "20px" }} type="text" name="Address1" value={Address1} className="BloodBankInformation_box_input" onChange={handleAddressInput} />
            </div>
          </div>

          <div className="BloodBankInformation_box_row">
            <div style={{ width: "100%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "30%" }} className="BloodBankInformation_box_item">Address 2</div>
              <input style={{ width: "70%", height: "20px" }} type="text" name="Address2" value={Address2} className="BloodBankInformation_box_input" onChange={handleAddressInput} />
            </div>
          </div>

          <div className="BloodBankInformation_box_row">
            <div style={{ width: "100%" }} className="BloodBankInformation_box_block">
              <div style={{ width: "30%" }} className="BloodBankInformation_box_item">Pincode<span style={{ color: "red" }}>*</span></div>
              <input style={{ width: "70%", height: "20px" }} type="number" name="Pincode" value={Pincode} className="BloodBankInformation_box_input" onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "5px", marginTop: "-60px" }} className="BloodBankInformation_box_container">
        <div className="BloodBankInformation_box_row">
          <div style={{ width: "50%" }} className="BloodBankInformation_box_block">
            <div style={{ width: "30%" }} className="BloodBankInformation_box_item">Website</div>
            <input style={{ width: "70%", height: "20px" }} type="text" name="Website" value={Website} className="BloodBankInformation_box_input" onChange={handleChange} />
          </div>
        </div>

        <div className="BloodBankInformation_box_row">
          <div style={{ width: "50%" }} className="BloodBankInformation_box_block">
            <div style={{ width: "50%" }} className="BloodBankInformation_box_item">No of Bed Hospital</div>
            <input style={{ width: "50%", height: "20px" }} type="number" name="NoOfBedHospital" value={NoOfBedHospital} className="BloodBankInformation_box_input" onChange={handleChange} />
          </div>
        </div>
      </div>

      <div className="BloodBankInformation_button">
        <button onClick={handleNext}>Next</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>

    </div>
  );

};

export default BloodBankInformation;