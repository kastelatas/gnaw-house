import React, {useState} from 'react';

const Counter = () => {
  const [num, setNum] = useState(1)

  const minusNumber = () => {
    if (num > 0) {
      setNum(prevState => prevState - 1)
    }
  }

  const plusNumber = () => {
    setNum(prevState => prevState + 1)
  }

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