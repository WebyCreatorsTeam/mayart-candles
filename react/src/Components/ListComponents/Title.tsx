import React from "react";
import { Link } from "react-router-dom";
import { CandleType, ChosenCandleType } from "../../utils/types/candles";

const Title = ({ candle }: { candle: CandleType | ChosenCandleType }) => {
  return (
    <Link
      className="text-xl font-semibold leading-[26.6px] sm:text-[42.77px] sm:leading-[56.89px] xl:border-b-2 xl:border-b-[#B0C4B14D] xl:pb-9 xl:text-[32px] xl:font-normal xl:leading-[42.56px]"
      to={`/candles/candle/${candle._id}`}
    >
      {candle.name} בצורת {candle.shape}
    </Link>
  );
};

export default Title;
