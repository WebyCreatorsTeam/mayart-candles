import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="h-fit w-full px-5 xl:mt-40 xl:px-32 xl:py-10">
      <div
        dir="rtl"
        className="flex h-fit w-full  flex-col items-center xl:gap-8"
      >
        <h1 className="text-nowrap text-2xl font-semibold">
          {" "}
          הראה שגיאה, הנר המבוקש אינו קיים.
        </h1>
        <button
          className="w-full border-4 border-black p-[23px] text-center text-xl font-semibold leading-[26.6px]  transition-colors duration-300 hover:bg-black hover:text-white active:bg-black active:text-white sm:w-fit sm:px-[100px] sm:py-10"
          onClick={() => navigate(-1)}
        >
          חזרה לעמוד הקודם
        </button>
      </div>
    </div>
  );
};

export default Error;
