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
      <button
        className="z-40 flex w-full gap-4 bg-white px-7 py-5 text-start"
        onClick={toggleSizeMenu}
      >
        <p>נרות לפי גודל</p>
        <div
          className={`h-fit w-fit transition-all duration-300 ${sizeMenuIsOpen ? "rotate-90" : "-rotate-90"}`}
        >
          &#10217;
        </div>
      </button>
      <div
        className={`z-10 flex text-center w-full flex-col text-xl font-semibold transition-all duration-300 ${sizeMenuIsOpen ? "" : "hidden"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MenuNavOptions;
