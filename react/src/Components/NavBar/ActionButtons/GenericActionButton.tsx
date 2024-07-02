import React from "react";
import { CandleType, ChosenCandleType } from "../../../utils/types/candles";

import { Link } from "react-router-dom";
export type ActionButtonInfoT = {
  mobile: { src: string; alt: string };
  tablet: { src: string; alt: string };
};
const GenericActionButton = ({
  actionButtonInfo,
  type,
  candles,
  amount,
}: {
  candles?: Array<CandleType | ChosenCandleType> | undefined;
  actionButtonInfo: ActionButtonInfoT;
  favoriteCandles?: Array<CandleType> | undefined;
  shoppingCartCandles?: Array<ChosenCandleType> | undefined;
  type?: string;
  amount?: number;
}) => {
  return (
    <>
      {type ? (
        <Link to={`/candles/list/${type}`} className="relative">
          {candles && candles.length > 0 && (
            <div className="absolute ~right-[-.5rem]/[-1rem] ~top-[-.25rem]/[-.5rem] hidden ~size-4/7 aspect-square items-center justify-center rounded-full bg-black text-center  text-white sm:flex">
              {amount}
            </div>
          )}
          <img
            className="sm:hidden"
            src={actionButtonInfo.mobile.src}
            alt={actionButtonInfo.mobile.alt}
          />
          <img
            className="hidden sm:block ~size-7/10"
            src={actionButtonInfo.tablet.src}
            alt={actionButtonInfo.tablet.alt}
          />
        </Link>
      ) : (
        <div className="relative">
          {candles && (
            <span className="absolute  hidden ~size-4/6 items-center justify-center rounded-full bg-black text-center text-sm text-white sm:flex">
              {candles.length}
            </span>
          )}
          <img
            className="sm:hidden"
            src={actionButtonInfo.mobile.src}
            alt={actionButtonInfo.mobile.alt}
          />
          <img
            className="hidden sm:block  ~size-7/10"
            src={actionButtonInfo.tablet.src}
            alt={actionButtonInfo.tablet.alt}
          />
        </div>
      )}
    </>
  );
};

export default GenericActionButton;
