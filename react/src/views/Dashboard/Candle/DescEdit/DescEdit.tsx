import React, { FC, useState } from 'react'
import { useCandleIdContext } from '../Context/CandleContext'
import axios from 'axios'

interface IDescEdit {
    description: string
    candleDesc: string
    setCandleDesc: Function
    setPopUpDescEdit: Function

}
const DescEdit: FC<IDescEdit> = ({ description, candleDesc, setCandleDesc, setPopUpDescEdit }) => {
    const [loader, setLoader] = useState<boolean>(false)
    const id = useCandleIdContext()

    const handleChangeDesc = async () => {
        try {
            setLoader(true)
            if (candleDesc.length === 0) return alert("המוצר חייב לכלול תיאור מוצר")
            const { data: {continueWork, message} } = await axios.patch("http://localhost:7575/candles/edit-description", { id, candleDesc })
            if(continueWork) {
                alert(message)
                return setPopUpDescEdit(false)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoader(false)
        }
    }
    
    return (
        <section className=''>
            <textarea name="" id="" rows={5} cols={70} onChange={(ev: any) => setCandleDesc(ev.target.value)} defaultValue={candleDesc}></textarea>
            <button
                onClick={handleChangeDesc}
                className={loader ? "unactiveBtn" : "actionBtn"}
            >{loader ? "מעדכן את הפרטים" : "שנה תיאור מוצר"}</button>
            <button
                className={loader ? "unactiveBtn" : "actionBtn"}
                onClick={() => {
                    setCandleDesc(description)
                    setPopUpDescEdit(false)
                }}>בטל</button>
        </section>
    )
}

export default DescEdit