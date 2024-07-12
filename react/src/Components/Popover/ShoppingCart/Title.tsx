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
      className={`flex justify-between bg-[#f7e1d7] px-5 pb-2.5 pt-20 text-left text-lg leading-[36px] xl:px-11 xl:py-5 xl:text-[32px] xl:leading-[42.56px] `}
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
