import React, { SyntheticEvent, useMemo } from "react";
import { CandleType } from "../../../utils/types/candles";
import { useLoaderData } from "react-router-dom";
import ResultThumbnail from "./ResultThumbnail";
import SearchInput from "./SearchInput";

const SearchBar = ({
  searchInfo,
  setSearchInfo,
  closeSearchBar,
}: {
  searchInfo: string;
  setSearchInfo: React.Dispatch<React.SetStateAction<string>>;
  closeSearchBar: (e: SyntheticEvent) => void;
}) => {
  const { candles } = useLoaderData() as { candles: Array<CandleType> };

  const searchedCandles = useMemo(() => {
    return candles.filter((candle) => {
      return candle.name.toLowerCase().includes(searchInfo.toLowerCase());
    });
  }, [searchInfo, candles]);
  return (
    <span
      dir="rtl"
      onClick={(e: any) => e.stopPropagation()}
      className="absolute top-full flex w-full flex-col  items-center justify-evenly bg-white/50 py-2.5 backdrop-blur-sm ~text-[1.125rem]/[1.875rem] ~gap-[.5rem]/[2rem] ~leading-[1.75rem]/[2.25rem]"
    >
      <SearchInput
        searchInfo={searchInfo}
        setSearchInfo={setSearchInfo}
        closeSearchBar={closeSearchBar}
      />
      <div className={`w-3/4 ${searchInfo.length > 0 ? "block" : "hidden"}`}>
        {searchedCandles.length > 0 ? (
          searchedCandles.map((candle) => (
            <ResultThumbnail key={candle._id} candle={candle} closeSearchBar={closeSearchBar} />
          ))
        ) : (
          <p className="w-full ~py-[.5rem]/[1.5rem]">לא נמצאו תוצאות</p>
        )}
      </div>
    </span>
  );
};

export default SearchBar;
