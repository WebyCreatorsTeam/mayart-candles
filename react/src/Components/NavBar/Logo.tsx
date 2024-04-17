import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link
      to="/"
      className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center"
    >
      <h1 className="font-source-serif-4 text-lg sm:text-4xl font-normal leading-4">
        MAYART
      </h1>
      <p className="font-pacifico sm:text-lg text-xxs font-normal">Handmade Candles</p>
    </Link>
  );
};

export default Logo;
