import React, { useState, useEffect } from 'react';
import './CreateCampPage.css';
import { useSelector } from 'react-redux';
import Server from 'axios';
import { useHistory } from 'react-router-dom';
import { isEmpty, isValidPhone } from '../../Utilities/Validation';
import { Loading, SuccessMessage, ErrorMessage } from '../../Utilities/Notification';

const initialState = {
    CampName: "",
    ConductedBy: "",
    OrganizedBy: "",
    Register: "",
    Contact: "",
    Address: "",
    Error: "",
    Success: ""
};

function CreateCampPage() {

    const userAuthentication = useSelector(State => State.userAuthentication);
    const { user } = userAuthentication;
    const Email = user.Email;

    const [data, setData] = useState(initialState);
    const { CampName, ConductedBy, OrganizedBy, Register, Contact, Address, Error, Success } = data;
    const [state, setState] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [district, setDistrict] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [Date, setDate] = useState("");
    const [startingTime, setStartingTime] = useState("");
    const [endingTime, setEndingTime] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        Server.get("/locations").then((Response) => {
            setState(Response.data.states);

        }).catch((Error) => {
            console.log(Error);
        });
    }, []);

    const handleState = (e) => {
        document.getElementById('district').value = "Select District";
        setSelectedDistrict("");
        const value = e.target.value;
        setSelectedState(value)
        setDistrict(state.find(location => location.state === value).districts);
    };

    const handleDistrict = (e) => {
        const value = e.target.value;
        setSelectedDistrict(value);
    };

    const handleCharInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData({ ...data, [name]: value.replace(/[^a-z A-Z]/ig, "") });
    };

    const handleAddressInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData({ ...data, [name]: value.replace(/[^a-z A-Z 0-9\s, ,./-]/ig, "") });
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "Date") {
            const str1 = value.slice(0, 4);
            const str2 = value.slice(4, 8);
            const str3 = value.slice(8);
            const dateString = str3 + str2 + str1;
            const arr = dateString.split("");

            if (dateString.charAt(3) === "0" && dateString.charAt(4) === "1") {
                arr.splice(3, 2, "Jan");
                setDate(arr.join(""));

            } else if (dateString.charAt(3) === "0" && dateString.charAt(4) === "2") {
                arr.splice(3, 2, "Feb");
                setDate(arr.join(""));

            } else if (dateString.charAt(3) === "0" && dateString.charAt(4) === "3") {
                arr.splice(3, 2, "Mar");
                setDate(arr.join(""));

            } else if (dateString.charAt(3) === "0" && dateString.charAt(4) === "4") {
                arr.splice(3, 2, "Apr");
                setDate(arr.join(""));

            } else if (dateString.charAt(3) === "0" && dateString.charAt(4) === "5") {
                arr.splice(3, 2, "May");
                setDate(arr.join(""));

            } else if (dateString.charAt(3) === "0" && dateString.charAt(4) === "6") {
                arr.splice(3, 2, "Jun");
                setDate(arr.join(""));

            } else if (dateString.charAt(3) === "0" && dateString.charAt(4) === "7") {
                arr.splice(3, 2, "Jul");
                setDate(arr.join(""));

            } else if (dateString.charAt(3) === "0" && dateString.charAt(4) === "8") {
                arr.splice(3, 2, "Aug");
                setDate(arr.join(""));

            } else if (dateString.charAt(3) === "0" && dateString.charAt(4) === "9") {
                arr.splice(3, 2, "Sep");
                setDate(arr.join(""));

            } else if (dateString.charAt(3) === "1" && dateString.charAt(4) === "0") {
                arr.splice(3, 2, "Oct");
                setDate(arr.join(""));

            } else if (dateString.charAt(3) === "1" && dateString.charAt(4) === "1") {
                arr.splice(3, 2, "Nov");
                setDate(arr.join(""));

            } else if (dateString.charAt(3) === "1" && dateString.charAt(4) === "2") {
                arr.splice(3, 2, "Dec");
                setDate(arr.join(""));
            }

        } else if (name === "StartingTime") {
            setStartingTime(value);

        } else if (name === "EndingTime") {
            setEndingTime(value);

        } else {
            setData({ ...data, [name]: value });
        };
    };

    const handleSubmiit = (e) => {
        e.preventDefault();

        if (isEmpty(CampName) || isEmpty(ConductedBy) || isEmpty(OrganizedBy) || isEmpty(Date) || isEmpty(startingTime) || isEmpty(endingTime) || isEmpty(Contact) || isEmpty(Address) || isEmpty(selectedState) || isEmpty(selectedDistrict)) {
            setData({ ...data, Error: "Please fill in all fields...!", Success: "" });

            setTimeout(() => {
                setData({ ...data, Error: "", Success: "" });
            }, 3000);

        } else if (!isValidPhone(Contact)) {
            setData({ ...data, Error: "Invalid mobile number...!", Success: "" });

            setTimeout(() => {
                setData({ ...data, Error: "", Success: "" });
            }, 3000);

        } else {
            setLoading(true);
            Server.post("/saveDonationCamp", { CampName, ConductedBy, OrganizedBy, Email, Register, Date, Time: startingTime + "-" + endingTime, Contact, Address, State: selectedState, District: selectedDistrict }).then(Response => {
                setLoading(false);
                setData({ ...data, Error: "", Success: Response.data.message });

                setTimeout(() => {
                    history.push("/profile");
                }, 3000);

            }).catch(Error => {
                setLoading(false);
                Error.response.data.message &&
                    setData({ ...data, Error: Error.response.data.message, Success: "" });
            });
        };

    };

    return (
        <div className="CreateCamp">

            <div className="CreateCamp_heading">Create A Camp</div>

            {loading && <Loading loading={loading} />}
            {Success && <SuccessMessage message={Success} />}
            {Error && <ErrorMessage message={Error} />}

            <div className="CreateCamp_container">
                <div className="CreateCamp_container_heading">Camp Details</div>

                <div className="CreateCamp_container_form">
                    <form onSubmit={handleSubmiit}>
                        <div className="CreateCamp_form_row">
                            <div className="CreateCamp_form_input">
                                <div>Camp Name<span style={{ color: "red" }}>*</span></div>

                                <input style={{ padding: "10px 7px", width: "225px" }} type="text" name="CampName" value={CampName} onChange={handleCharInput} />
                            </div>

                            <div className="CreateCamp_form_input">
                                <div>Conducted By<span style={{ color: "red" }}>*</span></div>

                                <input style={{ padding: "10px 7px", width: "225px" }} type="text" name="ConductedBy" value={ConductedBy} onChange={handleCharInput} />
                            </div>

                            <div className="CreateCamp_form_input">
                                <div>Organized By<span style={{ color: "red" }}>*</span></div>

                                <input style={{ padding: "10px 7px", width: "225px" }} type="text" name="OrganizedBy" value={OrganizedBy} onChange={handleCharInput} />
                            </div>
                        </div>

                        <div className="CreateCamp_form_row">
                            <div className="CreateCamp_form_input">
                                <div>State<span style={{ color: "red" }}>*</span></div>

                                <select style={{ padding: "10px", width: "240px" }} defaultValue={"Select State"} onChange={handleState}>
                                    <option value="Select State" disabled>Select State</option>

                                    {
                                        state.map((element) => (
                                            <option key={element.index} name="State" value={element.state}>{element.state}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="CreateCamp_form_input">
                                <div>District<span style={{ color: "red" }}>*</span></div>

                                <select style={{ padding: "10px", width: "240px" }} defaultValue={"Select District"} id="district" onChange={handleDistrict}>
                                    <option value="Select District" disabled>Select District</option>

                                    {
                                        district.map((element) => (
                                            <option key={element.index} value={element.district}>{element.district}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="CreateCamp_form_input">
                                <div>Register</div>

                                <input style={{ padding: "10px 7px", width: "225px" }} type="text" name="Register" value={Register} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="CreateCamp_form_row">
                            <div className="CreateCamp_form_input">
                                <div>Date<span style={{ color: "red" }}>*</span></div>

                                <input style={{ padding: "8px 7px", width: "225px" }} type="date" name="Date" placeholder="dd-mm-yyyy" onChange={handleChange} />
                            </div>

                            <div className="CreateCamp_form_input">
                                <div>Starting Time<span style={{ color: "red" }}>*</span></div>

                                <input style={{ padding: "8px 7px", width: "225px" }} type="time" name="StartingTime" onChange={handleChange} />
                            </div>

                            <div className="CreateCamp_form_input">
                                <div>Ending Time<span style={{ color: "red" }}>*</span></div>

                                <input style={{ padding: "8px 7px", width: "225px" }} type="time" name="EndingTime" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="CreateCamp_form_row">
                            <div className="CreateCamp_form_input">
                                <div>Contact<span style={{ color: "red" }}>*</span></div>

                                <input style={{ padding: "10px 7px", width: "225px" }} type="number" name="Contact" value={Contact} onChange={handleChange} />
                            </div>

                            <div className="CreateCamp_form_input">
                                <div>Address<span style={{ color: "red" }}>*</span></div>

                                <input style={{ padding: "10px 7px", width: "475px" }} type="text" name="Address" value={Address} onChange={handleAddressInput} />
                            </div>
                        </div>

                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>

        </div>
    );

};

export default CreateCampPage;