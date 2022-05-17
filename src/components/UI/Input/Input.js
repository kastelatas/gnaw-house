import React from 'react';

const Input = ({placeholder, value = ''}) => {
  return (
    <input type="text" placeholder={placeholder} defaultValue={value} className="ui-input"/>
  );
};

export default Input;