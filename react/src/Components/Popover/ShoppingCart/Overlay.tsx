import React from "react";
const Overlay = ({
  showShoppingCart,
  children,
  closeShoppingCart,
}: {
  showShoppingCart: boolean;
  children: React.ReactNode;
  closeShoppingCart: () => void;
}) => {
  return (
    <div
      className={`absolute left-0 top-0 z-[1000] flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.3)] ${showShoppingCart ? "" : "hidden"}`}
      onClick={closeShoppingCart}
    >
      {children}
    </div>
  );
};

export default Overlay;
