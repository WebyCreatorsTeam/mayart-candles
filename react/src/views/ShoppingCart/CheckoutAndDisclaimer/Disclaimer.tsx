import React from "react";
import { useLoaderData } from "react-router-dom";

const Disclaimer = () => {
  const data = useLoaderData() as {
    paymentText: { _id: string; text: string };
  };
  if (!data) return null;
  const { paymentText } = data;
  return (
    <p className="px-[13.5px] sm:px-[28.87px] sm:text-[32px] sm:leading-[64px] text-center text-lg leading-9">
      {paymentText.text}
    </p>
  );
};

export default Disclaimer;
