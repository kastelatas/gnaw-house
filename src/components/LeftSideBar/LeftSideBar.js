import React from 'react';
import filters from "../../defines/filters";
import FilterList from "../FilterList/FilterList";
import FilterPrice from "../FilterPrice/FilterPrice";

const LeftSideBar = ({filtersHandler}) => {
  return (
    <div className="left-sidebar">
      <FilterList filters={filters} filtersHandler={filtersHandler}/>
      <FilterPrice filtersHandler={filtersHandler}/>
    </div>
  );
};

export default LeftSideBar;