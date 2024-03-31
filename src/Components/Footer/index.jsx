import React from 'react';
import {
  FaInstagram,
  FaWhatsapp 
} from 'react-icons/fa';
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import "./Footer.css";
import ellipse from "../../images/Ellipse15.png";
import Image2 from "../../images/Ellipse16.png";

const index = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-20 px-4 grid lg:grid-cols-2 text-gray-300' id='footer'>
      <div className='container'>
      <img src={ellipse} alt="ellipse15" id='image1'/>
      <div className='p'>

              <h3>!בואו נשמור על קשר</h3><br />
        <a href="" id='btn'><BsTelephone />050-8122000</a>
        <div className='contact'>
        <a href="" id='icon'><FaInstagram size={30} />Instagram</a>
        <a href="" id='icon'><FaWhatsapp size={30} />Whatsapp</a>
        <a href="" id='icon'><MdOutlineMailOutline size={30} />Email</a><br />
      </div>
      <p>created by weby</p><br /> 
        </div>
        <img src={Image2} alt="ellipse16" id='image1' /><br />
      </div>
    </div>
  );
};

export default index;

