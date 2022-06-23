import React, { useEffect, useState } from 'react';
import './UserType.css';

function UserType(props) {

    const [data, setData] = useState("");
    const [userTypeBTN, setUserTypeBTN] = useState("");

    useEffect(() => {
        if (userTypeBTN.length > 0) {
            props.Data(data, userTypeBTN);
        };
    }, [data, props, userTypeBTN]);

    const handleSave = () => {
        setUserTypeBTN("Save");
        setTimeout(() => {
            setUserTypeBTN("");
        }, 100);
    };

    const handleBack = () => {
        setUserTypeBTN("Back");
        setTimeout(() => {
            setUserTypeBTN("");
        }, 100);
    };

    const handleCancel = () => {
        setUserTypeBTN("Cancel");
        setTimeout(() => {
            setUserTypeBTN("");
        }, 100);
    };

    const handleUserType = (e) => {
        const value = e.target.value;
        setData(value);
    };

    return (
        <div className="UserType">

            <div className="UserType_container">
                <div className='UserType_container_block'>
                    <div className='UserType_container_item'>
                        <div className="UserType_container_item_heading">SINGLE USER</div>
                        <i className="fas fa-user UserType_icon"></i>
                        <div className="UserType_container_item_body">
                            <div>All the authority given to single user</div>
                            <div>Recomended, If you have single pc working in blood bank</div>
                        </div>

                        <div className="UserType_container_item_input">
                            <input type="radio" name="userType" value="Single User" id="single" onChange={handleUserType} />
                            <label htmlFor="single" >Single User</label>
                        </div>
                    </div>
                </div>

                <div className='UserType_container_block'>
                    <div className='UserType_container_item'>
                        <div className="UserType_container_item_heading">MULTI USER</div>
                        <i className="fas fa-users UserType_icon"></i>
                        <div className="UserType_container_item_body">
                            <div>For Admin,Lab Technician</div>
                            <div>Divide responsibility b/w users</div>
                            <div>Recomended, when everyone have different responsibility</div>
                        </div>

                        <div className="UserType_container_item_input">
                            <input type="radio" name="userType" value="Multi User" id="multi" onChange={handleUserType} />
                            <label htmlFor="multi" >Multi User</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="UserType_button">
                <button onClick={handleSave}>Save</button>
                <button onClick={handleBack}>Back</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>

        </div>
    );

};

export default UserType;