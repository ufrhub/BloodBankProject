import React, { useState } from 'react';
import './PaymentPage.css';
import { useSelector } from 'react-redux';
import { isEmpty, isValidPhone, isValidAmount } from '../../Utilities/Validation';
import { Loading, SuccessMessage, ErrorMessage } from '../../Utilities/Notification';

const initialState = {
  CustomerEmail: "",
  CustomerMobileNumber: "",
  PayableAmmount: 0,
  Error: "",
  Success: ""
};

const PaymentPage = (props) => {
  const { RecieverRequestID, RecieverUserEmail } = props.location.params;
  const [data, setData] = useState(initialState);
  const { CustomerEmail, CustomerMobileNumber, PayableAmmount, Error, Success } = data;
  const [loading, setLoading] = useState(false);
  const userAuthentication = useSelector(State => State.userAuthentication);
  const { isLoggedIn, user } = userAuthentication;
  let Email = user.Email ? user.Email : CustomerEmail;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "PayableAmmount") {
      const amount = Number(value)
      setData({ ...data, [name]: amount, Error: "", Success: "" });

    } else {
      setData({ ...data, [name]: value, Error: "", Success: "" });
    };
  };

  const isObject = (Value) => {
    return typeof Value === "object";
  };

  const isDate = (Value) => {
    return Object.prototype.toString.call(Value) === "[object Date]";
  };

  const stringifyValue = (Value) => {
    if (isObject(Value) && !isDate(Value)) {
      return JSON.stringify(Value);
    } else {
      return Value;
    };
  };

  const BuildForm = (Details) => {
    const { action, params } = Details;
    const Form = document.createElement("form");
    Form.setAttribute("method", "POST");
    Form.setAttribute("action", action);
    Object.keys(params).forEach(Key => {
      const Input = document.createElement("input");
      Input.setAttribute("type", "hidden");
      Input.setAttribute("name", Key);
      Input.setAttribute("value", stringifyValue(params[Key]));
      Form.appendChild(Input);
    });

    return Form;
  };

  const POST_InformationToPaytm = (Information) => {
    // Build the form Data:
    const Form = BuildForm(Information);

    // Attach in the Request Body:
    document.body.appendChild(Form);

    // Submit thr Form:
    Form.submit();

    // Destroy the Form:
    Form.remove();
  };

  const getCheckSum = (Data) => {
    setLoading(true);
    return fetch(`http://localhost:5000/Payment`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify(Data)

    }).then(Result => {
      setLoading(false);
      return Result.json();

    }).catch(Error => {
      setLoading(false);
      setData({ ...data, Success: "", Error: Error.response.data.message });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmpty(CustomerMobileNumber) || isEmpty(PayableAmmount)) {
      return setData({ ...data, Error: "Please fill in all fields...!", Success: "" });

    } else if (!isValidPhone(CustomerMobileNumber)) {
      return setData({ ...data, Error: "Invalid mobile number...!", Success: "" });

    } else if (!isValidAmount(PayableAmmount)) {
      return setData({ ...data, Error: "Invalid amount...!", Success: "" });

    } else {
      // payment integration logic

      // (1) make API call to the BE /payment and the get the payment checksum
      // (2) go to the paytm website

      const Data = {
        PayableAmmount: PayableAmmount,
        CustomerEmail: Email,
        CustomerMobileNumber: CustomerMobileNumber,
        RecieverRequestID: RecieverRequestID,
        RecieverUserEmail: RecieverUserEmail
      };

      setLoading(true);
      getCheckSum(Data).then(Result => {
        let Information = {
          action: `https://securegw-stage.paytm.in/order/process`,
          params: Result
        };

        POST_InformationToPaytm(Information);
        setLoading(false);

      }).catch(Error => {
        setLoading(false);
        setData({ ...data, Success: "", Error: Error.response.data.message });
      });
    };
  };

  return (
    <div className="PaymentPage">

      {loading && <Loading loading={loading} />}
      {Success && <SuccessMessage message={Success} />}
      {Error && <ErrorMessage message={Error} />}

      <form onSubmit={handleSubmit}>
        <h2>Payment</h2>

        {
          isLoggedIn === true
            ?
            <></>
            :
            <>
              <label htmlFor="Email">Email</label>
              <input type="text" name="CustomerEmail" id="Email" onChange={handleChange} />
            </>
        }

        <label htmlFor="Mobile">Mobile Number</label>
        <input type="text" name="CustomerMobileNumber" id="Mobile" onChange={handleChange} />

        <label htmlFor="Amount">Enter Amount</label>
        <input type="text" name="PayableAmmount" id="Amount" onChange={handleChange} />

        <button type="submit">PAY USING PAYTM</button>
      </form>

    </div>
  );

};

export default PaymentPage;