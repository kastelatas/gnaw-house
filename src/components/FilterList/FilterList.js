import React from 'react';
import Filter from "../Filter/Filter";

const FilterList = ({filters, filtersHandler}) => {
  return (
    <div className="filter-list">
      {
        filters.map((filter, index) => {
          return (
            <Filter filter={filter} key={index} filtersHandler={filtersHandler}/>
          )
        })
      }
    </div>
  );
};

export default FilterList;