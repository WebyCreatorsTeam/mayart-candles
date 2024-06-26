import React from "react";
import { ChosenCandleType } from "../../../utils/types/candles";
import TimesButton from "./TimesButton";

const Title = ({
  shoppingCartArray,
  closeShoppingCart,
}: {
  shoppingCartArray: ChosenCandleType[];
  closeShoppingCart: () => void;
}) => {
  return (
    <div
      className={`bg-[#f7e1d7] justify-between flex px-5 pb-2.5 pt-20 text-left text-lg leading-[36px] `}
    >
      <h1>סל קניות ({shoppingCartArray.length})</h1>
      <TimesButton onClick={closeShoppingCart} />
    </div>
  );
};

export default Title;
