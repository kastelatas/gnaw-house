import React from 'react';
import Filter from "../Filter/Filter";

const FilterList = ({filters}) => {
  return (
    <div className="filter-list">
      {
        filters.map((filter, index) => {
          return (
            <Filter filter={filter} key={index}/>
          )
        })
      }
    </div>
  );
};

export default FilterList;