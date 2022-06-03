import React from 'react';

const CheckBox = ({name, labelName, addFilterToList}) => {
  return (
    <div className="ui-checkbox" onClick={() => addFilterToList(name)}>
      <input type="checkbox" id={name} name={name}/>
      <label htmlFor={name}>
        {labelName}
      </label>
    </div>
  );
};

export default CheckBox;