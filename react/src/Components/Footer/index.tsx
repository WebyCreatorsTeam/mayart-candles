import React from "react";
import IconBtn from "./IconBtn";
import TelBtn from "./TelBtn";

const index = () => {
  return (
    <div
      id="contact_us"
      className="flex w-full flex-row items-center justify-center gap-9 overflow-x-clip bg-red-200 px-4 py-11 text-lg font-normal sm:text-4xl"
    >
      <img
        src={"/images/ellipse15.svg"}
        alt="ellipse15"
        id="image2"
        className="hidden h-[591px] w-[577px] lg:block"
      />
      <div className="!flex !flex-col items-center">
        <h3 className="flex text-[32px]">!בואו נשמור על קשר</h3>
        <br />
        <TelBtn />
        <div className="flex flex-row">
          <div className="flex flex-row gap-1">
            <IconBtn href={"https://instagram.com"}>
              <img
                src={"/icons/instagram-icon.svg"}
                alt="instagram-icon"
                className="sm:h-9 sm:w-9 lg:h-9 lg:w-9"
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
        </div>
        <p className="text-xs sm:text-2xl lg:text-[32px]">
          created by <a href="https://weby.team/">WEBY</a>
        </p>
      </div>
      <img
        src={"/images/ellipse16.svg"}
        alt="ellipse16"
        className="hidden h-[575px] w-[713px] lg:block"
      />
    </div>
  );
};

export default index;
