import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { ICandles } from '../MainDashboard'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { red } from '@mui/material/colors';
import axios from 'axios';
import { BASE_API } from '../../../utils/api-connect';

interface ICandleToShow { cdl: ICandles }

const CandleToShow: FC<ICandleToShow> = ({ cdl }) => {
    const [loader, setLoader] = useState<boolean>(false)

    const handleDeleteCandle = async (id: string) => {
        try {
            const confirm = window.confirm(`האם למחוק את הנר ${cdl.name}`)
            if (!confirm) return;
            setLoader(true)
            const { data: { continueWork, message } } = await axios.delete(`https://mayart-candles-api.vercel.app/candles/remove-candle`, { data: { id } })
            console.log(continueWork, message)
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }
    }
    return (
        <div className='candle-show'>
            <button
                disabled={loader}
                onClick={() => handleDeleteCandle(cdl._id!)}
                title='למחוק נר'
            ><DeleteOutlineIcon fontSize="large" sx={{ color: red[700] }} /></button>
            <Link to={`/dashboard/candle/${cdl._id}`} className='link-to-candle'>
                <img src={cdl.pictures![0].img} alt={`תמונה של מוצר ${cdl.name}`} width={530} height={700} />
                <div className='price-details'>
                    <h2>{cdl.name}</h2>
                    <div className='price-details__costs'>
                        {cdl.salePrice && <p className='salePrice'>{cdl.salePrice}&#x20AA;</p>}
                        <p className={cdl.salePrice ? "priceBefore" : "regularPrice"}>{cdl.price}&#x20AA;</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CandleToShow;