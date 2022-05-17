import React from 'react';
import FilterList from "../FilterList/FilterList";
import filters from "../../defines/filters";

const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <FilterList filters={filters}/>
    </div>
  );
};

export default LeftSideBar;