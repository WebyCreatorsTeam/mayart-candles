import React from "react";
import { Form, Link } from "react-router-dom";
import { useLocalShoppingCartCandlesStorage } from "../../../utils/localCandleStorage";
import CheckoutButton from "./CheckoutButton";

const CheckoutForm = () => {
  const { getShoppingCartItems } = useLocalShoppingCartCandlesStorage();
  const shoppingCartItems = getShoppingCartItems();
  const candlesArrayTrue: boolean = shoppingCartItems
    ? shoppingCartItems.length > 0
      ? true
      : false
    : false;

  return (
    <Form
      // navigate={false}
      preventScrollReset
      className="w-full px-6 pb-[146px] sm:px-[46.29px] sm:pb-[121.68px] xl:max-2xl:px-72"
      action="/candles/list/shoppingCart"
      method="post"
    >
      <div className="flex w-full flex-col gap-[22.56px] *:text-lg *:leading-[23.94px] sm:gap-[28.25px]">
        <h1 className="text-pretty text-center text-lg font-bold leading-[25px] sm:text-[32px] sm:leading-[53.46px]">
          אנא מלאו את הפרטים ונחזור אליכם הקדם!
        </h1>
        <div className="flex w-full flex-col gap-[42px] sm:gap-[89.82px]">
          <div className="flex w-full flex-col gap-[5.64px] sm:gap-[12.06px] sm:text-[32px] sm:leading-[42.56px] xl:max-2xl:text-3xl">
            <label className="w-full" htmlFor="fullName">
              שם מלא
            </label>
            <input
              className="w-full bg-[#F06CBB33] p-[4.959px] focus:outline-none sm:px-[33.58px] sm:py-[25px]"
              type="text"
              name="fullName"
              id="fullName"
            />

            <label className="w-full " htmlFor="phone">
              מס׳ טלפון נייד
            </label>
            <input
              className="w-full bg-[#F06CBB33] p-[4.959px] focus:outline-none  sm:px-[33.58px] sm:py-[25px]"
              type="tel"
              name="telPhone"
              id="telPhone"
            />
            <label className="w-full " htmlFor="phone">
              דואר אלקטרוני
            </label>
            <input
              className="w-full bg-[#F06CBB33] p-[4.959px] focus:outline-none  sm:px-[33.58px] sm:py-[25px]"
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="flex w-full flex-col  items-center gap-[15px] text-xl font-semibold leading-[26.6px] sm:gap-[32.08px] sm:text-[32px] sm:leading-[42.56px] xl:max-2xl:text-3xl">
            <CheckoutButton candlesArrayTrue={candlesArrayTrue} />
            <Link
              className="w-full border-4 border-black p-[23px] text-center  transition-colors duration-300 hover:bg-black hover:text-white active:bg-black active:text-white sm:w-fit sm:px-[100px] sm:py-10"
              to="/"
            >
              המשך קניות
            </Link>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default CheckoutForm;
