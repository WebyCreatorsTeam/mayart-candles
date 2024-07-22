import React, { SyntheticEvent } from "react";
import {  useNavigate } from "react-router-dom";
import { CandleType } from "../../../utils/types/candles";

const ResultThumbnail = ({
  candle,
  closeSearchBar,
}: {
  candle: CandleType;
  closeSearchBar: (e: SyntheticEvent) => void;
}) => {
  const navigate = useNavigate();
  return (
    <button
      className="flex h-fit w-full justify-between ~py-[.5rem]/[1.5rem]"
      onClick={(e) => {
        navigate(`/candles/candle/${candle._id}`);
        closeSearchBar(e);
      }}
    >
      <div className="flex items-center gap-2">
        <img
          src={candle.pictures[0].img}
          alt={candle.name}
          className="size-8"
        />
        <h2>{candle.name}</h2>
      </div>
      <p>{candle.salePrice ? `₪${candle.salePrice}` : `₪${candle.price}`}</p>
    </button>
  );
};

export default ResultThumbnail;
