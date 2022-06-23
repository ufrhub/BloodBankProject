import React, { useState, useEffect } from 'react';
import './ForgotPasswordPage.css';
import Server from 'axios';
import { useHistory } from 'react-router-dom';
import { isValid, isEmpty } from '../../Utilities/Validation';
import { Loading, SuccessMessage, ErrorMessage } from '../../Utilities/Notification';

const initialState = {
    Email: "",
    Success: "",
    Error: ""
};

function ForgotPassword() {

    const [data, setData] = useState(initialState);
    const { Email, Success, Error } = data;
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState("");
    const history = useHistory();


    const handleChangeInput = (e) => {

        const { name, value } = e.target;
        setData({ ...data, [name]: value, Error: "", Success: "" });

    };

    useEffect(() => {
        if (token) {
            setTimeout(() => {
                history.push({
                    pathname: "/user_verification",
                    state: {
                        token: token
                    }
                });
            }, 1000);
        };
    }, [history, token])

    const SendPasswordResetLink = () => {

        if (isEmpty(Email)) {
            return setData({ ...data, Success: "", Error: "Please enter your email...!" });

        } else if (!isValid(Email)) {
            return setData({ ...data, Success: "", Error: "Invalid Email...!" });

        } else {
            setLoading(true);
            Server.post("/user/forgot_password", { Email }).then(Response => {
                setLoading(false);
                setData({ ...data, Success: Response.data.message, Error: "" });
                setToken(Response.data.token);

            }).catch(Error => {
                setLoading(false);
                Error.response.data.message && setData({ ...data, Success: "", Error: Error.response.data.message });
            });
        };

    };

    return (
        <div className="ForgotPassword">

            {loading && <Loading loading={loading} />}
            {Success && <SuccessMessage message={Success} />}
            {Error && <ErrorMessage message={Error} />}

            <div className="ForgotPassword_form">
                <h2>Forgot Your Password?</h2>

                <div className="form">
                    <label htmlFor='userEmail'>Email: </label>
                    <input type="email" placeholder='Enter Your Email' id='userEmail' value={Email} name='Email' onChange={handleChangeInput} />
                </div>

                <button onClick={SendPasswordResetLink}>Verify Your Email</button>
            </div>

        </div>
    );

};

export default ForgotPassword;
