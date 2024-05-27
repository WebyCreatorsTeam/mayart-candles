import React from "react";
import AllCandles from "./Candles/AllCandles";
import SideNavBarMenu from "../Components/NavBar/SideNavBar/SideNavBarMenu";
import HeroImageSection from "../Components/HeroImageSection";


const Home = () => {
  const [sizeMenuIsOpen, setSizeMenuIsOpen] = React.useState(false);
  const toggleSizeMenu = () => setSizeMenuIsOpen(!sizeMenuIsOpen);
  
  return (
    <div className="scrollbar-none flex flex-col">
      <HeroImageSection />
      <SideNavBarMenu
        sizeMenuIsOpen={sizeMenuIsOpen}
        toggleSizeMenu={toggleSizeMenu}
      />
      <AllCandles />
    </div>
  );
};

export default Contact;
