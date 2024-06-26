import React from "react";
import InstagramLogo from "./InstagramLogo";
import WhatsappLogo from "./WhatsappLogo";
import MailLogo from "./MailLogo";

const ContactKnob = () => {
  return (
    <div className="fixed left-0 mt-56 flex w-fit flex-col items-center justify-around gap-[14.3px] rounded-2xl bg-red-300 px-[11.28px] py-[11.53px] sm:px-[25.6px] sm:py-[27px] lg:p-5">
      <WhatsappLogo/>
      <InstagramLogo />
      <MailLogo />
    </div>
  );
};

export default ContactKnob;
