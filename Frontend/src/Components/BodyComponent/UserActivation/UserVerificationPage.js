import React, { useState, useEffect } from 'react';
import './Authentication.css';
import Server from 'axios';
import { useHistory } from 'react-router-dom';
import { isEmpty } from '../../Utilities/Validation';
import { Loading, SuccessMessage, ErrorMessage } from '../../Utilities/Notification';

function UserVerificationPage(props) {

    const [code, setCode] = useState("");
    const [userID, setUserID] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [token, setToken] = useState("");
    const [loading, setLoading] = useState(false);
    const [Success, setSuccess] = useState("");
    const [Error, setError] = useState("");
    const Token = props.history.location.state.token;
    const history = useHistory();

    useEffect(() => {
        if (Error === "Code Expired... Try Again...!") {
            setTimeout(() => {
                setLoading(true);
                history.push("/login");
            }, 2000);
        };

        return () => { setError(""); }
    }, [Error, history]);

    useEffect(() => {
        if (userEmail && userID && token) {
            setLoading(true);
            setTimeout(() => {
                history.push({
                    pathname: "/reset_user_password",
                    state: {
                        user_id: userID,
                        token: token,
                        user_Email: userEmail
                    }
                });
            }, 1000);
        };
    }, [history, token, userEmail, userID]);

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
            Server.post("/user/verify_user", { Access_Token: Token, Verification_Code: code }).then(Response => {
                setLoading(false);
                setSuccess(Response.data.message);
                setUserID(Response.data.user_id);
                setUserEmail(Response.data.user_Email);
                setToken(Response.data.token);
                setTimeout(() => {
                    setSuccess("");
                }, 3000);

            }).catch(Error => {
                setLoading(false);
                setError(Error.response.data.message);
                setTimeout(() => {
                    setError("");
                }, 3000);
            });
        }
    };

    return (
        <div className="AuthenticationEmail">

            {loading && <Loading loading={loading} />}
            {Success && <SuccessMessage message={Success} />}
            {Error && <ErrorMessage message={Error} />}

            <form onSubmit={handleSubmit}>
                <label htmlFor="EmailCode">Please enter your 6 digit email verificaticatin code</label>
                <div>The code will expire in 15 minutes</div>
                <input type="text" name="emailCode" id="EmailCode" onChange={handleCode} />

                <button type="submit">Submit</button>
            </form>

        </div>
    );

};

export default UserVerificationPage;
