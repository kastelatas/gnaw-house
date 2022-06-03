import React from 'react';
import SVG from "react-inlinesvg";
import classNames from "classnames";

const PaymentMethod = ({id, icon, method, isChecked, checkedPaymentMethod}) => {

  const root = classNames('payment-method', {
    'payment-method__active': isChecked
  })

  return (
    <div className={root} onClick={() => checkedPaymentMethod(id)}>
      <div className="payment-method__container">
        <SVG src={icon}/>
        <p className="payment-method__text">{method}</p>
      </div>
    </div>
  );
};

export default PaymentMethod;