import React from "react";
import { Outlet } from "react-router-dom";

const Candles = () => {
  return (
    <div>
      Candles, <Outlet />
    </div>
  );
};

export default Candles;
