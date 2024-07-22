import React, { SyntheticEvent } from "react";

const SearchInput = ({
  searchInfo,
  setSearchInfo,
  closeSearchBar,
}: {
  searchInfo: string;
  setSearchInfo: React.Dispatch<React.SetStateAction<string>>;
  closeSearchBar: (e: SyntheticEvent) => void;
}) => {
  return (
    <div className="relative w-3/4">
      <input
        className="w-full rounded-3xl border border-[#CFCFCF] bg-white px-4 py-2 text-[#4A5759] placeholder:text-[#4A5759] focus:outline-none focus:ring-2 focus:ring-[#4A5759]"
        type="text"
        placeholder="חיפוש"
        value={searchInfo}
        onChange={(e) => setSearchInfo(e.target.value)}
      />
      <button
        onClick={closeSearchBar}
        className="absolute left-1 top-1/2 size-9 -translate-y-1/2  rounded-full border border-[#CFCFCF] bg-white text-[#4A5759] focus:outline-none focus:ring-2 focus:ring-[#4A5759]"
      >
        &#x2715;
      </button>
    </div>
  );
};

export default SearchInput;
