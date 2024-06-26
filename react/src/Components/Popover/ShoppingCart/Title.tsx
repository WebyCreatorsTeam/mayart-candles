import React from "react";
import TimesButton from "./TimesButton";

const Title = ({
  shoppingCartArrayActualLength,
  closeShoppingCartPopover,
}: {
  shoppingCartArrayActualLength: number;
  closeShoppingCartPopover: (e: React.MouseEvent) => void;
}) => {
  return (
    <div
      className={`flex justify-between bg-[#f7e1d7] px-5 pb-2.5 pt-20 text-left text-lg leading-[36px] lg:px-11 lg:py-5 lg:text-[32px] lg:leading-[42.56px] `}
    >
      <h1 className="lg:ps-[30px]">
        סל קניות{" "}
        {shoppingCartArrayActualLength > 0 &&
          `(${shoppingCartArrayActualLength})`}
      </h1>
      <TimesButton onClick={closeShoppingCartPopover} />
    </div>
  );
};

export default Title;
