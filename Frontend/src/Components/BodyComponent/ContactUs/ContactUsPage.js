import React from 'react';
import './ContactUsPage.css';

function ContactUsPage() {

    return (
        <div className="ContactUsPage">

            <div className="heading">Contact Details</div>

            <div className="address">
                <div className="head">eRaktKosh related queries, feedback and suggestions</div>
                <div>
                    Center For Development of Advanced Computing
                    C-56/1, Anusandhan Bhawan , Sector-62, Noida, Uttar Pardesh-201307
                    8527890830
                </div>
                <div className="foot">eraktkosh[at]cdac[dot]in</div>
            </div>

            <div className="address">
                <div className="head">For Administrative queries</div>
                <div>Blood Cell, National Health Mission
                    Ministry of Health & Family Welfare, New Delhi-110011</div>
            </div>

        </div>
    );

};

export default ContactUsPage;
