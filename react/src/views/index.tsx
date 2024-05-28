import React from "react";
import SideNavBarMenu from "../Components/NavBar/SideNavBar/SideNavBarMenu";
import HeroImageSection from "../Components/HeroImageSection";
import CandlesAll from "./Candles/CandlesAll/CandlesAll";

const Home = () => {
  const [sizeMenuIsOpen, setSizeMenuIsOpen] = React.useState(false);
  const toggleSizeMenu = () => setSizeMenuIsOpen(!sizeMenuIsOpen);

  return (
<<<<<<< HEAD
    <div className="bg-red-300 mt-[486px] lg:mt-[420px] flex flex-col absolute w-[45px] h-[140px] lg:w-[60px] lg:h-[180px] justify-center items-center rounded-2xl">
<a href="">
              <img
                src={"/icons/instagram-icon.svg"}
                alt="instagram-icon"
                className="w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]"
              /><br />

</a>
<a href="">

              <img
                src={"/icons/whatsapp-icon.svg"}
                alt="whatsapp-icon"
                className="w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]"

              /><br />
</a>
<a href="">

              <img
                src={"/icons/mail-icon.svg"}
                alt="mail-icon"
                className="w-[20px] h-[20px] lg:w-[34px] lg:h-[34px]"
              />
</a>
=======
    <div className="scrollbar-none flex flex-col">
      <HeroImageSection />
      <SideNavBarMenu
        sizeMenuIsOpen={sizeMenuIsOpen}
        toggleSizeMenu={toggleSizeMenu}
      />
      <CandlesAll />
>>>>>>> 2bc9849112ea1a74a267bd823507d635b58a9f08
    </div>
  );
};

export default Home;
