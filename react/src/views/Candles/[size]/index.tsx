import React from "react";
import { useParams } from "react-router-dom";

const BySize = () => {
  const { size } = useParams<{ size: string }>();
  return <div>Size: {size}</div>;
};

export default BySize;
