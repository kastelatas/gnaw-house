import React, {useEffect, useState} from 'react';

const Counter = ({countHandler, count = 1}) => {
  const [num, setNum] = useState(count)

  const minusNumber = () => {
    if (num > 1) {
      setNum(prevState => prevState - 1)
    }
  }

  const plusNumber = () => {
    setNum(prevState => prevState + 1)
  }

  useEffect(() => {
    countHandler(num)
  }, [num])

  return (
    <div className="counter">
      <div className="counter__content">
        <div className="counter__minus" onClick={minusNumber}>-</div>
        <div className="counter__num">{num}</div>
        <div className="counter__plus" onClick={plusNumber}>+</div>
      </div>
    </div>
  );
};

export default Counter;