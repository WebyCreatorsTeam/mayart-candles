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
        to="/candles/sized/large"
        text="גדול"
      />
      <MenuNavLink
        className={`font-normal lg:text-2xl`}
        onClick={closeMenus}
        to="/candles/sized/medium"
        text="בינוני"
      />
      <MenuNavLink
        className={`font-normal lg:text-2xl`}
        onClick={closeMenus}
        to="/candles/sized/small"
        text="קטן"
      />
    </MenuNavOptions>
  );
};

export default CandlesBySizeMenu;
