import React from "react";

const ShoppingCartPopoverFragrance = ({ fragrance }: { fragrance: string }) => {
  return (
    <span className="flex gap-2">
      <h2>ריח:</h2> {fragrance}
    </span>
  );
};

export default ShoppingCartPopoverFragrance;
