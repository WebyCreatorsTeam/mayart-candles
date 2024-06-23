import React from "react";
import { Link } from "react-router-dom";

const MailLogo = () => {
  return (
    <Link to="mail.com">
      <svg
        className="h-[34px] w-[34px]"
        width="34"
        height="28"
        viewBox="0 0 34 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.3572 1.25H3.64293C2.30166 1.25 1.21436 2.33732 1.21436 3.67857V24.3214C1.21436 25.6627 2.30166 26.75 3.64293 26.75H30.3572C31.6985 26.75 32.7858 25.6627 32.7858 24.3214V3.67857C32.7858 2.33732 31.6985 1.25 30.3572 1.25Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.21436 4.28571L15.4458 12.8446C15.8822 13.1008 16.4321 13.2411 17.0001 13.2411C17.568 13.2411 18.118 13.1008 18.5544 12.8446L32.7858 4.28571"
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
