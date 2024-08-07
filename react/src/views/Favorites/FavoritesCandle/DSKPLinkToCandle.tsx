import React from "react";
import { Link } from "react-router-dom";

const DSKPLinkToCandle = ({ id }: { id: string }) => {
  return (
    <Link
      to={`/candles/candle/${id}`}
      className="~sm/lg:px-[10rem]/[12.25rem] hidden text-nowrap bg-black py-[25px] text-4xl font-semibold leading-[47.88px] text-white max-xl:px-14 xl:block"
    >
      צפייה במוצר
    </Link>
  );
};

export default DSKPLinkToCandle;
