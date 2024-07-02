import React from "react";
import { Link } from "react-router-dom";
import { ChosenCandleType } from "../../../utils/types/candles";
const Title = ({ candle }: { candle: ChosenCandleType }) => {
  return (
    <Link
      className="text-nowrap text-xl font-semibold leading-[26.6px] sm:text-[42.77px] sm:leading-[56.89px] lg:border-b-2 lg:border-b-[#B0C4B14D] lg:pb-9 lg:text-[32px] lg:font-normal lg:leading-[42.56px]"
      to={`/candles/candle/${candle._id}`}
    >
      {candle.name} בצורת {candle.shape}
    </Link>
  );
};

export default Title;
