import React from "react";
import { useLocalFavoriteCandlesStorage } from "../../utils/localCandleStorage";
import Thumbnail from "../../Components/Candles/Thumbnail";

const FavoritesPage = () => {
  const { getFavoriteItems } = useLocalFavoriteCandlesStorage();
  const candles = getFavoriteItems();
  return (
    <div dir="rtl" className="flex h-full w-full flex-col bg-white xl:mt-48">
      <h1>נרות שאהבתי במיוחד</h1>
      {!candles || !candles.length ? (
        <h1 className="h-full">עדיין לא נוספו פריטים</h1>
      ) : (
        <div className="flex h-full w-full flex-col items-start">
          <div className="flex h-full w-full flex-col items-center">
            {candles.map((candle) => (
              <div
                key={candle._id}
                className="flex w-full items-center justify-center"
              >
                <Thumbnail candle={candle} />
                <div dir="rtl" className="w-full">
                  <p>{candle.name}</p>
                  <p>{candle.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
