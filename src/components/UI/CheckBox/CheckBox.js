import React from 'react';

const CheckBox = ({name, labelName}) => {
  return (
    <div className="ui-checkbox">
      <input type="checkbox" id={name} name={name}/>
      <label htmlFor={name}>
        {labelName}
      </label>
    </div>
  );
};

export default CheckBox;