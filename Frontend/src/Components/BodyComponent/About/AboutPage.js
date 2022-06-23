import React from 'react';
import './AboutPage.css';

function AboutPage() {

    let url = "https://www.eraktkosh.in/BLDAHIMS/bloodbank/about.cnt?hmode=DOWNLOADDOCUMENT";

    return (
        <div className="AboutPage">

            <h2 className="h2">About eRaktKosh</h2>

            <div className="first-box">e-RaktKosh: A Centralized Blood Bank Management System</div>

            <h4 className="h4">eRaktKosh was Inaugurated on 7th April 2016 by Hon'ble Minister of Health and Family Welfare, Sh. J P Nadda.</h4>

            <p>e-Rakt Kosh enforces Drug & Cosmetic Act, National blood policy standards and guidelines ensuring proper collection & donation, effective management and monitoring the quality and quantity of the donated blood. Considering the national roll out, e-Rakt Kosh has been developed with modular and scalable approach with configurable rule based architecture allowing customization to easily incorporate specific requirements from nationwide stakeholders.</p>

            <div className="second-box">
                <section className="left">
                    <h3 className="h3">Objectives</h3>

                    <ul>
                        <li>Safe and Adequate Blood Supplies</li>
                        <li>Reduced Turnaround Time</li>
                        <li>Preventing Wastage of Blood</li>
                        <li>Restrict Professional Donors</li>
                        <li>Networking of Blood Banks</li>
                        <li>Donor Repository</li>
                    </ul>
                </section>

                <section className="center">
                    <h3 className="h3">Salient Features</h3>

                    <ul>
                        <li>Web Based Application</li>
                        <li>Aadhar Linkage</li>
                        <li>Decision Suppport</li>
                        <li>Enforces Guidelines</li>
                        <li>Dashboard</li>
                        <li>Statutory Reports</li>
                    </ul>
                </section>

                <section className="right">
                    <a href={url} style={{ "textDecoration": "none" }}>
                        <img src="https://www.eraktkosh.in/BLDAHIMS/hisglobal/images/eRaktKoshBrouchure.jpg" alt="" />
                        <div className="download">Click here to Download</div>
                    </a>
                </section>
            </div>

            <h4 className="h4">e-Rakt Kosh has six major components for management of the blood donation life cycle:</h4>

            <ul className="ul">
                <li>The bio metric Donor Management System for identifying, tracking and blocking donors based on donor's health, donation history etc.</li>

                <li>It provides features such as blood grouping, TTI screening, antibody screening, component preparation etc. as per the defined processes and rules.</li>

                <li>A centralized Blood Inventory Management System for keeping track of the blood stock across numerous blood banks.</li>

                <li>Bio-Medical Waste Management System for disposal of discarded blood and other waste generated during this process.</li>

                <li>Generation of rare blood group donor registries and the generation of regular repeat donors</li>

                <li>Alert and Notification System</li>
            </ul>

        </div>
    );

};

export default AboutPage;
