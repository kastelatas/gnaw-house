import React from 'react';
import CheckBox from "../UI/CheckBox/CheckBox";

const Filter = ({filter}) => {
  const {name, filterRoster} = filter;
  return (
    <div className="filter">
        <div className="filter__header">
          <p className="filter__name">{name}</p>
        </div>
      <div className="filter__content">
        {
          filterRoster.map((item, index) => {
            return (
              <CheckBox name={item.name} labelName={item.labelName} key={index}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default Filter;