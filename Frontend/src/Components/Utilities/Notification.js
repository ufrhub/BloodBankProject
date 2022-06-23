import React, { useEffect, useState } from 'react';
import './Utilities.css';

export const Loading = (props) => {
    const Status = props.loading;
    return <div style={Status === true ? { display: "block" } : { display: "none" }} className="Loading"></div>
};

export const SuccessMessage = (props) => {
    let Message = props.message;
    const [hide, setHide] = useState(false);

    useEffect(() => {
        let isMounted = true;
        setTimeout(() => {
            if (isMounted) setHide(true);;
        }, 5000);
        return () => { isMounted = false };
    }, []);

    const handleButton = () => {
        setHide(true);
    };

    return (
        <div id="SuccessMessage" className={hide === true ? "HideMessage" : "ShowMessage"}>
            <div className="msgBody">
                {Message}
            </div>
            <button className="CloseButton succBtn" onClick={handleButton}>X</button>
        </div>
    );
};

export const ErrorMessage = (props) => {
    let Message = props.message;
    const [hide, setHide] = useState(false);

    useEffect(() => {
        let isMounted = true;
        setTimeout(() => {
            if (isMounted) setHide(true);;
        }, 5000);
        return () => { isMounted = false };
    }, []);

    const handleButton = () => {
        setHide(true);
    };

    return (
        <div id="ErrorMessage" className={hide === true ? "HideMessage" : "ShowMessage"}>
            <div className="msgBody">
                {Message}
            </div>
            <button className="CloseButton errBtn" onClick={handleButton}>X</button>
        </div>
    );
};