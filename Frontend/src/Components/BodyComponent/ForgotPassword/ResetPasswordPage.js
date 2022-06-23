import React, { useState, useEffect } from 'react';
import Server from 'axios';
import { useHistory } from 'react-router-dom';
import { isLength, isMatch } from '../../Utilities/Validation';
import { Loading, SuccessMessage, ErrorMessage } from '../../Utilities/Notification';

const initialState = {
    Password: "",
    ConfirmPassword: "",
    Success: "",
    Error: ""
};

function ResetPasswordPage(props) {

    const [data, setData] = useState(initialState);
    const { Password, ConfirmPassword, Success, Error } = data;
    const [loading, setLoading] = useState(false);
    const { user_id, token } = props.history.location.state;
    const history = useHistory();

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value, Success: "", Error: "" });
    };

    useEffect(() => {
        if (Success) {
            setTimeout(() => {
                history.push("/login");
            }, 1000);
        }
    }, [Success, history]);

    const handleResetPassword = () => {

        if (isLength(Password)) {
            return setData({ ...data, Error: "Password must be at least 8 characters...!", Success: "" });

        } else if (!isMatch(Password, ConfirmPassword)) {
            return setData({ ...data, Error: "Password did not match...!", Success: "" });

        } else {
            setLoading(true);
            Server.post("/user/reset_password", { user_id: user_id, token: token, Password: Password }).then(Response => {
                setLoading(false);
                setData({ ...data, Error: "", Success: Response.data.message });

            }).catch(Error => {
                setLoading(false);
                Error.response.data.message && setData({ ...data, Error: Error.response.data.message, Success: "" })
            });
        };

    };

    return (
        <div className="ResetPassword">

            {loading && <Loading loading={loading} />}
            {Success && <SuccessMessage message={Success} />}
            {Error && <ErrorMessage message={Error} />}

            <div className="ResetPassword_form">
                <h2>Reset Your Password</h2>

                <div className="form">
                    <label htmlFor='userPassword'>Password: </label>
                    <input type="password" placeholder='Enter Your Password' id='userPassword' value={Password} name='Password' onChange={handleChangeInput} />
                </div>

                <div className="form">
                    <label htmlFor='confirmUserPassword'>Confirm Password: </label>
                    <input type="password" placeholder='Re-Enter Your Password' id='confirmUserPassword' value={ConfirmPassword} name='ConfirmPassword' onChange={handleChangeInput} />
                </div>

                <button onClick={handleResetPassword}>Reset Password</button>
            </div>

        </div>
    );

};

export default ResetPasswordPage;
