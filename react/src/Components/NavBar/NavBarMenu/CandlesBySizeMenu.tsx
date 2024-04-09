import React from "react";
import MenuNavLink from "./MenuNavLink";

const CandlesBySizeMenu = ({
  closeMenus,
  sizeMenuIsOpen,
  toggleSizeMenu,
}: {
  closeMenus: () => void;
  sizeMenuIsOpen: boolean;
  toggleSizeMenu: () => void;
}) => {
  return (
    <div className="px-7 py-5">
      <button onClick={toggleSizeMenu}>נרות לפי גודל</button>
      <div
        className={`flex flex-col text-xl font-semibold transition-all duration-300 ${sizeMenuIsOpen ? "block" : "hidden"}`}
      >
        <MenuNavLink onClick={closeMenus} to="/candles/large" text="גדול" />
        <MenuNavLink onClick={closeMenus} to="/candles/medium" text="בינוני" />
        <MenuNavLink onClick={closeMenus} to="/candles/small" text="קטן" />
      </div>
    </div>
  );
};

export default CandlesBySizeMenu;
