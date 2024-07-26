import React, { SyntheticEvent } from "react";
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
  quantity,
  openSearchBar,
}: {
  candles?: Array<CandleType | ChosenCandleType> | undefined;
  actionButtonInfo: ActionButtonInfoT;
  favoriteCandles?: Array<CandleType> | undefined;
  shoppingCartCandles?: Array<ChosenCandleType> | undefined;
  type?: string;
  quantity?: number;
  openSearchBar?: (e: SyntheticEvent) => void;
}) => {
  return type ? (
    <Link to={`/candles/list/${type}`} className="relative">
      {candles && candles.length > 0 && (
        <div className="absolute hidden aspect-square items-center justify-center rounded-full bg-black text-center text-white sm:-right-2 sm:-top-1 sm:flex sm:size-4 xl:-right-1.5 md:-top-0.5 xl:-top-1 xl:size-5  2xl:-right-4 2xl:-top-3 2xl:size-7">
          {quantity}
        </div>
      )}
      <img
        className="sm:hidden"
        src={actionButtonInfo.mobile.src}
        alt={actionButtonInfo.mobile.alt}
      />
      <img
        className="hidden ~size-7/10 sm:block"
        src={actionButtonInfo.tablet.src}
        alt={actionButtonInfo.tablet.alt}
      />
    </Link>
  ) : (
    <button onClick={openSearchBar} className="relative">
      {candles && (
        <span className="absolute  hidden items-center justify-center rounded-full bg-black text-center text-sm text-white ~size-4/6 sm:flex">
          {candles.length}
        </span>
      )}
      <img
        className="sm:hidden"
        src={actionButtonInfo.mobile.src}
        alt={actionButtonInfo.mobile.alt}
      />
      <img
        className="hidden ~size-7/10  sm:block"
        src={actionButtonInfo.tablet.src}
        alt={actionButtonInfo.tablet.alt}
      />
    </button>
  );
};

export default GenericActionButton;
