import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function PaymentStatus(props) {

    const OrderID = props.match.params.OrderID;
    const history = useHistory();

    useEffect(() => {
        if (OrderID.length > 0) {
                history.push({
                    pathname: "/transaction_details",
                    state: {
                        OrderID: OrderID
                    }
                });      
        }
    }, [OrderID, history]);

    return (
        <div>

        </div>
    );

};

export default PaymentStatus;