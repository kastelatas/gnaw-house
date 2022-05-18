import React from 'react';

const RadioButton = (props) => {

  const {id, name, labelName, checked = false, clickHandler} = props

  return (
    <div className="ui-radioButton" onClick={() => clickHandler(name)}>
      <input type="radio" id={name} name={id} defaultChecked={checked} value={name}/>
      <label htmlFor={name}>
        {labelName}
      </label>
    </div>
  );
};

export default RadioButton;