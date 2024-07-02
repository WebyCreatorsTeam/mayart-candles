import React from "react";

const ShoppingCartPopoverButtons = ({
  closeShoppingCartPopover,
  shoppingCartArrayActualLength,
}: {
  closeShoppingCartPopover: (event: React.MouseEvent) => void;
  shoppingCartArrayActualLength: number;
}) => {
  return (
    <span className="flex h-fit w-full flex-col gap-[15px] text-xl font-semibold leading-[26.6px] *:w-full *:p-[23px] *:text-center lg:max-w-[589px] lg:*-[">
      {shoppingCartArrayActualLength > 0 && (
        <button className="bg-black text-white">תשלום</button>
      )}
      <button
        onClick={closeShoppingCartPopover}
        className="w-full  border-4 border-black p-[23px] text-center transition-colors duration-300 hover:bg-black hover:text-white active:bg-black active:text-white"
      >
        המשך קניות
      </button>
    </span>
  );
};

export default ShoppingCartPopoverButtons;
