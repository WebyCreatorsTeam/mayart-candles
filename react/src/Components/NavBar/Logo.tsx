import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link
      to="/"
      className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center"
    >
      <h1 className="font-source-serif-4 text-lg font-normal leading-4 sm:text-4xl">
        MAYART
      </h1>
      <p className="font-pacifico text-xxs font-normal sm:text-lg">
        Handmade Candles
      </p>
    </Link>
  );
};

export default Logo;
