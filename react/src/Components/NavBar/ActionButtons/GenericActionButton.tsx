import React from "react";
import { ChosenCandleType } from "../../../utils/types/candles";

import { Link } from "react-router-dom";
export type ActionButtonInfoT = {
  mobile: { src: string; alt: string };
  tablet: { src: string; alt: string };
};
const GenericActionButton = ({
  actionButtonInfo,
  candles,
  type,
}: {
  actionButtonInfo: ActionButtonInfoT;
  candles?: ChosenCandleType[];
  type?: string;
}) => {
  return (
    <>
      {type ? (
        <Link to={`/list/${type}`} className="relative">
          {candles && (
            <span className="absolute -right-2 -top-1 hidden size-4 items-center justify-center rounded-full bg-black text-center text-sm text-white sm:flex">
              {candles.length}
            </span>
          )}
          <img
            className="sm:hidden"
            src={actionButtonInfo.mobile.src}
            alt={actionButtonInfo.mobile.alt}
          />
          <img
            className="hidden sm:block"
            src={actionButtonInfo.tablet.src}
            alt={actionButtonInfo.tablet.alt}
          />
        </Link>
      ) : (
        <div className="relative">
          {candles && (
            <span className="absolute -right-2 -top-1 hidden size-4 items-center justify-center rounded-full bg-black text-center text-sm text-white sm:flex">
              {candles.length}
            </span>
          )}
          <img
            className="sm:hidden"
            src={actionButtonInfo.mobile.src}
            alt={actionButtonInfo.mobile.alt}
          />
          <img
            className="hidden sm:block"
            src={actionButtonInfo.tablet.src}
            alt={actionButtonInfo.tablet.alt}
          />
        </div>
      )}
    </>
  );
};

export default GenericActionButton;
