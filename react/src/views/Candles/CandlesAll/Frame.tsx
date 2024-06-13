import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";

const Frame = () => {

  return (
    <div className= 'hidden lg:flex flex-row justify-center w-[410px] ml-[10px] h-[118px] mt-[-128px] p-[14px, 104px, 14px, 104px] gap-[100px] bg-stone-300 opacity-75'>
      <div className='flex items-center justify-center flex-col p-3'>
      <FiShoppingCart className='w-[34px] h-[34px]' />
        <span className='text-[20px]'>הוספה לסל</span>
      </div>
      <div className='flex items-center justify-center flex-col'>
      <GrFavorite className='w-[34px] h-[34px]'/>
        <span className='text-[20px]'>!אהבתי</span>
      </div>
    </div>
  );
};

export default Frame;
