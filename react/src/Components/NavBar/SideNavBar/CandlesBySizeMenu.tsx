import React from "react";
import MenuNavLink from "./MenuNavLink";
import MenuNavOptions from "./MenuNavOptions";

const CandlesBySizeMenu = ({
  className,
  closeMenus,
  sizeMenuIsOpen,
  toggleSizeMenu,
}: {
  className?: string;
  closeMenus?: () => void;
  sizeMenuIsOpen: boolean;
  toggleSizeMenu: () => void;
}) => {
  return (
    <MenuNavOptions
      className={className}
      sizeMenuIsOpen={sizeMenuIsOpen}
      toggleSizeMenu={toggleSizeMenu}
    >
      <MenuNavLink
        className={`font-normal lg:text-2xl`}
        onClick={closeMenus}
        to="/candles/sized/נרות גדולים"
        text="נרות גדולים"
      />
      <MenuNavLink
        className={`font-normal lg:text-2xl`}
        onClick={closeMenus}
        to="/candles/sized/נרות בינוניים"
        text="נרות בינוניים"
      />
      <MenuNavLink
        className={`font-normal lg:text-2xl`}
        onClick={closeMenus}
        to="/candles/sized/נרות קטנים"
        text="נרות קטנים"
      />
    </MenuNavOptions>
  );
};

export default CandlesBySizeMenu;
