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
        <div className="absolute hidden aspect-square items-center justify-center rounded-full bg-black text-center text-white ~sm/xl:~-top-1/2 ~sm/xl:~-right-2/4 ~sm/xl:~size-4/7  sm:flex sm:max-xl:top-2">
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
    <a onClick={openSearchBar} href="#all_candles_list" className="relative">
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
    </a>
  );
};

export default GenericActionButton;
