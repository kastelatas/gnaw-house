import React from 'react';
import CheckBox from "../UI/CheckBox/CheckBox";

const Filter = ({filter, filtersHandler}) => {
  const {name, value, filterRoster} = filter;

  const addFilterToList = (filterName) => {
    switch (value) {
      case 'colors':
        filtersHandler({colors: filterName})
        break;
      case 'size':
        filtersHandler({size: filterName})
        break;
      default:
        break;
    }
  }

  return (
    <div className="filter">
      <div className="filter__header">
        <p className="filter__name">{name}</p>
      </div>
      <div className="filter__content">
        {
          filterRoster.map((item, index) => {
            return (
              <CheckBox name={item.name} labelName={item.labelName} key={index} addFilterToList={addFilterToList}/>
            )
          })
        }

      </div>
    </div>
  );
};

export default Filter;