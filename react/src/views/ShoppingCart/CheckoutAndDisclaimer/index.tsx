import React from "react";
import CheckoutForm from "./CheckoutForm";
import Disclaimer from "./Disclaimer";

const CheckoutAndDisclaimer = () => {
  return (
    <div className="order-last flex w-full flex-col sm:gap-[89.82px] gap-[42px]">
      <Disclaimer/>
      <CheckoutForm />
    </div>
  );
};

export default CheckoutAndDisclaimer;
