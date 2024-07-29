import React from "react";
import { Link } from "react-router-dom";

const DSKPLinkToCandle = ({ id }: { id: string }) => {
  return (
    <Link
      to={`/candles/candle/${id}`}
      className="hidden text-nowrap bg-black px-[196px] py-[25px] text-3xl leading-8 2xl:text-4xl font-semibold 2xl:leading-[47.88px] text-white max-xl:px-14 xl:block"
    >
      צפייה במוצר
    </Link>
  );
};

export default DSKPLinkToCandle;
