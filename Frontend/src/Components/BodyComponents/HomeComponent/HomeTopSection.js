import React, { useState } from 'react';
import './Home.css';

function HomeTopSection() {

    const [selectOne, setSelectOne] = useState(false);
    const [selectTwo, setSelectTwo] = useState(false);

    return (
        <div className='HomeTopSection'>

            <div className='HomeTopSection-body'>
                <section className='HomeTopSection-right'>
                    <div className='HomeTopSection-box-top'>
                        <div className='HomeTopSection-box-right'>
                            <img src='https://www.irctc.co.in/nget/assets/images/icons/pnr.png' alt='' />
                            PNR STATUS
                        </div>
                        <div className='HomeTopSection-box-left'>
                            <img src='https://www.irctc.co.in/nget/assets/images/icons/chart.png' alt='' />
                            CHARTS/VACANCY
                        </div>
                    </div>

                    <div className='HomeTopSection-box-bottom'>
                        <div className='HomeTopSection-box-bottom-up'>
                            <img src='https://www.irctc.co.in/nget/assets/images/logo_top_eng.jpg' alt='' />
                            <span> BOOK TICKET</span>
                        </div>

                        <div className='HomeTopSection-box-bottom-down'>
                            <div className='HomeTopSection-box-row'>
                                <input type="text" onFocus={e => setSelectOne(true)} onBlur={e => setSelectOne(false)} />
                                <i className="fas fa-location-arrow HomeTopSection-arrowOne"></i>
                                <div style={selectOne === true ? { top: "-27px", fontSize: "13.5px" } : { top: "0" }} id='HomeTopSection-txtOne' className='text'>From</div>

                                <input className='inputTwo' type="date" />
                            </div>

                            <div className='HomeTopSection-box-row two'>
                                <i className="fas fa-exchange-alt HomeTopSection-arrowTwo"></i>
                            </div>

                            <div className='HomeTopSection-box-row three'>
                                <input type="text" onFocus={e => setSelectTwo(true)} onBlur={e => setSelectTwo(false)} />
                                <i className="fas fa-map-marker-alt HomeTopSection-arrowOne"></i>
                                <div style={selectTwo === true ? { top: "-27px", fontSize: "13.5px" } : { top: "0" }} className='text'>To</div>

                                <select>
                                    <option>All Classes</option>
                                    <option>Anubhuti Class (EA)</option>
                                    <option>AC First Class (1A)</option>
                                    <option>Vistadome AC (EV)</option>
                                    <option>Exec. Chair Car (EC)</option>
                                    <option>AC 2 Tier (2A)</option>
                                    <option>First Class</option>
                                    <option>AC 3 Tier (3A)</option>
                                    <option>AC 3 Economy (3E)</option>
                                    <option>Vistadome Chair Car (VC)</option>
                                    <option>AC Chair car (CC)</option>
                                    <option>Sleeper (SL)</option>
                                    <option>Vistadome Non AC (VS)</option>
                                    <option>Second Sitting (2S)</option>
                                </select>
                                <i className="fas fa-briefcase HomeTopSection-arrowThree"></i>
                            </div>

                            <div className='HomeTopSection-box-row four'>
                                <select>
                                    <option>GENERAL</option>
                                    <option>LADIES</option>
                                    <option>LOWER BERTH/SE. CITIZEN</option>
                                    <option>PERSON WITH DISABILITY</option>
                                    <option>TATKAL</option>
                                    <option>PREMIUM TATKAL</option>
                                </select>
                                <i className="fas fa-th-large HomeTopSection-arrowOne"></i>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default HomeTopSection;