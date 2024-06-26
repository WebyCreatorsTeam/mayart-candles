import React from "react";
import { Link } from "react-router-dom";

const MailLogo = () => {
  return (
    <Link
      className="flex size-[19.45px] items-center justify-center sm:size-[41.59px] lg:size-[34px]"
      to="mail.com"
    >
      <svg
        className="h-[14.59px] w-[18.06px] sm:h-[31.19px] sm:w-[38.62px] lg:h-[25.5px] lg:w-[31.57px]"
        viewBox="0 0 34 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.3572 1.25H3.64287C2.3016 1.25 1.21429 2.33732 1.21429 3.67857V24.3214C1.21429 25.6627 2.3016 26.75 3.64287 26.75H30.3572C31.6985 26.75 32.7857 25.6627 32.7857 24.3214V3.67857C32.7857 2.33732 31.6985 1.25 30.3572 1.25Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.21429 4.28571L15.4457 12.8446C15.8821 13.1008 16.4321 13.2411 17 13.2411C17.5679 13.2411 18.1179 13.1008 18.5543 12.8446L32.7857 4.28571"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Link>
  );
};

export default MailLogo;
