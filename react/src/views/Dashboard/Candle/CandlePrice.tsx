import { FC } from 'react'

interface ICandlePrice {
    price: number,
    salePrice: number
}

const CandlePrice: FC<ICandlePrice> = ({ price, salePrice }) => {
    return (
        <section className='candleItem__costs'>
            {salePrice && <p className='candleItem__costs--sale'>{salePrice}&#x20AA;</p>}
            <p className={salePrice ? "candleItem__costs--priceBefore" : "candleItem__costs--regularPrice"}>{price}&#x20AA;</p>
            <button>עריכת מחיר</button>
        </section>
    )
}

export default CandlePrice