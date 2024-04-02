import React from "react";
import IconBtn from "./IconBtn";


const index = () => {
  return (
    <div className="flex w-full flex-col items-center gap-9 bg-red-500 px-4 py-20">
      {/* <img src={"/images/ellipse15.svg"} alt="ellipse15" id="image2" /> */}

      <h3 className="">!בואו נשמור על קשר</h3>
      <a
        className="bg-primary-pink focus:bg-secondary-pink hover:bg-secondary-pink flex gap-4 rounded-full px-14 py-3 align-middle text-2xl font-semibold text-white items-center"
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
      <p className="">created by weby</p>

      {/* <img src={"/images/ellipse16.svg"} alt="ellipse16" id="image1" /> */}
    </div>
  );
};

export default index;
