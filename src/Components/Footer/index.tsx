import React from "react";
import IconBtn from "./IconBtn";
import TelBtn from "./TelBtn";

const index = () => {
  return (
    <div className="flex w-full flex-col items-center gap-9 bg-red-200 px-4 py-11 text-lg sm:text-4xl font-normal">
      {/* <img src={"/images/ellipse15.svg"} alt="ellipse15" id="image2" /> */}

      <h3 className="">!בואו נשמור על קשר</h3>
     <TelBtn />
      <div className="flex gap-5">
        <IconBtn href={"https://instagram.com"}>
          <img src={"/icons/instagram-icon.svg"} alt="instagram-icon"  className="sm:w-9 sm:h-9"/>
          Instagram
        </IconBtn>
        <IconBtn href="https://whatsapp.com">
          <img src={"/icons/whatsapp-icon.svg"} alt="whatsapp-icon" className="sm:w-9 sm:h-9"/>
          Whatsapp
        </IconBtn>
        <IconBtn href="https://gmail.com">
          <img src={"/icons/mail-icon.svg"} alt="mail-icon" className="sm:w-9 sm:h-9"/>
          Email
        </IconBtn>
      </div>
      <p className="text-xs sm:text-2xl">
        created by <a href="https://weby.team/">WEBY</a>
      </p>

      {/* <img src={"/images/ellipse16.svg"} alt="ellipse16" id="image1" /> */}
    </div>
  );
};

export default index;
