import React from 'react';

const Button = ({name, btnClass = ""}) => {
  return (
    <button className={"btn " + btnClass}>{name}</button>
  );
};

export default Button;