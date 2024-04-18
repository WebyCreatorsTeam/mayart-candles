import React from "react";
import DownArrow from "../DesktopMenu/DownArrow";

const MenuNavOptions = ({
  children,
  sizeMenuIsOpen,
  toggleSizeMenu,
}: {
  children: React.ReactNode;
  sizeMenuIsOpen: boolean;
  toggleSizeMenu: () => void;
}) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex w-full flex-col divide-y overflow-hidden lg:w-7/12"
    >
      <button
        className="z-40 lg:justify-evenly flex w-full hover:bg-primary-pink items-center lg:gap-1 lg:font-normal gap-4 bg-white lg:px-3 px-7 py-5 text-start lg:text-[32px]"
        onClick={toggleSizeMenu}
      >
        <p>נרות לפי גודל</p>
        <DownArrow  sizeMenuIsOpen={sizeMenuIsOpen} />
      </button>
      <div
        className={`z-10 flex w-full lg:items-center flex-col text-center text-xl font-semibold transition-all duration-300 ${sizeMenuIsOpen ? "" : "hidden"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MenuNavOptions;
