import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import "./Footer.css";

const index = () => {
  return (
    <div className="flex w-full bg-red-500 px-4 py-20">
      {/* <img src={"/images/ellipse15.svg"} alt="ellipse15" id="image2" /> */}
      <div className="">
        <h3 className="">!בואו נשמור על קשר</h3>
        <a href="" id="btn">
          <BsTelephone />
          050-8122000
        </a>
        <div className="">
          <a href="" id="icon">
            <FaInstagram size={30} />
            Instagram
          </a>
          <a href="" id="icon">
            <FaWhatsapp size={30} />
            Whatsapp
          </a>
          <a href="" id="icon">
            <MdOutlineMailOutline size={30} />
            Email
          </a>
        </div>
        <p className="">created by weby</p>
      </div>
      {/* <img src={"/images/ellipse16.svg"} alt="ellipse16" id="image1" /> */}
      <br />
    </div>
  );
};

export default index;
