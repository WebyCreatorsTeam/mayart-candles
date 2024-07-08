import React from "react";
import { Link } from "react-router-dom";

const EmptyArrayPrompt = () => {
  return (
    <>
      <h1 className="h-full">עדיין לא נוספו פריטים</h1>
      <Link
        className="w-full border-4 border-black p-[23px] text-center text-xl font-semibold leading-[26.6px]  transition-colors duration-300 hover:bg-black hover:text-white active:bg-black active:text-white sm:w-fit sm:px-[100px] sm:py-10"
        to="/"
      >
        המשך קניות
      </Link>
    </>
  );
};

export default EmptyArrayPrompt;
