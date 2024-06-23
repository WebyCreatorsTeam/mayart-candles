import React from "react";
import InstagramLogo from "./InstagramLogo";
import WhatsappLogo from "./WhatsappLogo";
import MailLogo from "./MailLogo";

const ContactKnob = () => {
  return (
    <div className="fixed left-0 mt-56 flex h-[180px] w-[60px] flex-col items-center justify-around rounded-2xl bg-red-300 p-4">
      <InstagramLogo />
      <WhatsappLogo />
      <MailLogo />
    </div>
  );
};

export default ContactKnob;
