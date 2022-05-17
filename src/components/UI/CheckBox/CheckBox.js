import React from 'react';

const CheckBox = ({name, labelName}) => {
  return (
    <div className="ui-checkbox">
      <label htmlFor={name}>
        {labelName}
      </label>
      <input type="checkbox" id={name} name={name}/>
    </div>
  );
};

export default CheckBox;