import React from "react";
import { CandleType } from "../../../../utils/types/candles";
import { Link } from "react-router-dom";

const FrameAddToCartButton = ({ candle }: { candle: CandleType }) => {
  return (
    <Link
      to={`/candles/candle/${candle._id}`}
      // onClick={() => handleAddToFavoritesArray(candle)}
      className="hidden flex-col items-center justify-center p-2.5 sm:p-[21.38px] xl:flex xl:p-[15px]"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.23267 1.21436H7.16366L9.27651 22.2215C9.36433 22.8006 9.65848 23.3284 10.1048 23.7078C10.5511 24.0871 11.1194 24.2923 11.7051 24.2858H27.0051C27.5348 24.3135 28.0588 24.167 28.4972 23.8688C28.9358 23.5706 29.2646 23.137 29.4337 22.6344L32.6637 12.9201C32.7841 12.5549 32.8162 12.1662 32.7569 11.7863C32.6979 11.4063 32.5493 11.0457 32.3237 10.7344C32.0886 10.4033 31.7741 10.1365 31.4093 9.95826C31.0445 9.78007 30.6407 9.69621 30.2351 9.71436H8.01366"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.5922 32.7857C25.9217 32.7857 25.3779 32.242 25.3779 31.5715C25.3779 30.9009 25.9217 30.3572 26.5922 30.3572C27.2627 30.3572 27.8065 30.9009 27.8065 31.5715C27.8065 32.242 27.2627 32.7857 26.5922 32.7857Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.8066 32.7857C10.1359 32.7857 9.59229 32.242 9.59229 31.5715C9.59229 30.9009 10.1359 30.3572 10.8066 30.3572C11.4772 30.3572 12.0209 30.9009 12.0209 31.5715C12.0209 32.242 11.4772 32.7857 10.8066 32.7857Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="hidden xl:block">הוספה לסל</span>
    </Link>
  );
};

export default FrameAddToCartButton;
