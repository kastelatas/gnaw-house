import React from 'react';

const RadioButton = ({id, name, labelName, checked = false}) => {
  return (
    <div className="ui-radioButton">
      <input type="radio" id={name} name={id} defaultChecked={checked} value={name}/>
      <label htmlFor={name}>
        {labelName}
      </label>
    </div>
  );
};

export default RadioButton;