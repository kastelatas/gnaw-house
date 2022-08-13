import React, {useCallback, useEffect, useState, useRef} from "react";

const MultiRangeSlider = ({min, max, onChange}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  useEffect(() => {
    onChange({min: minVal, max: maxVal});
  }, [minVal, maxVal, onChange]);

  return (
    <div className="multiRangeSlider">
      <div className="multiRangeSlider__container-wrap">
        <input
          type="range"
          min={min}
          max={max}
          value={Number(minVal)}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className="thumb thumb--left"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={Number(maxVal)}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className="thumb thumb--right"
        />

        <div className="slider">
          <div className="slider__track"/>
          <div ref={range} className="slider__range"/>
        </div>
      </div>
    </div>
  );
};
export default MultiRangeSlider;
