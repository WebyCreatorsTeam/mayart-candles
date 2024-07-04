import React, { FC, useState } from 'react'
import { useCandleIdContext } from '../../Context/CandleContext'
import axios from 'axios'
import { BASE_API } from '../../../../../../utils/api-connect'

interface IPriceEdit {
    price: number
    salePrice: number
    candlePrice: number
    candleSalePrice: number
    setPopUpPriceEdit: Function
    setCandlePrice: Function
    setCandleSalePrice: Function
}

const PriceEdit: FC<IPriceEdit> = ({
    price,
    salePrice,
    candlePrice,
    candleSalePrice,
    setPopUpPriceEdit,
    setCandlePrice,
    setCandleSalePrice
}) => {
    const [loader, setLoader] = useState<boolean>(false)
    const id = useCandleIdContext()

    const handleChangePrice = async () => {
        try {
            setLoader(true)
            if (Number(candlePrice) === 0 && Number(candleSalePrice) > 0) return alert("לא ניתן לתת הנחה במידה והמחיר שווה לאפס")
            if (Number(candlePrice) < Number(candleSalePrice)) return alert("המחיר הרגיל לא יכול להיות יותר נמוך ממחיר הנחה")
            if (Number(candlePrice) === Number(candleSalePrice)) return alert("המחיר וההנחה לא יכולים להיות אותו הדבר")
            const token = sessionStorage.getItem('token')
            const { data: { continueWork, message } } = await axios.patch(`https://mayart-candles-api.vercel.app/candles/change-candle-price?token=${token}`, { id, price: candlePrice, salePrice: candleSalePrice })
            if (continueWork) {
                alert(message)
                return setPopUpPriceEdit(false)
            }
            return alert(message)
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }
    }

    return (
        <>
            <label>מחיר רגיל:</label>
            <input type="number" className='candleItem__costs--updateInput' defaultValue={candlePrice} onChange={(ev: any) => setCandlePrice(ev.target.value)} />
            <label>מחיר הנחה במידה ויש:</label>
            <input type="number" className='candleItem__costs--updateInput' defaultValue={candleSalePrice} onChange={(ev: any) => setCandleSalePrice(ev.target.value)} />
            <button
                onClick={handleChangePrice}
                className={loader ? "action-loading" : "agree-btn"}
            >{loader ? "מעדכן את הפרטים" : "עדכן מחירים"}</button>
            <button
                className={loader ? "action-loading" : "cancel-btn"}
                onClick={() => {
                    setCandlePrice(price)
                    setCandleSalePrice(salePrice)
                    setPopUpPriceEdit(false)
                }}>בטל</button>
        </>
    )
}

export default PriceEdit