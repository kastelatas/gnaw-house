import React, {useEffect, useState} from 'react';

const Input = ({placeholder, value}) => {
  const [inputVal, setInputVal] = useState()

  useEffect(() => {
    setInputVal(value)
  }, [value])

  return (
    <input type="text" placeholder={placeholder} defaultValue={inputVal} className="ui-input"/>
  );
};

export default Input;