import React from 'react';

const FormTextArea = ({labelName, textareaID, value, valueChange}) => {
  return (
    <div className="form-textarea">
      <label htmlFor={textareaID}>{labelName}</label>
      <textarea defaultValue={value} onChange={valueChange} name="" id={textareaID} cols="76" rows="10"/>
    </div>
  );
};

export default FormTextArea;