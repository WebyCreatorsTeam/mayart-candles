import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { ICandles } from '../MainDashboard'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { red } from '@mui/material/colors';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

interface ICandleToShow {
    cdl: ICandles
    setAllCandles?: Function
}

const CandleToShow: FC<ICandleToShow> = ({ cdl, setAllCandles }) => {
    const [loader, setLoader] = useState<boolean>(false)

    const handleDeleteCandle = async (id: string) => {
        try {
            const confirm = window.confirm(`האם למחוק את הנר ${cdl.name}`)
            if (!confirm) return;
            setLoader(true)
            const token = cookies.get('token')
            const { data: { continueWork, message } } = await axios.delete(`https://mayart-candles-api.vercel.app/candles/remove-candle?token=${token}`, { data: { id } })

            if (continueWork) {
                alert(message)
                return setAllCandles && setAllCandles((candles: any) => {
                    return candles.filter((candle: ICandles) => candle._id !== id)
                })
            }

            alert(message)
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
                    <h2>{cdl.name} בצורת {cdl.shape}</h2>
                    <div className='price-details__costs'>
                        {cdl.salePrice > 0 && <p className='salePrice'>{cdl.salePrice}&#x20AA;</p>}
                        <p className={cdl.salePrice ? "priceBefore" : "regularPrice"}>{cdl.price}&#x20AA;</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CandleToShow;