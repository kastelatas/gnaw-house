import React from 'react';

const FormInput = ({labelName, inputID, value, valueChange }) => {
  return (
    <div className="form-input">
      <label htmlFor={inputID}>{labelName}</label>
      <input onChange={valueChange} defaultValue={value} type="text" id={inputID}/>
    </div>
  );
};

export default FormInput;