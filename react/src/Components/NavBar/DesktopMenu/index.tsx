import React from "react";
import DesktopNavLink from "./DesktopNavLink";
import DesktopCandlesBySizeMenu from "./DesktopCandlesBySizeMenu";

const DesktopMenu = () => {
  return (
    <nav className="top-full absolute hidden w-full flex-row-reverse items-center justify-evenly bg-white/50 py-[51px] backdrop-blur-sm xl:flex">
      <DesktopNavLink
        to="/"
        text="ראשי"
        imgsrc="/icons/nav/desktop/home-icon.svg"
      />
      <DesktopNavLink to="/candles" text="כל הנרות" />
      <DesktopNavLink to="/candles/designed" text="נרות מעוצבים" />
      <DesktopCandlesBySizeMenu />
      <DesktopNavLink to="/candles/in-vessel" text="נרות בכלי" />
      <DesktopNavLink to="/about" text="אודות" />
      <DesktopNavLink aTag to="#contact_us" text="צור קשר" />
    </nav>
  );
};

export default DesktopMenu;
