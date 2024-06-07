import { Link } from "react-router-dom";
import { CandleType } from "../../types/candles";

const CandleThumbnail = ({
  _id,
  name,
  shape,
  colors,
  fragrances,
  price,
  salePrice,
  pictures,
  size,
}: CandleType) => {
  const priceToShow = salePrice ? salePrice : price;
  return (
    <Link to={`/candles/${_id}`} className="w-full">
      <div className="w-full">
        <img src={pictures[0]} alt={name} className="w-full object-cover" />
        <div className="p-2">
          <p className="truncate text-sm">{name}</p>
          <p className="text-sm">{shape}</p>
          <p className="text-sm">{colors.map((color) => color).join(", ")}</p>
          <p className="text-sm">
            {fragrances.map((fragrance) => fragrance).join(", ")}
          </p>
          <p className="text-sm">Size: {size}</p>
          <p className="text-sm">$ {priceToShow}</p>
        </div>
      </div>
    </Link>
  );
};
export default CandleThumbnail;
