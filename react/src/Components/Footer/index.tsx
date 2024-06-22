import React from "react";
import IconBtn from "./IconBtn";
import TelBtn from "./TelBtn";

const index = () => {
  return (
    <div
      id="contact_us"
      className="h-fit px-5 pb-3 pt-[46px] sm:pb-[78.18px] sm:px-[44.39px] sm:pt-[98.37px]"
    >
      <img
        src={"/images/ellipse15.svg"}
        alt="ellipse15"
        id="image2"
        className="hidden h-[561px] w-[577px] lg:block"
      />
      <div className="flex flex-col items-center gap-9 sm:gap-[76.98px]">
        <h3 dir="rtl" className="flex text-lg leading-[42.56px] sm:text-[32px]">
          שמרו על קשר!
        </h3>
        <TelBtn />
        <div className="flex flex-row ">
          <IconBtn href={"https://instagram.com"}>
            <img
              src={"/icons/instagram-icon.svg"}
              alt="instagram-icon"
              className="sm:h-9 sm:w-9"
            />
            Instagram
          </IconBtn>
          <IconBtn href="https://whatsapp.com">
            <img
              src={"/icons/whatsapp-icon.svg"}
              alt="whatsapp-icon"
              className="h-5 w-5 sm:h-9 sm:w-9"
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

        <p className="text-xs sm:text-[25.66px] sm:leading-[34.13px]">
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
