import React from 'react';
import Select from "../Select/Select";

const Sorting = ({sortByPrice}) => {
  return (
    <div className="sorting">
     <Select sortByPrice={sortByPrice}/>
    </div>
  );
};

export default Sorting;