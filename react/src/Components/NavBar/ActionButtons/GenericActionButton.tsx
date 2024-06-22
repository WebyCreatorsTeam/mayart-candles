import React from "react";
import { CandleType } from "../../../utils/types/candles";
export type ActionButtonInfoT = {
  mobile: { src: string; alt: string };
  tablet: { src: string; alt: string };
};
const GenericActionButton = ({
  actionButtonInfo,
  candles,
}: {
  actionButtonInfo: ActionButtonInfoT;
  candles?: CandleType[];
}) => {
  return (
    <div className="relative">
      {candles && (
        <span className="absolute -right-2 -top-1 hidden size-4 items-center justify-center rounded-full bg-black text-center text-sm text-white sm:flex">
          {candles.length}
        </span>
      )}
      <button className="sm:hidden">
        <img
          src={actionButtonInfo.mobile.src}
          alt={actionButtonInfo.mobile.alt}
        />
      </button>
      <button className="hidden sm:block">
        <img
          src={actionButtonInfo.tablet.src}
          alt={actionButtonInfo.tablet.alt}
        />
      </button>
    </div>
  );
};

export default GenericActionButton;
