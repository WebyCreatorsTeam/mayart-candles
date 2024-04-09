import React from "react";
import MenuNavLink from "./MenuNavLink";
import CandlesBySizeMenu from "./CandlesBySizeMenu";

const NavBarMenu = ({
  navBarMenuIsOpen,
  setNavBarMenuIsOpen,
}: {
  navBarMenuIsOpen: boolean;
  setNavBarMenuIsOpen: (NavBarMenuIsOpen: boolean) => void;
}) => {
  const [sizeMenuIsOpen, setSizeMenuIsOpen] = React.useState(false);
  const toggleSizeMenu = () => setSizeMenuIsOpen(!sizeMenuIsOpen);
  const closeMenus = () => {
    setNavBarMenuIsOpen(false);
    setSizeMenuIsOpen(false);
  };
  return (
    <div
      dir="rtl"
      className={`absolute ${navBarMenuIsOpen ? "right-0" : "-right-full"} top-full flex w-full flex-col items-start text-xl font-semibold transition-all duration-500`}
    >
      <MenuNavLink onClick={closeMenus} to="/" text="ראשי" />
      <MenuNavLink onClick={closeMenus} to="/candles" text="כל הנרות" />
      <MenuNavLink
        onClick={closeMenus}
        to="/candles/designed"
        text="נרות מעוצבים"
      />
      <MenuNavLink
        onClick={closeMenus}
        to="/candles/in-vessel"
        text="נרות בכלי"
      />
      <CandlesBySizeMenu
        closeMenus={closeMenus}
        sizeMenuIsOpen={sizeMenuIsOpen}
        toggleSizeMenu={toggleSizeMenu}
      />
      <MenuNavLink onClick={closeMenus} to="/about" text="אודות" />
      <MenuNavLink onClick={closeMenus} to="/contact" text="צור קשר" />
    </div>
  );
};

export default NavBarMenu;
