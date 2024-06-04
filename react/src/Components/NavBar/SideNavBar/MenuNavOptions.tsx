import React from "react";
import DownArrow from "../DesktopMenu/DownArrow";

const MenuNavOptions = ({
  className,
  children,
  sizeMenuIsOpen,
  toggleSizeMenu,
}: {
  className?: string;
  children: React.ReactNode;
  sizeMenuIsOpen: boolean;
  toggleSizeMenu: () => void;
}) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`flex  w-full flex-col divide-y overflow-hidden lg:w-7/12 ${className}`}
    >
      <button
        className="z-40 flex w-full items-center justify-center gap-4 bg-white px-7 py-5 text-start active:bg-primary-pink lg:justify-evenly lg:gap-1 lg:px-3 lg:text-[32px] lg:font-normal lg:hover:bg-primary-pink"
        onMouseDown={toggleSizeMenu}
      >
        <p>נרות לפי גודל</p>
        <DownArrow sizeMenuIsOpen={sizeMenuIsOpen} />
      </button>
      <div
        className={`z-10 flex w-full flex-col text-center text-xl font-semibold transition-all duration-300 lg:items-center ${sizeMenuIsOpen ? "" : "hidden"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MenuNavOptions;
