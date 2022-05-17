import React from 'react';

const FormInput = ({labelName, inputID}) => {
  return (
    <div className="form-input">
      <label htmlFor={inputID}>{labelName}</label>
      <input type="text" id={inputID}/>
    </div>
  );
};

export default FormInput;