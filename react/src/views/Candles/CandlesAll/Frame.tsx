import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";

const Frame = () => {
  return (
    <div className="p-[14px, 104px, 14px, 104px] ml-[10px] mt-[-128px] hidden h-[118px] w-[410px] flex-row justify-center gap-[100px] bg-stone-300 opacity-75 lg:flex">
      <div className="flex flex-col items-center justify-center p-3">
        <FiShoppingCart className="h-[34px] w-[34px]" />
        <span className="text-[20px]">הוספה לסל</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <GrFavorite className="h-[34px] w-[34px]" />
        <span className="text-[20px]">!אהבתי</span>
      </div>
    </div>
  );
};

export default Frame;
