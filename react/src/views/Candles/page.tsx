import React from "react";
import { Outlet } from "react-router-dom";
import { candles } from "../../utils/types/candles";

const Candles = () => {
  const [candlesArray, setCandlesArray] = React.useState(candles);
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Outlet context={[candlesArray, setCandlesArray]} />
    </div>
  );
};

export default Candles;
