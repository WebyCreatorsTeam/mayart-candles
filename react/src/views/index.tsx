import React from "react";

const Contact = () => {
  return (
    <div className="bg-red-300 mt-96 flex flex-col absolute w-[60px] h-[180px] items-center p-4 rounded-2xl">
<a href="">
              <img
                src={"/icons/instagram-icon.svg"}
                alt="instagram-icon"
                className="w-[34px] h-[34px]"
              /><br />

</a>
<a href="">

              <img
                src={"/icons/whatsapp-icon.svg"}
                alt="whatsapp-icon"
                className="w-[34px] h-[34px]"

              /><br />
</a>
<a href="">

              <img
                src={"/icons/mail-icon.svg"}
                alt="mail-icon"
                className="w-[34px] h-[34px]"
              />
</a>
    </div>
  );
};

export default Contact;
