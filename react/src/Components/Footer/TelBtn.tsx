import React from "react";

const TelBtn = () => {
  return (
    <a
    className="flex items-center justify-center gap-4  whitespace-nowrap rounded-full bg-primary-pink px-[60px] py-[15px] align-middle text-2xl font-semibold text-white hover:bg-secondary-pink focus:bg-secondary-pink sm:gap-5 sm:px-[75.8px] sm:py-[22px] sm:text-[40px] leading-[53.2px]"
    href="tel:+972 50-8122000"
    >
      <img
        src={"/icons/phone-icon.svg"}
        alt="phone-icon"
        className="whitespace-nowrap size-[31.13px] sm:size-[55px]"
      />
      050-8122000
    </a>
  );
};

export default TelBtn;
