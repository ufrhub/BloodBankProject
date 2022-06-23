import React, { useEffect, useState } from 'react';
import './DonationInformation.css';

function DonationInformation(props) {

    const [DonorType, setDonorType] = useState([]);
    const [DonationType, setDonationType] = useState([]);
    const [ComponentType, setComponentType] = useState([]);
    const [BagType, setBagType] = useState([]);
    const [TTIType, setTTIType] = useState([]);
    const [Remarks, setRemarks] = useState("");

    const [donationInformationBTN, setDonationInformationBTN] = useState("");

    useEffect(() => {
        if (donationInformationBTN.length > 0) {
            const data = { DonorType, DonationType, ComponentType, BagType, TTIType, Remarks };
            props.Data(data, donationInformationBTN);
        };
    }, [BagType, ComponentType, DonationType, DonorType, Remarks, TTIType, donationInformationBTN, props]);

    const handleNext = () => {
        setDonationInformationBTN("Next");
        setTimeout(() => {
            setDonationInformationBTN("");
        }, 100);
    };

    const handleBack = () => {
        setDonationInformationBTN("Back");
        setTimeout(() => {
            setDonationInformationBTN("");
        }, 100);
    };

    const handleCancel = () => {
        setDonationInformationBTN("Cancel");
        setTimeout(() => {
            setDonationInformationBTN("");
        }, 100);
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const isChecked = e.target.checked;

        if (name === "Remarks") {
            setRemarks({ ...Remarks, value });
        };

        if (isChecked === true) {
            if (name === "DonorType") {
                setDonorType([...DonorType, value]);

            } else if (name === "DonationType") {
                setDonationType([...DonationType, value])

            } else if (name === "ComponentType") {
                setComponentType([...ComponentType, value])

            } else if (name === "BagType") {
                setBagType([...BagType, value]);

            } else if (name === "TTIType") {
                setTTIType([...TTIType, value]);
            };

        } else if (isChecked === false) {
            if (name === "DonorType") {
                setDonorType((names) => names.filter((_, i) => i !== names.length - 1));

            } else if (name === "DonationType") {
                setDonationType((names) => names.filter((_, i) => i !== names.length - 1));

            } else if (name === "ComponentType") {
                setComponentType((names) => names.filter((_, i) => i !== names.length - 1));

            } else if (name === "BagType") {
                setBagType((names) => names.filter((_, i) => i !== names.length - 1));

            } else if (name === "TTIType") {
                setTTIType((names) => names.filter((_, i) => i !== names.length - 1));
            };
        };
    };

    return (
        <div className="DonationInformation">

            <div className="DonationInformation_box">
                <div className="DonationInformation_heading">Donor Type<span style={{ color: "red" }}>*</span></div>

                <div style={{ padding: "40px 5px", marginBottom: "-20px" }} className="DonationInformation_box_container">
                    <div className="DonationInformation_box_row">
                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="Voluntary" className="DonationInformation_box_input" name="DonorType" value="Voluntary" onChange={handleChange} />
                            <label htmlFor="Voluntary" className="DonationInformation_box_item">Voluntary</label>
                        </div>

                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="Replacement" className="DonationInformation_box_input" name="DonorType" value="Replacement" onChange={handleChange} />
                            <label htmlFor="Replacement" className="DonationInformation_box_item">Replacement</label>
                        </div>

                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="Directed" className="DonationInformation_box_input" name="DonorType" value="Directed" onChange={handleChange} />
                            <label htmlFor="Directed" className="DonationInformation_box_item">Directed</label>
                        </div>

                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="Autologous" className="DonationInformation_box_input" name="DonorType" value="Autologous" onChange={handleChange} />
                            <label htmlFor="Autologous" className="DonationInformation_box_item">Autologous</label>
                        </div>
                    </div>

                    <div className="DonationInformation_box_row">
                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="Family" className="DonationInformation_box_input" name="DonorType" value="Family" onChange={handleChange} />
                            <label htmlFor="Family" className="DonationInformation_box_item">Family</label>
                        </div>

                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="ReplacementExternal" className="DonationInformation_box_input" name="DonorType" value="Replacement External" onChange={handleChange} />
                            <label htmlFor="ReplacementExternal" className="DonationInformation_box_item">Replacement External</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="DonationInformation_box">
                <div className="DonationInformation_heading">Donation Type<span style={{ color: "red" }}>*</span></div>

                <div style={{ padding: "40px 5px", marginBottom: "-20px" }} className="DonationInformation_box_container">
                    <div className="DonationInformation_box_row">
                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="Leucaperesis" className="DonationInformation_box_input" name="DonationType" value="Leucaperesis" onChange={handleChange} />
                            <label htmlFor="Leucaperesis" className="DonationInformation_box_item">Leucaperesis</label>
                        </div>

                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="Plasmapheresis" className="DonationInformation_box_input" name="DonationType" value="Plasmapheresis" onChange={handleChange} />
                            <label htmlFor="Plasmapheresis" className="DonationInformation_box_item">Plasmapheresis</label>
                        </div>

                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="Plateletpheresis" className="DonationInformation_box_input" name="DonationType" value="Plateletpheresis" onChange={handleChange} />
                            <label htmlFor="Plateletpheresis" className="DonationInformation_box_item">Plateletpheresis</label>
                        </div>

                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="WholeBlood" className="DonationInformation_box_input" name="DonationType" value="Whole Blood" onChange={handleChange} />
                            <label htmlFor="WholeBlood" className="DonationInformation_box_item">Whole Blood</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="DonationInformation_box">
                <div className="DonationInformation_heading">Component Type</div>

                <div style={{ padding: "40px 5px", marginBottom: "-20px" }} className="DonationInformation_box_container">
                    <div className="DonationInformation_box_row">
                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="CryoPoorPlasma" className="DonationInformation_box_input" name="ComponentType" value="Cryo Poor Plasma" onChange={handleChange} />
                            <label htmlFor="CryoPoorPlasma" className="DonationInformation_box_item">Cryo Poor Plasma</label>
                        </div>

                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="Cryoprecipitate" className="DonationInformation_box_input" name="ComponentType" value="Cryoprecipitate" onChange={handleChange} />
                            <label htmlFor="Cryoprecipitate" className="DonationInformation_box_item">Cryoprecipitate</label>
                        </div>

                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="FreshFrozenPlasma" className="DonationInformation_box_input" name="ComponentType" value="Fresh Frozen Plasma" onChange={handleChange} />
                            <label htmlFor="FreshFrozenPlasma" className="DonationInformation_box_item">Fresh Frozen Plasma</label>
                        </div>

                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="IrradiatedRBC" className="DonationInformation_box_input" name="ComponentType" value="Irradiated RBC" onChange={handleChange} />
                            <label htmlFor="IrradiatedRBC" className="DonationInformation_box_item">Irradiated RBC</label>
                        </div>
                    </div>

                    <div className="DonationInformation_box_row">
                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="LeukoreducedRbc" className="DonationInformation_box_input" name="ComponentType" value="Leukoreduced Rbc" onChange={handleChange} />
                            <label htmlFor="LeukoreducedRbc" className="DonationInformation_box_item">Leukoreduced Rbc</label>
                        </div>

                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="PackedRedBloodCells" className="DonationInformation_box_input" name="ComponentType" value="Packed Red Blood Cells" onChange={handleChange} />
                            <label htmlFor="PackedRedBloodCells" className="DonationInformation_box_item">Packed Red Blood Cells</label>
                        </div>

                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="Plasma" className="DonationInformation_box_input" name="ComponentType" value="Plasma" onChange={handleChange} />
                            <label htmlFor="Plasma" className="DonationInformation_box_item">Plasma</label>
                        </div>

                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="PlateletConcentrate" className="DonationInformation_box_input" name="ComponentType" value="Platelet Concentrate" onChange={handleChange} />
                            <label htmlFor="PlateletConcentrate" className="DonationInformation_box_item">Platelet Concentrate</label>
                        </div>
                    </div>

                    <div className="DonationInformation_box_row">
                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", minWidth: "16px", marginLeft: "20px" }} type="checkbox" id="PlateletPoorPlasma" className="DonationInformation_box_input" name="ComponentType" value="Platelet Poor Plasma" onChange={handleChange} />
                            <label htmlFor="PlateletPoorPlasma" className="DonationInformation_box_item">Platelet Poor Plasma</label>
                        </div>

                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", minWidth: "16px", marginLeft: "20px" }} type="checkbox" id="PlateletRichPlasma" className="DonationInformation_box_input" name="ComponentType" value="Platelet Rich Plasma" onChange={handleChange} />
                            <label htmlFor="PlateletRichPlasma" className="DonationInformation_box_item">Platelet Rich Plasma</label>
                        </div>

                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", minWidth: "16px", marginLeft: "20px" }} type="checkbox" id="SagmPackedRedBloodCells" className="DonationInformation_box_input" name="ComponentType" value="Sagm Packed Red Blood Cells" onChange={handleChange} />
                            <label htmlFor="SagmPackedRedBloodCells" className="DonationInformation_box_item">Sagm Packed Red Blood Cells</label>
                        </div>

                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", minWidth: "16px", marginLeft: "20px" }} type="checkbox" id="SingleDonorPlasma" className="DonationInformation_box_input" name="ComponentType" value="Single Donor Plasma" onChange={handleChange} />
                            <label htmlFor="SingleDonorPlasma" className="DonationInformation_box_item">Single Donor Plasma</label>
                        </div>
                    </div>

                    <div className="DonationInformation_box_row">
                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", minWidth: "16px", marginLeft: "20px" }} type="checkbox" id="SingleDonorPlatelet" className="DonationInformation_box_input" name="ComponentType" value="Single Donor Platelet" onChange={handleChange} />
                            <label htmlFor="SingleDonorPlatelet" className="DonationInformation_box_item">Single Donor Platelet</label>
                        </div>

                        <div style={{ width: "25%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", minWidth: "16px", marginLeft: "20px" }} type="checkbox" id="Whole_Blood" className="DonationInformation_box_input" name="ComponentType" value="Whole Blood" onChange={handleChange} />
                            <label htmlFor="Whole_Blood" className="DonationInformation_box_item">Whole Blood</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="DonationInformation_box">
                <div className="DonationInformation_heading">Bag Type</div>

                <div style={{ padding: "40px 5px", marginBottom: "-20px" }} className="DonationInformation_box_container">
                    <div className="DonationInformation_box_row">
                        <div style={{ width: "33%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="Single" className="DonationInformation_box_input" name="BagType" value="Single (350/450ml)" onChange={handleChange} />
                            <label htmlFor="Single" className="DonationInformation_box_item">Single (350/450ml)</label>
                        </div>

                        <div style={{ width: "33%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="Double" className="DonationInformation_box_input" name="BagType" value="Double (350/450ml)" onChange={handleChange} />
                            <label htmlFor="Double" className="DonationInformation_box_item">Double (350/450ml)</label>
                        </div>

                        <div style={{ width: "33%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="Triple" className="DonationInformation_box_input" name="BagType" value="Triple (350/450ml)" onChange={handleChange} />
                            <label htmlFor="Triple" className="DonationInformation_box_item">Triple (350/450ml)</label>
                        </div>
                    </div>

                    <div className="DonationInformation_box_row">
                        <div style={{ width: "33%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", minWidth: "16px", marginLeft: "20px" }} type="checkbox" id="Quadruple" className="DonationInformation_box_input" name="BagType" value="Quadruple (450 ml) with inline filter" onChange={handleChange} />
                            <label htmlFor="Quadruple" className="DonationInformation_box_item">Quadruple (450 ml) with inline filter</label>
                        </div>

                        <div style={{ width: "33%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", minWidth: "16px", marginLeft: "20px" }} type="checkbox" id="Quadruple_" className="DonationInformation_box_input" name="BagType" value="Quadruple (450 ml) without inline filter" onChange={handleChange} />
                            <label htmlFor="Quadruple_" className="DonationInformation_box_item">Quadruple (450 ml) without inline filter</label>
                        </div>

                        <div style={{ width: "33%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", minWidth: "16px", marginLeft: "20px" }} type="checkbox" id="Penta" className="DonationInformation_box_input" name="BagType" value="Penta Bag (450 ml)" onChange={handleChange} />
                            <label htmlFor="Penta" className="DonationInformation_box_item">Penta Bag (450 ml)</label>
                        </div>
                    </div>

                    <div className="DonationInformation_box_row">
                        <div style={{ width: "33%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", minWidth: "16px", marginLeft: "20px" }} type="checkbox" id="Transfer" className="DonationInformation_box_input" name="BagType" value="Transfer Bags" onChange={handleChange} />
                            <label htmlFor="Transfer" className="DonationInformation_box_item">Transfer Bags</label>
                        </div>

                        <div style={{ width: "33%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", minWidth: "16px", marginLeft: "20px" }} type="checkbox" id="Apheresis" className="DonationInformation_box_input" name="BagType" value="Apheresis Kits" onChange={handleChange} />
                            <label htmlFor="Apheresis" className="DonationInformation_box_item">Apheresis Kits</label>
                        </div>

                        <div style={{ width: "33%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", minWidth: "16px", marginLeft: "20px" }} type="checkbox" id="CPD/SAGM" className="DonationInformation_box_input" name="BagType" value="Triple (350 Ml) CPD/SAGM" onChange={handleChange} />
                            <label htmlFor="CPD/SAGM" className="DonationInformation_box_item">Triple (350 Ml) CPD/SAGM</label>
                        </div>
                    </div>

                    <div className="DonationInformation_box_row">
                        <div style={{ width: "33%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", minWidth: "16px", marginLeft: "20px" }} type="checkbox" id="Triple_CPD" className="DonationInformation_box_input" name="BagType" value="Triple (450 Ml) CPD/SAGM" onChange={handleChange} />
                            <label htmlFor="Triple_CPD" className="DonationInformation_box_item">Triple (450 Ml) CPD/SAGM</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="DonationInformation_box">
                <div className="DonationInformation_heading">TTI Type</div>

                <div style={{ padding: "40px 5px", marginBottom: "-20px" }} className="DonationInformation_box_container">
                    <div className="DonationInformation_box_row">
                        <div style={{ width: "33%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="HIV" className="DonationInformation_box_input" name="TTIType" value="HIV 1&2" onChange={handleChange} />
                            <label htmlFor="HIV" className="DonationInformation_box_item">HIV 1&2</label>
                        </div>

                        <div style={{ width: "33%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="Hepatitis-B" className="DonationInformation_box_input" name="TTIType" value="Hepatitis-B" onChange={handleChange} />
                            <label htmlFor="Hepatitis-B" className="DonationInformation_box_item">Hepatitis-B</label>
                        </div>

                        <div style={{ width: "33%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="Hepatitis-C" className="DonationInformation_box_input" name="TTIType" value="Hepatitis-C" onChange={handleChange} />
                            <label htmlFor="Hepatitis-C" className="DonationInformation_box_item">Hepatitis-C</label>
                        </div>
                    </div>

                    <div className="DonationInformation_box_row">
                        <div style={{ width: "33%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="Syphilis" className="DonationInformation_box_input" name="TTIType" value="Syphilis" onChange={handleChange} />
                            <label htmlFor="Syphilis" className="DonationInformation_box_item">Syphilis</label>
                        </div>

                        <div style={{ width: "33%" }} className="DonationInformation_box_block">
                            <input style={{ height: "16px", width: "16px", marginLeft: "20px" }} type="checkbox" id="Malaria" className="DonationInformation_box_input" name="TTIType" value="Malaria" onChange={handleChange} />
                            <label htmlFor="Malaria" className="DonationInformation_box_item">Malaria</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="DonationInformation_box">
                <div className="DonationInformation_heading">Remarks</div>

                <div style={{ padding: "40px 5px", marginBottom: "-20px" }} className="DonationInformation_box_container">
                    <div className="DonationInformation_box_row">
                        <div style={{ width: "100%" }} className="DonationInformation_box_block">
                            <textarea style={{ marginLeft: "30px", height: "100px", width: "75%", maxWidth: "93%" }} name="Remarks" onChange={handleChange} ></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div className="DonationInformation_button">
                <button onClick={handleNext}>Next</button>
                <button onClick={handleBack}>Back</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );

};

export default DonationInformation;