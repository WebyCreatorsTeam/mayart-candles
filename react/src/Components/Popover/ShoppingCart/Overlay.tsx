import React from "react";
const Overlay = ({
  showShoppingCart,
  children,
}: {
  showShoppingCart: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`absolute left-0 top-0 z-[1000] flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.3)] ${showShoppingCart ? "" : "hidden"}`}
    >
      {children}
    </div>
  );
};

export default Overlay;
