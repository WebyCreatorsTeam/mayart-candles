import React from "react";
import { useLoaderData } from "react-router-dom";

const Disclaimer = () => {
  const data = useLoaderData() as {
    paymentText: { _id: string; text: string };
  };
  if (!data) return null;
  const { paymentText } = data;
  return (
    <p className="px-[13.5px] text-center text-lg leading-9 sm:px-[28.87px] sm:text-[32px] sm:leading-[64px]">
      {paymentText.text}
    </p>
  );
};

export default Disclaimer;
