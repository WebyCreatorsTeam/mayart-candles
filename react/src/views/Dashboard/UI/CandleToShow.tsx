import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ICandles } from '../MainDashboard'

interface ICandleToShow { cdl: ICandles }

const CandleToShow: FC<ICandleToShow> = ({ cdl }) => {
    return (
        <Link to={`/dashboard/candle/${cdl._id}`} className='link-to-candle'>
            <img src={cdl.pictures[0]} alt={`תמונה של מוצר ${cdl.name}`} width={530} height={700} />
            <div className='price-details'>
                <h2>{cdl.name}</h2>
                <div className='price-details__costs'>
                    {cdl.salePrice && <p className='salePrice'>{cdl.salePrice}&#x20AA;</p>}
                    <p className={cdl.salePrice ? "priceBefore" : "regularPrice"}>{cdl.price}&#x20AA;</p>
                </div>
            </div>
        </Link>
    )
}

export default CandleToShow;