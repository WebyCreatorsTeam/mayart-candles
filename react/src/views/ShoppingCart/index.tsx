import React from "react";
import { useLocalShoppingCartCandlesStorage } from "../../utils/localCandleStorage";
import Thumbnail from "../../Components/Candles/Thumbnail";
import { ChosenCandleType } from "../../utils/types/candles";

const ShoppingCartPage = () => {
  const { getShoppingCartItems } = useLocalShoppingCartCandlesStorage();

  const candles = getShoppingCartItems();
  return (
    <div dir="rtl" className="flex h-full gap-[23px] w-full flex-col bg-white xl:mt-48">
      <div className="flex items-center gap-2 flex-col">
        <h1 className="w-fit border-b border-b-[#B0C4B14D] px-[30px] py-[21.5px] text-center text-xl font-semibold leading-[26.6px]">
          סל קניות
        </h1>
        {candles && candles.length && (
          <h2 className="text-lg leading-9">
            פריטים שנבחרו ({candles.length})
          </h2>
        )}
      </div>
      {!candles || !candles.length ? (
        <h1 className="h-full">עדיין לא נוספו פריטים</h1>
      ) : (
        <div className="flex h-full w-full flex-col items-start">
          <div className="flex h-full w-full flex-col items-center gap-[50px]">
            {candles.map((candle: ChosenCandleType) => (
              <div key={candle._id} className="flex w-full gap-3">
                <Thumbnail candle={candle as any} />
                <div dir="rtl" className="w-full gap-[15px] text-lg leading-9">
                  <p className="flex items-start gap-[18px]">
                    צבע: {candle.colors.color}
                    <div
                      aria-description={`צבע ${candle.colors.color}`}
                      style={{
                        backgroundColor: `${candle.colors.hexCode}`,
                        border:
                          candle.colors.color === "לבן"
                            ? "1px solid black"
                            : "0",
                      }}
                      className={`size-[31px] self-center rounded-full`}
                    ></div>
                  </p>
                  <p>ריח: {candle.fragrances}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;
