import React from "react";

const TelBtn = () => {
  return (
    <a
      className="flex items-center justify-center gap-4  whitespace-nowrap rounded-full bg-primary-pink px-[60px] py-[15px] align-middle text-2xl font-semibold leading-[53.2px] text-white hover:bg-secondary-pink focus:bg-secondary-pink sm:gap-5 sm:px-[75.8px] sm:text-[40px] sm:max-lg:py-[22px] lg:px-[70px] lg:text-[32px] lg:leading-[42.56px]"
      href="tel:972508122000"
    >
      <img
        src={"/icons/phone-icon.svg"}
        alt="phone-icon"
        className="size-[31.13px] whitespace-nowrap sm:size-[55px] lg:size-9"
      />
      050-8122000
    </a>
  );
};

export default TelBtn;
