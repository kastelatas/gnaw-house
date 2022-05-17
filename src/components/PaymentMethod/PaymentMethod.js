import React from 'react';
import SVG from "react-inlinesvg";

const PaymentMethod = ({icon, method}) => {
  return (
    <div className="payment-method">
      <div className="payment-method__container">
        <SVG src={icon}/>
        <p className="payment-method__text">{method}</p>
      </div>
    </div>
  );
};

export default PaymentMethod;