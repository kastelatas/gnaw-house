import React from 'react';

const RadioButton = (props) => {

  const {id, name, size, labelName, checked = false, clickHandler} = props

  return (
    <div className="ui-radioButton" onClick={() => clickHandler(size)}>
      <input type="radio" id={name} name={id} defaultChecked={checked} value={name}/>
      <label htmlFor={name}>
        {labelName}
      </label>
    </div>
  );
};

export default RadioButton;