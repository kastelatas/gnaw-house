import React, {useState} from 'react';
import Input from "../UI/Input/Input";
import {Button} from "../Button/Button";
import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider";

const FilterPrice = () => {
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(1000)

  const multiRangeSliderChange = (min, max) => {
    setMinValue(min)
    setMaxValue(max)
  }
  return (
    <div className="filter-price">
      <div className="filter-price__wrapper">
        <Input value={minValue}/>
        <div className="filter-price__dash"/>
        <Input value={maxValue}/>
        <Button name="OK"/>
      </div>
      <MultiRangeSlider
        min={0}
        max={1000}
        onChange={({ min, max }) => multiRangeSliderChange(min, max)}
      />
    </div>
  );
};

export default FilterPrice;