import React from "react";
import FilterCandles from "./FilterCandles";
import SortCandles from "./SortCandles";

const FilterSort = ({home}: {home?: boolean}) => {
  return (
    <div className={`flex flex-row gap-2 absolute top-5 left-5 xl:left-[118.5px] ${home ? "" : "xl:top-48"}`}>
      <FilterCandles />
      <SortCandles />
    </div>
  );
};

export default FilterSort;
