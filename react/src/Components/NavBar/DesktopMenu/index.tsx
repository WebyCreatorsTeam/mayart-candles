import React from "react";
import DesktopNavLink from "./DesktopNavLink";
import DesktopCandlesBySizeMenu from "./DesktopCandlesBySizeMenu";

const DesktopMenu = () => {
  return (
    <nav className="flex w-full flex-row-reverse items-center justify-evenly bg-white/50 backdrop-blur-sm">
      <DesktopNavLink to="/" text="ראשי" imgsrc="/icons/nav/desktop/home-icon.svg" />
      <DesktopNavLink to="/candles" text="כל הנרות" />
      <DesktopNavLink to="/candles/designed" text="נרות מעוצבים" />
      <DesktopNavLink to="/candles/in-vessel" text="נרות בכלי" />
      <DesktopCandlesBySizeMenu  />
      <DesktopNavLink to="/about" text="אודות" />
      <DesktopNavLink to="/contact" text="צור קשר" />
    </nav>
  );
};

export default DesktopMenu;
