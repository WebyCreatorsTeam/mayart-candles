import React from "react";

const FilterSortButton = ({ children }: { children: React.ReactNode }) => {
  return <button className="rounded-full shadow-[0_20px_25px_-5px_rgba(0,0,0,0.2)] p-2">{children}</button>;
};

export default FilterSortButton;
