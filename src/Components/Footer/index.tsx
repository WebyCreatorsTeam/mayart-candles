import React from "react";
import IconBtn from "./IconBtn";

const index = () => {
  return (
    <div className="flex w-full flex-col items-center gap-9 bg-red-200 px-4 py-11 text-lg font-normal">
      {/* <img src={"/images/ellipse15.svg"} alt="ellipse15" id="image2" /> */}

      <h3 className="">!בואו נשמור על קשר</h3>
      <a
        className="flex items-center gap-4 rounded-full bg-primary-pink px-[60px] py-[15px] align-middle text-2xl font-semibold text-white hover:bg-secondary-pink focus:bg-secondary-pink"
        href="tel:+972 50-8122000"
      >
        <img src={"/icons/phone-icon.svg"} alt="phone-icon" />
        050-8122000
      </a>
      <div className="flex gap-5">
        <IconBtn href={"https://instagram.com"}>
          <img src={"/icons/instagram-icon.svg"} alt="instagram-icon" />
          Instagram
        </IconBtn>
        <IconBtn href="https://whatsapp.com">
          <img src={"/icons/whatsapp-icon.svg"} alt="whatsapp-icon" />
          Whatsapp
        </IconBtn>
        <IconBtn href="https://gmail.com">
          <img src={"/icons/mail-icon.svg"} alt="mail-icon" />
          Email
        </IconBtn>
      </div>
      <p className="text-xs">
        created by <a href="https://weby.team/">WEBY</a>
      </p>

      {/* <img src={"/images/ellipse16.svg"} alt="ellipse16" id="image1" /> */}
    </div>
  );
};

export default index;
