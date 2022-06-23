import React, { useState } from 'react';
import './DonorLoginPage.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Server from 'axios';
import { DispatchUserLogin } from '../../../Redux/Actions/AuthenticationAction';
import { isEmpty, isValid } from '../../Utilities/Validation';
import { Loading, SuccessMessage, ErrorMessage } from '../../Utilities/Notification';

const initialState = {
    Email: "",
    Password: "",
    Error: "",
    Success: ""
};

function DonorLoginPage() {

    const [user, setUser] = useState(initialState);
    const { Email, Password, Error, Success } = user;
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (isEmpty(Email) || isEmpty(Password)) {
            return setUser({ ...user, Error: "Please fill in all fields...!", Success: "" });

        } else if (!isValid(Email)) {
            return setUser({ ...user, Error: "Invalid email...!", Success: "" });

        } else {
            setLoading(true);
            Server.post('/user/login', { Email, Password }).then(Response => {
                setLoading(false);
                setUser({ ...user, Error: "", Success: Response.data.message });

                localStorage.setItem('firstLogin', true);

                dispatch(DispatchUserLogin());
                history.push("/profile");

            }).catch(Error => {
                setLoading(false);
                Error.response.data.message &&
                    setUser({ ...user, Error: Error.response.data.message, Success: '' });
            });
        };

    };

    return (
        <div className="DonorLoginPage" >

            {loading && <Loading loading={loading} />}
            {Success && <SuccessMessage message={Success} />}
            {Error && <ErrorMessage message={Error} />}

            <div className="login-model">
                <div className="login-heading">Donor Login</div>

                <div className="model-content">
                    <form className="login-section" onSubmit={handleSubmit}>
                        <div className="login-inputs">
                            <div className="inputs">
                                <div className="u-name">Username</div>
                                <input type="text" value={Email} name="Email" placeholder="Enter Username" onChange={handleChangeInput} />
                            </div>

                            <div className="inputs">
                                <div>Password</div>
                                <input type="password" value={Password} name="Password" placeholder="Enter Password" onChange={handleChangeInput} />
                            </div>
                        </div>

                        <div className="form-btn">
                            <button type="submit" className="signin-btn"><strong>Sign in</strong></button>

                            <Link to="/forgot_user_password" style={{ "textDecoration": "none" }}><button className="forgot-btn"><strong>Forgot Password</strong></button></Link>
                        </div>
                    </form>

                    <section className="register-section">
                        <div className="register-section-heading">Register Now</div>
                        <div className="register-section-option"><i className="fas fa-check" style={{ "marginRight": "5px", color: "green" }}></i> View/Add your Donations</div>
                        <div className="register-section-option"><i className="fas fa-check" style={{ "marginRight": "5px", color: "green" }}></i> Update your Profile</div>
                        <div className="register-section-option"><i className="fas fa-check" style={{ "marginRight": "5px", color: "green" }}></i> Manage your Account</div>
                        <Link to="/register" style={{ "textDecoration": "none" }}><div className="register-section-btn"><strong>Register Now</strong></div></Link>
                    </section>
                </div>
            </div>

        </div>
    );

};

export default DonorLoginPage;
