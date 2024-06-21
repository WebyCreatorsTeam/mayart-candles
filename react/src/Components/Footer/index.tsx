import React from "react";
import IconBtn from "./IconBtn";
import TelBtn from "./TelBtn";

const index = () => {
  return (
    <div
      id="contact_us"
      className="flex w-full flex-row items-center justify-center gap-9 overflow-x-clip text-lg font-normal sm:text-4xl"
    >
      <img
        src={"/images/ellipse15.svg"}
        alt="ellipse15"
        id="image2"
        className="hidden absolute mr-[90%] mt-[40px h-[575px] w-[713px] lg:block"
      />
      <div className="flex md:mt-10 flex-col items-center">
        <h3 className="flex text-[18px] md:text-[32px]">!בואו נשמור על קשר</h3>
        <br />
        <TelBtn />

        <div className="absolute mt-[165px] md:mt-[280px] lg:mr-[80px] flex flex-row w-[76px] h-[43px] justify-center items-center gap-6 md:gap-8">
          <IconBtn href={"https://instagram.com"}>
            <img
              src={"/icons/instagram-icon.svg"}
              alt="instagram-icon"
              className="sm:h-9 sm:w-9 lg:h-9 lg:w-9 "
            />
            Instagram
          </IconBtn>
          <IconBtn href="https://whatsapp.com">
            <img
              src={"/icons/whatsapp-icon.svg"}
              alt="whatsapp-icon"
              className="h-5 w-5 sm:h-9 sm:w-9 lg:h-9 lg:w-9"
            />
            Whatsapp
          </IconBtn>
          <IconBtn href="https://gmail.com">
            <img
              src={"/icons/mail-icon.svg"}
              alt="mail-icon"
              className="h-5 w-5 sm:h-9 sm:w-9"
            />
            Email
          </IconBtn>
        </div>

        <p className="text-[15px] mt-[145px] sm:text-2xl lg:text-[20px] md:mt-[200px]">
          created by <a href="https://weby.team/">WEBY</a>
        </p>
      </div>
      <img
        src={"/images/ellipse16.svg"}
        alt="ellipse16"
        className="hidden absolute ml-[80%] mt-[180px] gap-6  h-[575x] w-[500px] lg:block"
      />
    </div>
  );
};

export default index;
