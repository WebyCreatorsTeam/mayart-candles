import React from "react";
import DesktopNavLink from "./DesktopNavLink";
import DesktopMenuOptions from "./DesktopMenuOptions";

const DesktopCandlesBySizeMenu = () => {
  const [sizeMenuIsOpen, setSizeMenuIsOpen] = React.useState(false);
  const toggleSizeMenu = () => setSizeMenuIsOpen(!sizeMenuIsOpen);
  return (
    <DesktopMenuOptions
      text="נרות לפי גודל"
      sizeMenuIsOpen={sizeMenuIsOpen}
      toggleSizeMenu={toggleSizeMenu}
    >
      <DesktopNavLink
        onClick={toggleSizeMenu}
        hoverEffect={false}
        className="text-2xl font-light"
        to="/candles/sized/נרות גדולים"
        text="נרות גדולים"
      />
      <DesktopNavLink
        onClick={toggleSizeMenu}
        hoverEffect={false}
        className="text-2xl font-light"
        to="/candles/sized/נרות בינוניים"
        text="נרות בינוניים"
      />
      <DesktopNavLink
        onClick={toggleSizeMenu}
        hoverEffect={false}
        className="text-2xl font-light"
        to="/candles/sized/נרות קטנים"
        text="נרות קטנים"
      />
    </DesktopMenuOptions>
  );
};

export default DesktopCandlesBySizeMenu;
