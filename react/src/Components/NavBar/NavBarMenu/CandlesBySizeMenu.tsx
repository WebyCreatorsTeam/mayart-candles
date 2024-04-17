import React from "react";
import MenuNavLink from "./MenuNavLink";
import MenuNavOptions from "./MenuNavOptions";

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
    <MenuNavOptions
      // text="נרות לפי גודל"
      sizeMenuIsOpen={sizeMenuIsOpen}
      toggleSizeMenu={toggleSizeMenu}
    >
      <MenuNavLink onClick={closeMenus} to="/candles/large" text="גדול" />
      <MenuNavLink onClick={closeMenus} to="/candles/medium" text="בינוני" />
      <MenuNavLink onClick={closeMenus} to="/candles/small" text="קטן" />
    </MenuNavOptions>
  );
};

export default CandlesBySizeMenu;
