import React from "react";
import { useLocalCandleStorage } from "../../../utils/localCandleStorage";

const SelectionList = ({ type }: { type: string }) => {  
  const { getItems } = useLocalCandleStorage(`${type}Candles`);
  const candles = getItems();
  return (
    <div dir="rtl" className="min-h-svh h-full w-full bg-white">
      <h1>{type}</h1>
      {candles && candles.length ? (
        <>
          <h2>פריטים שנבחרו ({candles.length})</h2>
          <div>
            {candles.map((candle) => (
              <div
                key={candle._id}
                className="flex h-20 w-full items-center justify-center"
              >
                <img
                  src={candle.pictures[0].img}
                  alt="candle"
                  className="aspect-auto w-16"
                />
                <div dir="rtl" className="w-full">
                  <p>{candle.name}</p>
                  <p>{candle.price}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h1>עדיין לא נוספו פריטים</h1>
      )}
    </div>
  );
};

export default SelectionList;
