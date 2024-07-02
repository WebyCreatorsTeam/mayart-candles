import React from "react";
import InstagramLogo from "./InstagramLogo";
import WhatsappLogo from "./WhatsappLogo";
import MailLogo from "./MailLogo";

const ContactKnob = () => {
  return (
    <div className="fixed left-0 top-96 flex w-fit flex-col items-center justify-around gap-[14.3px] rounded-md sm:rounded-2xl bg-[#EDAFB8] px-[11.28px] py-[11.53px] sm:px-[25.6px] sm:py-[27px] lg:p-5">
      <WhatsappLogo />
      <InstagramLogo />
      <MailLogo />
    </div>
  );
};

export default ContactKnob;
