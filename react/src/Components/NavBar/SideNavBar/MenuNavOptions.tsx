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
      className={`flex w-full flex-col divide-y overflow-hidden xl:w-7/12 ${className}`}
    >
      <button
        className="z-40 flex w-full items-center justify-center gap-4 bg-white px-7 py-5 text-center  active:bg-primary-pink xl:justify-evenly xl:gap-1 xl:px-3 xl:text-[32px] xl:font-normal xl:hover:bg-primary-pink"
        onMouseDown={toggleSizeMenu}
      >
        נרות לפי גודל
        <DownArrow sizeMenuIsOpen={sizeMenuIsOpen} />
      </button>
      <div
        className={`z-10 flex w-full flex-col text-center text-xl font-semibold transition-all duration-300 xl:items-center ${sizeMenuIsOpen ? "" : "hidden"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MenuNavOptions;
