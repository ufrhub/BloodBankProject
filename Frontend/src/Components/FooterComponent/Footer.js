import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <footer>

            <div className="Footer">

                <div className="col-3">
                    <h3>Looking For Blood</h3>

                    <div>
                        <div className="link">
                            <Link to="/stockAvailability">Blood Availability</Link>
                        </div>

                        <div className="link">
                            <Link to="/nearbyBBRed">Blood Bank Directory</Link>
                        </div>

                        <div className="link">
                            <Link to="/portalThalassemiaLogin">Thalassemia Request</Link>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <h3>Want to Donate</h3>

                    <div>
                        <div className="link">
                            <Link to="/stockAvailability">Blood Donation Camps</Link>
                        </div>

                        <div className="link">
                            <Link to="/nearbyBBRed">Appointment for Blood Bank</Link>
                        </div>

                        <div className="link">
                            <Link to="/portalThalassemiaLogin">Donor Login</Link>
                        </div>

                        <div className="link">
                            <Link to="/portalThalassemiaLogin">About Blood Donation</Link>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <h3>Blood Bank Login</h3>

                    <div>
                        <div className="link">
                            <Link to="/stockAvailability">eRaktkosh Login</Link>
                        </div>

                        <div className="link">
                            <Link to="/nearbyBBRed">Add your Blood Bank</Link>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <h3>About Us</h3>

                    <div>
                        <div className="link">
                            <Link to="/stockAvailability">About eRaktkosh</Link>
                        </div>

                        <div className="link">
                            <Link to="/nearbyBBRed">Notifications</Link>
                        </div>

                        <div className="link">
                            <Link to="/portalThalassemiaLogin">Eraktkosh FAQs</Link>
                        </div>

                        <div className="link">
                            <Link to="/portalThalassemiaLogin">Gallery</Link>
                        </div>

                        <div className="link">
                            <Link to="/portalThalassemiaLogin">Video Gallery</Link>
                        </div>

                        <div className="link">
                            <Link to="/portalThalassemiaLogin">Contact Us</Link>
                        </div>
                    </div>
                </div>

            </div>

        </footer>
    );

};

export default Footer;
