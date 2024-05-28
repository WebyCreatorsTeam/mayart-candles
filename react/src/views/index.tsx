import React from "react";
import SideNavBarMenu from "../Components/NavBar/SideNavBar/SideNavBarMenu";
import HeroImageSection from "../Components/HeroImageSection";
import CandlesAll from "./Candles/CandlesAll/CandlesAll";

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
      <CandlesAll />
    </div>
  );
};

export default Home;
