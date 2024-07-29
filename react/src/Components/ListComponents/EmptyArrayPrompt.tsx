import React from "react";
import { Link } from "react-router-dom";

const EmptyArrayPrompt = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10 px-6 sm:px-[46.29px] xl:max-2xl:px-72 text-center text-xl font-semibold leading-[26.6px]">
      <h1 className="h-full">עדיין לא נוספו פריטים</h1>
      <Link
        className="w-full border-4 border-black p-[23px]  transition-colors duration-300 hover:bg-black hover:text-white active:bg-black active:text-white sm:w-fit sm:px-[100px] sm:py-10"
        to="/"
      >
        המשך קניות
      </Link>
    </div>
  );
};

export default EmptyArrayPrompt;
