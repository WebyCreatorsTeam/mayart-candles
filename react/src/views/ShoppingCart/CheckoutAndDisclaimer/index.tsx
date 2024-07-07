import React from "react";
import CheckoutForm from "./CheckoutForm";
import Disclaimer from "./Disclaimer";

const CheckoutAndDisclaimer = () => {
  return (
    <div className="order-last flex w-full flex-col gap-[42px] sm:gap-[89.82px]">
      <Disclaimer />
      <CheckoutForm />
    </div>
  );
};

export default CheckoutAndDisclaimer;
