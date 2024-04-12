import React from "react";

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
      className="flex w-full flex-col divide-y overflow-hidden"
    >
      <button className="z-40 bg-white w-full text-start px-7 py-5" onClick={toggleSizeMenu}>
        נרות לפי גודל
      </button>
      <div
        className={`z-10 flex  w-full flex-col divide-y text-xl font-semibold transition-all duration-300 ${sizeMenuIsOpen ? "" : "hidden"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MenuNavOptions;
