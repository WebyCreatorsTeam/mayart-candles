import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { CandleType } from "../../../utils/types/candles";
import Thumbnail from "../../../Components/Candles/Thumbnail";
import { V6FilterSort } from "../../../Components/shadcn/components/v6-filter-sort";

export enum TypeOfSortEnum {
  AZ = "A-Z",
  ZA = "Z-A",
  LTH = "Low-High",
  HTL = "High-Low",
  NF = "New-Old",
  OF = "Old-New",
}

const AllCandles = ({ home = false }: { home?: boolean }) => {
  const { candles, type, size } = useLoaderData() as {
    candles: Array<CandleType>;
    type?: string;
    size?: string;
  };
  const returnCurrentPrice = (candle: CandleType) =>
    candle.salePrice ? candle.salePrice : candle.price;
  // const [filterSet, setFilterSet] = React.useState({});
  const [sortType, setSortType] = React.useState(TypeOfSortEnum.NF);
  const sortedCandles = React.useMemo(() => {
    if (!candles) return [];
    if (!sortType) return candles;
    if (sortType === TypeOfSortEnum.OF) return [...candles];
    if (sortType === TypeOfSortEnum.NF) return [...candles].reverse();
    if (sortType === TypeOfSortEnum.AZ)
      return [...candles].sort((a, b) => a.name.localeCompare(b.name));
    if (sortType === TypeOfSortEnum.ZA)
      return [...candles].sort((a, b) => b.name.localeCompare(a.name));
    if (sortType === TypeOfSortEnum.LTH)
      return [...candles].sort(
        (a, b) => returnCurrentPrice(a) - returnCurrentPrice(b),
      );
    if (sortType === TypeOfSortEnum.HTL)
      return [...candles].sort(
        (a, b) => returnCurrentPrice(b) - returnCurrentPrice(a),
      );
    return candles;
  }, [candles, sortType]);
  return (
    <Suspense fallback={<h1 className="no_data_text">Loading...</h1>}>
      <Await resolve={candles}>
        <div
          id="all_candles_list"
          className={`relative flex w-full flex-col items-center gap-10 px-5 pb-14 sm:gap-20 xl:px-[118.5px] xl:pb-[69px] ${home ? "" : "xl:mt-48"}`}
        >
          <h1 className="mb-10 border-b-[0.5px] border-[#B0C4B1] px-[30px] py-[21.5px] text-xl font-semibold sm:px-[64.15px] sm:py-[46.345px] sm:text-[42.77px] sm:leading-[56.89px]  xl:border-none xl:p-0 xl:text-[64px] xl:leading-[85.13px]">
            {type ? type : size ? size : "כל הנרות"}
          </h1>

          <V6FilterSort
            // filterSet={}
            sortType={sortType}
            // setFilterSet={}
            setSortType={setSortType}
          />
          <div
            dir="rtl"
            className="grid w-full grid-flow-row grid-cols-2 items-center justify-center justify-items-center gap-5 xl:grid-cols-3 xl:gap-[47px]"
          >
            {sortedCandles.map((candle) => (
              <Thumbnail key={candle._id} candle={candle} />
            ))}
          </div>
        </div>
      </Await>
    </Suspense>
  );
};

export default AllCandles;
