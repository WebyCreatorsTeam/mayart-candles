import React from "react";

const ShoppingCartPopoverShape = ({ shape }: { shape: string }) => {
  return (
    <span className="flex gap-2">
      <h2>צורה:</h2> {shape}
    </span>
  );
};

export default ShoppingCartPopoverShape;
