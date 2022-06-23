import React, { useState, useEffect } from 'react';
import './Authentication.css';
import Server from 'axios';
import { useHistory } from 'react-router-dom';
import { isEmpty } from '../../Utilities/Validation';
import { Loading, SuccessMessage, ErrorMessage } from '../../Utilities/Notification';

function UserAuthenticationPage(props) {

    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [Success, setSuccess] = useState("");
    const [Error, setError] = useState("");
    const Token = props.history.location.state.token;
    const history = useHistory();

    setTimeout(() => {
        setLoading(true);
        history.push("/register");
    }, 360000);

    useEffect(() => {
        if (Error === "Code Expired... Try Again...!") {
            setTimeout(() => {
                setLoading(true);
                history.push("/register");
            }, 3000);
        };
    }, [Error, history]);

    const handleCode = (e) => {
        const value = e.target.value;
        setCode(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEmpty(code)) {
            setError("Please enter the verification code...!");
            setTimeout(() => {
                setError("");
            }, 3000);

        } else if (code.length !== 6) {
            setError("Please enter 6 digit of verification code...!");
            setTimeout(() => {
                setError("");
            }, 3000);

        } else {
            setLoading(true);
            Server.post("/user/activation", { Activation_Token: Token, emailVerificationCode: code }).then(Response => {
                setLoading(false);
                setSuccess(Response.data.message);
                setTimeout(() => {
                    setSuccess("");
                    history.push("/login");
                }, 3000);

            }).catch(Error => {
                setLoading(false);
                setError(Error.response.data.message);
                setTimeout(() => {
                    setError("");
                }, 3000);
            });
        };
    };

    return (
        <div className="AuthenticationEmail">

            {loading && <Loading loading={loading} />}
            {Success && <SuccessMessage message={Success} />}
            {Error && <ErrorMessage message={Error} />}

            <form onSubmit={handleSubmit}>
                <label htmlFor="EmailCode">Please enter your 6 digit email verificaticatin code</label>
                <div>The code will expire in 5 minutes</div>
                <input type="text" name="emailCode" id="EmailCode" onChange={handleCode} />

                <button type="submit">Submit</button>
            </form>

        </div>
    );

};

export default UserAuthenticationPage;
