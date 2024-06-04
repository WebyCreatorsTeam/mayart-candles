import React from "react";
import MenuNavLink from "./MenuNavLink";
import CandlesBySizeMenu from "./CandlesBySizeMenu";
import NavBarMenuSocials from "./SideNavBarMenuSocials";

const SideNavBarMenu = ({
  homepage,
  closeMenus,
  sizeMenuIsOpen,
  toggleSizeMenu,
}: {
  homepage?: boolean;
  closeMenus?: () => void;
  sizeMenuIsOpen: boolean;
  toggleSizeMenu: () => void;
}) => {
  return (
    <nav
      dir="rtl"
      className={`flex flex-col items-start divide-y-[1px] border-[[#B0C4B1]/30] text-center lg:items-center lg:pt-20 ${homepage ? "py-12 font-semibold sm:text-[40px] sm:leading-[53.2px] lg:hidden" : ""}`}
    >
      {homepage ? null : (
        <MenuNavLink onClick={closeMenus} to="/" text="ראשי" />
      )}
      <MenuNavLink
        className={homepage ? "text-xl sm:text-[40px] sm:leading-[53.2px]" : ""}
        onClick={closeMenus}
        to="/candles"
        text="כל הנרות"
      />
      <MenuNavLink
        className={homepage ? "text-xl sm:text-[40px] sm:leading-[53.2px]" : ""}
        onClick={closeMenus}
        to="/candles/designed"
        text="נרות מעוצבים"
      />
      <CandlesBySizeMenu
        className={homepage ? "text-xl sm:text-[40px] sm:leading-[53.2px]" : ""}
        childrenClassName={
          homepage ? "text-xl sm:text-[40px] sm:leading-[53.2px]" : ""
        }
        closeMenus={closeMenus || toggleSizeMenu}
        sizeMenuIsOpen={sizeMenuIsOpen}
        toggleSizeMenu={toggleSizeMenu}
      />
      <MenuNavLink
        className={homepage ? "text-xl sm:text-[40px] sm:leading-[53.2px]" : ""}
        onClick={closeMenus}
        to="/candles/in-vessel"
        text="נרות בכלי"
      />
      {homepage ? null : (
        <MenuNavLink onClick={closeMenus} to="/about" text="אודות" />
      )}
      {homepage ? null : (
        <MenuNavLink onClick={closeMenus} to="/contact" text="צור קשר" />
      )}
      {homepage ? null : <NavBarMenuSocials />}
    </nav>
  );
};

export default SideNavBarMenu;
