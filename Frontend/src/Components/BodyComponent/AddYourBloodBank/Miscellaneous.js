import React, { useEffect, useState } from 'react';
import './Miscellaneous.css';

function Miscellaneous(props) {

  const [chargeTarrif, setChargeTarrif] = useState([{ TarrifName: "", Charges: "" }]);
  const [areaDetails, setAreaDetails] = useState([{ AreaName: "", AreaUsability: "", RoomNumber: "" }]);
  const [storageDetails, setStorageDetails] = useState([{ StorageName: "", StorageType: "", AreaName: "" }]);
  const [refreshmentDetails, setRefreshmentDetails] = useState([{ RefreshmentName: "", RefreshmentQuantity: "" }]);
  const [miscellaneousBTN, setMiscellaneousBTN] = useState("");

  const handleAddChargeTarrif = () => {
    setChargeTarrif([...chargeTarrif, { TarrifName: "", Charges: "" }])
  };

  const handleSubtractChargeTarrif = (index) => {
    const list = [...chargeTarrif];
    list.splice(index, 1);
    setChargeTarrif(list);
  };

  const handleChargeTarrifInput = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;
    const list = [...chargeTarrif];
    list[index][name] = value;
    setChargeTarrif(list);
  };

  const handleAddAreaDetails = () => {
    setAreaDetails([...areaDetails, { AreaName: "", AreaUsability: "", RoomNumber: "" }])
  };

  const handleSubtractAreaDetails = (index) => {
    const list = [...areaDetails];
    list.splice(index, 1);
    setAreaDetails(list);
  };

  const handleAreaDetailsInput = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;
    const list = [...areaDetails];
    list[index][name] = value;
    setAreaDetails(list);
  };

  const handleAddStorageDetails = () => {
    setStorageDetails([...storageDetails, { StorageName: "", StorageType: "", AreaName: "" }])
  };

  const handleSubtractStorageDetails = (index) => {
    const list = [...storageDetails];
    list.splice(index, 1);
    setStorageDetails(list);
  };

  const handleStorageDetailsInput = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;
    const list = [...storageDetails];
    list[index][name] = value;
    setStorageDetails(list);
  };

  const handleAddRefreshmentDetails = () => {
    setRefreshmentDetails([...refreshmentDetails, { RefreshmentName: "", RefreshmentQuantity: "" }])
  };

  const handleSubtractRefreshmentDetails = (index) => {
    const list = [...refreshmentDetails];
    list.splice(index, 1);
    setRefreshmentDetails(list);
  };

  const handleRefreshmentDetailsInput = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;
    const list = [...refreshmentDetails];
    list[index][name] = value;
    setRefreshmentDetails(list);
  };

  useEffect(() => {
    if (miscellaneousBTN.length > 0) {
      const chargeTarrifFilter = chargeTarrif.filter(e => e.TarrifName && e.Charges);
      const areaDetailsFilter = areaDetails.filter(e => e.AreaName && e.AreaUsability && e.RoomNumber);
      const storageDetailsFilter = storageDetails.filter(e => e.StorageName && e.StorageType && e.AreaName);
      const refreshmentDetailsFilter = refreshmentDetails.filter(e => e.RefreshmentName && e.RefreshmentQuantity);

      const data = { chargeTarrifFilter, areaDetailsFilter, storageDetailsFilter, refreshmentDetailsFilter };
      props.Data(data, miscellaneousBTN);
    };
  }, [areaDetails, chargeTarrif, miscellaneousBTN, props, refreshmentDetails, storageDetails]);

  const handleNext = () => {
    setMiscellaneousBTN("Next");
    setTimeout(() => {
      setMiscellaneousBTN("");
    }, 100);
  };

  const handleBack = () => {
    setMiscellaneousBTN("Back");
    setTimeout(() => {
      setMiscellaneousBTN("");
    }, 100);
  };

  const handleCancel = () => {
    setMiscellaneousBTN("Cancel");
    setTimeout(() => {
      setMiscellaneousBTN("");
    }, 100);
  };

  return (
    <div className="Miscellaneous">

      <div className="Miscellaneous_box">
        <div className="Miscellaneous_heading">Charge/Tarrif Details</div>

        <div style={{ padding: "40px 5px", marginBottom: "-20px" }} className="Miscellaneous_box_container">
          <div style={{ margin: " 0 10px 10px", fontWeight: "600" }}>Charge/Tarrif Details</div>

          <div className="Miscellaneous_box_row">
            <div style={{ width: "33%" }} className="Miscellaneous_box_block">
              <div className="Miscellaneous_box_item">Tarrif Name</div>
            </div>

            <div style={{ width: "33%" }} className="Miscellaneous_box_block">
              <div className="Miscellaneous_box_item">Charges In Rs</div>
            </div>
          </div>

          {
            chargeTarrif.map((item, index) => (
              <div key={index} style={{ marginBottom: "10px" }} className="Miscellaneous_box_row">
                <div style={{ width: "33%" }} className="Miscellaneous_box_block">
                  <input style={{ width: "80%" }} type="text" name="TarrifName" value={item.TarrifName} className="Miscellaneous_box_input" onChange={(e) => handleChargeTarrifInput(e, index)} />
                </div>

                <div style={{ width: "33%" }} className="Miscellaneous_box_block">
                  <input style={{ width: "80%" }} type="text" name="Charges" value={item.Charges} className="Miscellaneous_box_input" onChange={(e) => handleChargeTarrifInput(e, index)} />
                </div>

                {
                  index === 0
                    ?
                    <div style={{ width: "33%" }} className="Miscellaneous_box_block">
                      <button onClick={handleAddChargeTarrif}>Add More</button>
                    </div>
                    :
                    <div style={{ width: "33%" }} className="Miscellaneous_box_block">
                      <button onClick={() => handleSubtractChargeTarrif(index)}>-</button>
                    </div>
                }
              </div>
            ))
          }
        </div>
      </div>

      <div className="Miscellaneous_box">
        <div className="Miscellaneous_heading">Area Details<span style={{ color: "red" }}>*</span></div>

        <div style={{ padding: "40px 5px", marginBottom: "-20px" }} className="Miscellaneous_box_container">
          <div style={{ margin: " 0 10px 10px", fontWeight: "600" }}>Area Details<span style={{ color: "red" }}>*</span></div>

          <div className="Miscellaneous_box_row">
            <div style={{ width: "25%" }} className="Miscellaneous_box_block">
              <div className="Miscellaneous_box_item">Area Name</div>
            </div>

            <div style={{ width: "25%" }} className="Miscellaneous_box_block">
              <div className="Miscellaneous_box_item">Area Usability</div>
            </div>

            <div style={{ width: "25%" }} className="Miscellaneous_box_block">
              <div className="Miscellaneous_box_item">Room no</div>
            </div>
          </div>

          {
            areaDetails.map((item, index) => (
              <div key={index} style={{ marginBottom: "10px" }} className="Miscellaneous_box_row">
                <div style={{ width: "25%" }} className="Miscellaneous_box_block">
                  <input style={{ width: "80%" }} type="text" name="AreaName" value={item.AreaName} className="Miscellaneous_box_input" onChange={(e) => handleAreaDetailsInput(e, index)} />
                </div>

                <div style={{ width: "25%" }} className="Miscellaneous_box_block">
                  <input style={{ width: "80%" }} type="text" name="AreaUsability" value={item.AreaUsability} className="Miscellaneous_box_input" onChange={(e) => handleAreaDetailsInput(e, index)} />
                </div>

                <div style={{ width: "25%" }} className="Miscellaneous_box_block">
                  <input style={{ width: "80%" }} type="text" name="RoomNumber" value={item.RoomNumber} className="Miscellaneous_box_input" onChange={(e) => handleAreaDetailsInput(e, index)} />
                </div>

                {
                  index === 0
                    ?
                    <div style={{ width: "25%" }} className="Miscellaneous_box_block">
                      <button onClick={handleAddAreaDetails}>Add More</button>
                    </div>
                    :
                    <div style={{ width: "25%" }} className="Miscellaneous_box_block">
                      <button onClick={() => handleSubtractAreaDetails(index)}>-</button>
                    </div>
                }
              </div>
            ))
          }
        </div>
      </div>

      <div className="Miscellaneous_box">
        <div className="Miscellaneous_heading">Storage Details<span style={{ color: "red" }}>*</span></div>

        <div style={{ padding: "40px 5px", marginBottom: "-20px" }} className="Miscellaneous_box_container">
          <div style={{ margin: " 0 10px 10px", fontWeight: "600" }}>Storage Details<span style={{ color: "red" }}>*</span></div>

          <div className="Miscellaneous_box_row">
            <div style={{ width: "25%" }} className="Miscellaneous_box_block">
              <div className="Miscellaneous_box_item">Storage  Name</div>
            </div>

            <div style={{ width: "25%" }} className="Miscellaneous_box_block">
              <div className="Miscellaneous_box_item">Storage type</div>
            </div>

            <div style={{ width: "25%" }} className="Miscellaneous_box_block">
              <div className="Miscellaneous_box_item">Area Name</div>
            </div>
          </div>

          {
            storageDetails.map((item, index) => (
              <div key={index} style={{ marginBottom: "10px" }} className="Miscellaneous_box_row">
                <div style={{ width: "25%" }} className="Miscellaneous_box_block">
                  <input style={{ width: "80%" }} type="text" name="StorageName" value={item.StorageName} className="Miscellaneous_box_input" onChange={(e) => handleStorageDetailsInput(e, index)} />
                </div>

                <div style={{ width: "25%" }} className="Miscellaneous_box_block">
                  <input style={{ width: "80%" }} type="text" name="StorageType" value={item.StorageType} className="Miscellaneous_box_input" onChange={(e) => handleStorageDetailsInput(e, index)} />
                </div>

                <div style={{ width: "25%" }} className="Miscellaneous_box_block">
                  <input style={{ width: "80%" }} type="text" name="AreaName" value={item.AreaName} className="Miscellaneous_box_input" onChange={(e) => handleStorageDetailsInput(e, index)} />
                </div>

                {
                  index === 0
                    ?
                    <div style={{ width: "25%" }} className="Miscellaneous_box_block">
                      <button onClick={handleAddStorageDetails}>Add More</button>
                    </div>
                    :
                    <div style={{ width: "25%" }} className="Miscellaneous_box_block">
                      <button onClick={() => handleSubtractStorageDetails(index)}>-</button>
                    </div>
                }
              </div>
            ))
          }
        </div>
      </div>

      <div className="Miscellaneous_box">
        <div className="Miscellaneous_heading">Refreshment Details<span style={{ color: "red" }}>*</span></div>

        <div style={{ padding: "40px 5px", marginBottom: "-20px" }} className="Miscellaneous_box_container">
          <div style={{ margin: " 0 10px 10px", fontWeight: "600" }}>Refreshment Details<span style={{ color: "red" }}>*</span></div>

          <div className="Miscellaneous_box_row">
            <div style={{ width: "33%" }} className="Miscellaneous_box_block">
              <div className="Miscellaneous_box_item">Refreshment name</div>
            </div>

            <div style={{ width: "33%" }} className="Miscellaneous_box_block">
              <div className="Miscellaneous_box_item">Refreshment quantity</div>
            </div>
          </div>

          {
            refreshmentDetails.map((item, index) => (
              <div key={index} style={{ marginBottom: "10px" }} className="Miscellaneous_box_row">
                <div style={{ width: "33%" }} className="Miscellaneous_box_block">
                  <input style={{ width: "80%" }} type="text" name="RefreshmentName" value={item.RefreshmentName} className="Miscellaneous_box_input" onChange={(e) => handleRefreshmentDetailsInput(e, index)} />
                </div>

                <div style={{ width: "33%" }} className="Miscellaneous_box_block">
                  <input style={{ width: "80%" }} type="text" name="RefreshmentQuantity" value={item.RefreshmentQuantity} className="Miscellaneous_box_input" onChange={(e) => handleRefreshmentDetailsInput(e, index)} />
                </div>

                {
                  index === 0
                    ?
                    <div style={{ width: "33%" }} className="Miscellaneous_box_block">
                      <button onClick={handleAddRefreshmentDetails}>Add More</button>
                    </div>
                    :
                    <div style={{ width: "33%" }} className="Miscellaneous_box_block">
                      <button onClick={() => handleSubtractRefreshmentDetails(index)}>-</button>
                    </div>
                }
              </div>
            ))
          }
        </div>
      </div>

      <div className="Miscellaneous_button">
        <button onClick={handleNext}>Next</button>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>

    </div>
  );

};

export default Miscellaneous;