import React from "react";
import { Link } from "react-router-dom";

const DSKPLinkToCandle = ({ id }: { id: string }) => {
  return (
    <Link
      to={`/candles/candle/${id}`}
      className="hidden self-end text-nowrap bg-black px-[196px] py-[25px] text-4xl font-semibold leading-[47.88px] text-white max-xl:px-14 lg:block"
    >
      צפייה במוצר
    </Link>
  );
};

export default DSKPLinkToCandle;
