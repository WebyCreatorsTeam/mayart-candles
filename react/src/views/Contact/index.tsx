import React from "react";

const Contact = () => {
  return (
    <div className="fixed left-0 top-[486px] flex h-[180px] w-[60px] flex-col items-center rounded-2xl bg-red-300 p-4 md:top-[633px] md:scroll-auto ">
      <a href="instagram.com">
        <img
          src={"/icons/instagram-icon.svg"}
          alt="instagram-icon"
          className="h-[34px] w-[34px]"
        />
        <br />
      </a>
      <a href="whatsapp.com">
        <img
          src={"/icons/whatsapp-icon.svg"}
          alt="whatsapp-icon"
          className="h-[34px] w-[34px]"
        />
        <br />
      </a>
      <a href="mail.com">
        <img
          src={"/icons/mail-icon.svg"}
          alt="mail-icon"
          className="h-[34px] w-[34px]"
        />
        <br />
      </a>
    </div>
  );
};

export default Contact;
