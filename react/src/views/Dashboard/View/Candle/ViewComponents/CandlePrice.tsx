import { FC, useState } from "react";
import PriceEdit from "../EditComponents/PriceEdit/PriceEdit";
import EditIcon from "@mui/icons-material/Edit";

interface ICandlePrice {
  price: number;
  salePrice: number;
}

const CandlePrice: FC<ICandlePrice> = ({ price, salePrice }) => {
  const [popUpPriceEdit, setPopUpPriceEdit] = useState<boolean>(false);
  const [candlePrice, setCandlePrice] = useState<number>(price);
  const [candleSalePrice, setCandleSalePrice] = useState<number>(salePrice);

    return (
        <section className='candleItem__costs'>
            {!popUpPriceEdit && (<div className='candleItem__editInfo'>
                {candleSalePrice !== 0 && <p className='candleItem__costs--sale'>{candleSalePrice}&#x20AA;</p>}
                <p className={candleSalePrice > 0 ? "candleItem__costs--priceBefore":"candleItem__costs--regularPrice" }>{candlePrice}&#x20AA;</p>
                <button onClick={() => setPopUpPriceEdit(true)}><EditIcon color="primary" /></button>
            </div>)}
            {popUpPriceEdit && (
                <PriceEdit
                    price={price}
                    salePrice={salePrice}
                    candlePrice={candlePrice}
                    candleSalePrice={candleSalePrice}
                    setPopUpPriceEdit={setPopUpPriceEdit}
                    setCandlePrice={setCandlePrice}
                    setCandleSalePrice={setCandleSalePrice} />)}
        </section>
    )
}

export default CandlePrice;
