import React from "react";
import { Link } from "react-router-dom";
const WhatsappLogo = ({ link }: {link :string }) => {
  return (
    <Link
      className="flex size-[19.45px] items-center justify-center sm:size-[41.59px] xl:size-[34px]"
      to={link}
              rel="noreferrer"
        target="_blank"
    >
      <svg
        className="h-[16.68px] w-[16.68px] sm:h-[35.67px] sm:w-[35.67px] xl:h-[29.75px] xl:w-[29.75px]"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.0008 1.13568C7.90152 1.1382 1.13478 7.91367 1.13481 16.0063C1.13483 18.9238 2.00317 21.8059 3.62388 24.2423L1.13019 30.877L9.4806 29.3669C11.5204 30.3638 13.7603 30.8634 16.0008 30.8648C24.1071 30.8704 30.8801 24.1039 30.8801 16.0063C30.8801 7.91792 24.1046 1.1309 16.0008 1.13568Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.8193 22.5552C18.831 23.8467 20.9285 22.9061 22.3892 21.8166C23.3981 21.0641 23.3646 19.6127 22.5029 18.6953L20.8036 16.8863C20.159 17.5308 18.9029 17.8499 18.0301 17.5843C16.1542 17.0133 15.3668 16.0358 14.7288 15.0419C13.996 13.9003 14.8235 12.1954 15.4681 11.5508L13.574 9.82161C12.7755 9.09265 11.5626 8.96965 10.8659 9.79646C9.48743 11.4323 8.63012 13.9158 9.64544 15.4972C11.4681 18.336 13.9803 20.7329 16.8193 22.5552Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

export default WhatsappLogo;
