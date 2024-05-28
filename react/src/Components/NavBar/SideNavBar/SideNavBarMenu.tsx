import React from "react";
import MenuNavLink from "./MenuNavLink";
import CandlesBySizeMenu from "./CandlesBySizeMenu";
import NavBarMenuSocials from "./SideNavBarMenuSocials";

const SideNavBarMenu = ({
  closeMenus,
  sizeMenuIsOpen,
  toggleSizeMenu,
}: {
  closeMenus?: () => void;
  sizeMenuIsOpen: boolean;
  toggleSizeMenu: () => void;
}) => {
  return (
    <nav className="flex flex-col items-start divide-y-[1px] border-[[#B0C4B1]/30] lg:items-center lg:pt-20">
      <MenuNavLink onClick={closeMenus} to="/" text="ראשי" />
      <MenuNavLink onClick={closeMenus} to="/candles" text="כל הנרות" />
      <MenuNavLink
        onClick={closeMenus}
        to="/candles/designed"
        text="נרות מעוצבים"
      />
      <CandlesBySizeMenu
        closeMenus={closeMenus || toggleSizeMenu}
        sizeMenuIsOpen={sizeMenuIsOpen}
        toggleSizeMenu={toggleSizeMenu}
      />
      <MenuNavLink
        onClick={closeMenus}
        to="/candles/in-vessel"
        text="נרות בכלי"
      />
      <MenuNavLink onClick={closeMenus} to="/about" text="אודות" />
      <MenuNavLink onClick={closeMenus} to="/contact" text="צור קשר" />
      <NavBarMenuSocials />
    </nav>
  );
};

export default SideNavBarMenu;
