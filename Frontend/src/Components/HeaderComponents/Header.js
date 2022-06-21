import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {

    const [time, setTime] = useState(new Date());
    const [date, setDate] = useState();
    const [curTime, setCurTime] = useState();

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        let month = ""
        if (time.getMonth() + 1 === 1) {
            month = "Jan";

        } else if (time.getMonth() + 1 === 2) {
            month = "Feb";

        } else if (time.getMonth() + 1 === 3) {
            month = "Mar";

        } else if (time.getMonth() + 1 === 4) {
            month = "Apr";

        } else if (time.getMonth() + 1 === 5) {
            month = "May";

        } else if (time.getMonth() + 1 === 6) {
            month = "Jun";

        } else if (time.getMonth() + 1 === 7) {
            month = "Jul";

        } else if (time.getMonth() + 1 === 8) {
            month = "Aug";

        } else if (time.getMonth() + 1 === 9) {
            month = "Sep";

        } else if (time.getMonth() + 1 === 10) {
            month = "Oct";

        } else if (time.getMonth() + 1 === 11) {
            month = "Nov";

        } else if (time.getMonth() + 1 === 12) {
            month = "Dec";
        };

        setDate(time.getDate() + '-' + month + '-' + time.getFullYear());
        setCurTime(time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds());
    }, [time]);

    return (
        <header className='Header'>
            <nav className='Header-nav'>
                <section className='Header-logo-section'>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <img className='Header-icon' src='https://www.irctc.co.in/nget/assets/images/secondry-logo.png' alt='' />
                    </Link>
                </section>

                <section className='Header-navigation-section'>
                    <div className='header-top-div'>
                        <div className='Header-navigation h-n-top'>
                            <div style={{ background: "#213d77", color: "white", fontWeight: "700" }} className="Header-navigation-option"> Login </div>
                            <div style={{ fontWeight: "600" }} className="Header-navigation-option"> Register </div>
                            <div style={{ fontWeight: "600" }} className="Header-navigation-option"> Agent Login </div>
                            <div style={{ fontWeight: "600" }} className="Header-navigation-option"> Contact Us </div>
                            <div style={{ fontWeight: "600" }} className="Header-navigation-option"> Ask Disha </div>
                            <div style={{ background: "#c9c9c9", fontWeight: "700", padding: "0 15px" }} className="Header-navigation-option"> Alerts </div>
                            <div style={{ fontWeight: "700", padding: "0 15px", lineHeight: "2.1" }}> {date} [{curTime}]</div>
                        </div>
                    </div>

                    <div className='header-bottom-div'>
                        <ul className='Header-navigation'>
                            <div style={{ color: "grey", fontWeight: "700", padding: "10px", marginRight: "17px" }} className="Header-navigation-option">
                                <i className="fas fa-home"></i>
                            </div>

                            <li style={{ position: "relative", fontWeight: "700" }}>
                                <div style={{ background: "#213d77", color: "white" }} className="Header-navigation-option">IRCTC Exclusive</div>

                                <ul style={{ left: "0%" }} className="Header-navigation-links">
                                    <div className="Header-navigation-links-li">
                                        <li style={{ padding: "7px 15px" }}>
                                            <img className='icon-one' src='https://www.irctc.co.in/nget/assets/images/irctc_logo.png' alt='' />
                                            IRCTC eWallet
                                            <i style={{ top: "15px" }} className="fas fa-caret-right arrow-one"></i>
                                        </li>

                                        <ul className="Header-navigation-links-2">
                                            <Link to="/">
                                                <li>About IRCTC eWallet</li>
                                            </Link>

                                            <Link to="/">
                                                <li>IRCTC eWallet User Guide</li>
                                            </Link>
                                        </ul>
                                    </div>

                                    <Link to="/">
                                        <li style={{ padding: "7px 15px" }}>
                                            <img className='icon-one' src='https://www.irctc.co.in/nget/assets/images/icons/IRCTC-Mudra.png' alt='' />
                                            IRCTC iMudra
                                        </li>
                                    </Link>

                                    <Link to="/">
                                        <li style={{ padding: "7px 15px" }}>
                                            <img className='icon-one' src='https://www.irctc.co.in/nget/assets/images/irctc_logo.png' alt='' />
                                            IRCTC iPay
                                        </li>
                                    </Link>

                                    <Link to="/">
                                        <li style={{ padding: "7px 15px" }}>
                                            <img className='icon-one' src='https://www.irctc.co.in/nget/assets/images/icons/gyfty.png' alt='' />
                                            e-Gift Vouchers
                                        </li>
                                    </Link>
                                </ul>
                            </li>

                            <li style={{ position: "relative", fontWeight: "700" }} className="Navigation-option">
                                <div style={{ color: "orange", textDecoration: "underline" }} className="Header-navigation-option">Trains
                                    <i style={{ transform: "translate(0)" }} className="fas fa-sort-up up-arrow"></i>
                                </div>

                                <ul className="Header-navigation-links">
                                    <Link to="/">
                                        <li>Book Ticket</li>
                                    </Link>

                                    <Link to="/">
                                        <li>Foreign Tourist Booking</li>
                                    </Link>

                                    <Link to="/">
                                        <li>Connecting Journey Booking</li>
                                    </Link>

                                    <div className="Header-navigation-links-li">
                                        <li>
                                            IRCTC TRAINS
                                            <i className="fas fa-caret-right arrow-one"></i>
                                        </li>

                                        <ul className="Header-navigation-links-2">
                                            <Link to="/">
                                                <li>Group Booking</li>
                                            </Link>

                                            <Link to="/">
                                                <li>Travel Insurance Claim Process</li>
                                            </Link>
                                        </ul>
                                    </div>

                                    <div className="Header-navigation-links-li">
                                        <li>
                                            Cancel Ticket
                                            <i className="fas fa-caret-right arrow-one"></i>
                                        </li>

                                        <ul className="Header-navigation-links-2">
                                            <Link to="/">
                                                <li>E-tickets</li>
                                            </Link>

                                            <Link to="/">
                                                <li>Counter Ticket</li>
                                            </Link>
                                        </ul>
                                    </div>

                                    <Link to="/">
                                        <li>PNR Enquiry</li>
                                    </Link>

                                    <Link to="/">
                                        <li>Train Schedule</li>
                                    </Link>

                                    <Link to="/">
                                        <li>Track Your Train</li>
                                    </Link>

                                    <Link to="/">
                                        <li>FTR Coach/Train Booking</li>
                                    </Link>
                                </ul>
                            </li>

                            <li style={{ position: "relative", fontWeight: "500" }}>
                                <div className="Header-navigation-option">Buses</div>
                            </li>

                            <li style={{ position: "relative", fontWeight: "500" }}>
                                <div className="Header-navigation-option">Flights</div>
                            </li>

                            <li style={{ position: "relative", fontWeight: "500" }}>
                                <div className="Header-navigation-option">Hotels</div>
                            </li>

                            <li style={{ position: "relative", fontWeight: "500" }} className="Navigation-option">
                                <div className="Header-navigation-option">Holidays
                                    <i style={{ transform: "translate(0)" }} className="fas fa-sort-up up-arrow"></i>
                                </div>

                                <ul className="Header-navigation-links">
                                    <div className="Header-navigation-links-li">
                                        <li>
                                            Special Trains
                                            <i className="fas fa-caret-right arrow-one"></i>
                                        </li>

                                        <ul className="Header-navigation-links-2">
                                            <Link to="/">
                                                <li>Tourist Train</li>
                                            </Link>

                                            <Link to="/">
                                                <li>Maharajas' Express</li>
                                            </Link>
                                        </ul>
                                    </div>

                                    <div className="Header-navigation-links-li">
                                        <li>
                                            Pakages
                                            <i className="fas fa-caret-right arrow-one"></i>
                                        </li>

                                        <ul className="Header-navigation-links-2">
                                            <Link to="/">
                                                <li>Tour Packages</li>
                                            </Link>

                                            <Link to="/">
                                                <li>Air Packages</li>
                                            </Link>

                                            <Link to="/">
                                                <li>International Packages</li>
                                            </Link>

                                            <Link to="/">
                                                <li>Land Packages</li>
                                            </Link>

                                            <Link to="/">
                                                <li>Cruise</li>
                                            </Link>
                                        </ul>
                                    </div>

                                    <div className="Header-navigation-links-li">
                                        <li>
                                            Stays
                                            <i className="fas fa-caret-right arrow-one"></i>
                                        </li>

                                        <ul className="Header-navigation-links-2">
                                            <Link to="/">
                                                <li>Retiring Room</li>
                                            </Link>

                                            <Link to="/">
                                                <li>Lounge</li>
                                            </Link>
                                        </ul>
                                    </div>
                                </ul>
                            </li>

                            <li style={{ position: "relative", fontWeight: "500" }} className="Navigation-option">
                                <div className="Header-navigation-option">Loyalty
                                    <i style={{ transform: "translate(0)" }} className="fas fa-sort-up up-arrow"></i>
                                </div>

                                <ul className="Header-navigation-links">
                                    <Link to="/">
                                        <li>About IRCTC SBI Credit Card</li>
                                    </Link>

                                    <Link to="/">
                                        <li>IRCTC SBI Platinum Card RUPAY e-apply</li>
                                    </Link>
                                </ul>
                            </li>

                            <li style={{ position: "relative", fontWeight: "500" }} className="Navigation-option">
                                <div className="Header-navigation-option">Meals
                                    <i style={{ transform: "translate(0)" }} className="fas fa-sort-up up-arrow"></i>
                                </div>

                                <ul className="Header-navigation-links">
                                    <Link to="/">
                                        <li>Order Food - E-Catering</li>
                                    </Link>

                                    <Link to="/">
                                        <li>Book Food - Pantry Car</li>
                                    </Link>

                                    <Link to="/">
                                        <li>Cooked Food Menu</li>
                                    </Link>
                                </ul>
                            </li>

                            <li style={{ position: "relative", fontWeight: "500" }} className="Navigation-option">
                                <div className="Header-navigation-option">Promotions
                                    <i style={{ transform: "translate(0)" }} className="fas fa-sort-up up-arrow"></i>
                                </div>

                                <ul className="Header-navigation-links">
                                    <div className="Header-navigation-links-li">
                                        <li>
                                            Advertise with us
                                            <i className="fas fa-caret-right arrow-one"></i>
                                        </li>

                                        <ul className="Header-navigation-links-2">
                                            <Link to="/">
                                                <li>Banner-Advertisement</li>
                                            </Link>

                                            <Link to="/">
                                                <li>Push Notification</li>
                                            </Link>

                                            <Link to="/">
                                                <li>Chat Bot Advertisement</li>
                                            </Link>

                                            <Link to="/">
                                                <li>Cuboid Advertisement</li>
                                            </Link>

                                            <Link to="/">
                                                <li>e-Ticket Advertisement</li>
                                            </Link>

                                            <Link to="/">
                                                <li>Logout Advertisement</li>
                                            </Link>

                                            <Link to="/">
                                                <li>SMS(Promotional)</li>
                                            </Link>

                                            <Link to="/">
                                                <li>Booking Mail Advertisement</li>
                                            </Link>

                                            <Link to="/">
                                                <li>Cancellation Mail Advertisement</li>
                                            </Link>

                                            <Link to="/">
                                                <li>Mailer(Promotional)</li>
                                            </Link>

                                            <Link to="/">
                                                <li>Captcha Advertisement</li>
                                            </Link>
                                        </ul>
                                    </div>

                                    <div className="Header-navigation-links-li">
                                        <li>
                                            IRCTC Rail Connect App
                                            <i className="fas fa-caret-right arrow-one"></i>
                                        </li>

                                        <ul className="Header-navigation-links-2">
                                            <Link to="/">
                                                <li>Android Mobile App</li>
                                            </Link>

                                            <Link to="/">
                                                <li>iOS Mobile App</li>
                                            </Link>
                                        </ul>
                                    </div>

                                    <Link to="/">
                                        <li>IRCTC Tourism App</li>
                                    </Link>

                                    <Link to="/">
                                        <li>IRCTC Air App</li>
                                    </Link>

                                    <Link to="/">
                                        <li>UTS TICKET APP</li>
                                    </Link>

                                    <div className="Header-navigation-links-li">
                                        <li>
                                            IRCTC SBI Credit Card
                                            <i className="fas fa-caret-right arrow-one"></i>
                                        </li>

                                        <ul className="Header-navigation-links-2">
                                            <Link to="/">
                                                <li>About IRCTC SBI Credit Card</li>
                                            </Link>

                                            <Link to="/">
                                                <li>IRCTC SBI Platinum Card RUPAY e-apply</li>
                                            </Link>
                                        </ul>
                                    </div>

                                    <Link to="/">
                                        <li>National Voter"s Service Portal</li>
                                    </Link>

                                    <Link to="/">
                                        <li>Mahila E-Haat</li>
                                    </Link>

                                    <Link to="/">
                                        <li>Rail Drishti</li>
                                    </Link>

                                    <Link to="/">
                                        <li>Indian Railways Magazines</li>
                                    </Link>

                                    <Link to="/">
                                        <li>Railways Freight Business Portal</li>
                                    </Link>
                                </ul>
                            </li>

                            <li style={{ position: "relative", fontWeight: "700" }}>
                                <div style={{ background: "#213d77", color: "white" }} className="Header-navigation-option">Premium Partner</div>

                                <ul style={{ left: "0%" }} className="Header-navigation-links">
                                    <Link to="/">
                                        <li style={{ padding: "7px 20px" }}>
                                            <img className='icon-one' src='https://www.irctc.co.in/nget/assets/images/makeMyTrip.png' alt='' />
                                            MakeMyTrip-Trains
                                        </li>
                                    </Link>

                                    <Link to="/">
                                        <li style={{ padding: "7px 20px" }}>
                                            <img className='icon-one' src='https://www.irctc.co.in/nget/assets/images/easeMyTrip.png' alt='' />
                                            EaseMyTrip
                                        </li>
                                    </Link>

                                    <Link to="/">
                                        <li style={{ padding: "7px 20px" }}>
                                            <img className='icon-one' src='https://www.irctc.co.in/nget/assets/images/goibibo.png' alt='' />
                                            Goibibo
                                        </li>
                                    </Link>
                                </ul>
                            </li>

                            <li style={{ position: "relative", fontWeight: "700" }} className="Navigation-option">
                                <div className="Header-navigation-option">More
                                    <i style={{ transform: "translate(0)" }} className="fas fa-sort-up up-arrow"></i>
                                </div>

                                <ul style={{ left: "-255%" }} className="Header-navigation-links">
                                    <Link to="/">
                                        <li>ChatBot as a Service (CaaS)</li>
                                    </Link>

                                    <Link to="/">
                                        <li>Link Your Aadhaar</li>
                                    </Link>

                                    <Link to="/">
                                        <li>Counter Ticket Cancellation</li>
                                    </Link>

                                    <Link to="/">
                                        <li>Counter Ticket Boarding Point Change</li>
                                    </Link>

                                    <Link to="/">
                                        <li>FORGOT ACCOUNT DETAILS?</li>
                                    </Link>

                                    <div className="Header-navigation-links-li">
                                        <li>
                                            AT STATIONS
                                            <i className="fas fa-caret-right arrow-one"></i>
                                        </li>

                                        <ul style={{ left: "100px", top:"30px" }} className="Header-navigation-links-2">
                                            <Link to="/">
                                                <li>WI-Fi Railway Stations</li>
                                            </Link>

                                            <Link to="/">
                                                <li>Battery Operated Cars</li>
                                            </Link>

                                            <Link to="/">
                                                <li>E-wheelchair</li>
                                            </Link>

                                            <Link to="/">
                                                <li>Retiring Room</li>
                                            </Link>
                                        </ul>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className='Header-logo-end'>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <img className='Header-icon-2' src='https://www.irctc.co.in/nget/assets/images/logo.png' alt='' />
                    </Link>
                </section>
            </nav>
        </header>
    );
};

export default Header;