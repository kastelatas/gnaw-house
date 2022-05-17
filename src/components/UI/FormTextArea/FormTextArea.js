import React from 'react';

const FormTextArea = ({labelName, textareaID}) => {
  return (
    <div className="form-textarea">
      <label htmlFor={textareaID}>{labelName}</label>
      <textarea name="" id={textareaID} cols="76" rows="10"/>
    </div>
  );
};

export default FormTextArea;