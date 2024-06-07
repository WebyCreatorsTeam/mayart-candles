import React from "react";
import DesktopNavLink from "./DesktopNavLink";
import DesktopCandlesBySizeMenu from "./DesktopCandlesBySizeMenu";
import { candleCatagories } from "../../../types/candles";

const DesktopMenu = () => {
  return (
    <nav className="absolute top-full hidden w-full flex-row-reverse items-center justify-evenly bg-white/50 py-[51px] backdrop-blur-sm xl:flex">
      <DesktopNavLink
        to="/"
        text="ראשי"
        imgsrc="/icons/nav/desktop/home-icon.svg"
      />
      <DesktopNavLink to="/candles" text="כל הנרות" />
      <DesktopCandlesBySizeMenu />
    {candleCatagories.map((candleCategory) => (
      <DesktopNavLink
        key={candleCategory.link}
        to={`/candles/${candleCategory.link}`}
        text={candleCategory.name}
      />
    ))}
      <DesktopNavLink to="/about" text="אודות" />
      <DesktopNavLink aTag to="#contact_us" text="צור קשר" />
    </nav>
  );
};

export default DesktopMenu;
