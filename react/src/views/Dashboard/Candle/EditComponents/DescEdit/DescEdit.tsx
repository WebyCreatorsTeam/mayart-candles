import { FC, useState } from 'react'
import { useCandleIdContext } from '../../Context/CandleContext'
import axios from 'axios'
import { BASE_API } from '../../../../../utils/api-connect'

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
            const token = sessionStorage.getItem('token')
            const { data: { continueWork, message } } = await axios.patch(`${BASE_API}/candles/edit-description?token=${token}`, { id, candleDesc })
            if (continueWork) {
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
        <section className="candleItem__candleDesc--edit">
            <textarea rows={5} onChange={(ev: any) => setCandleDesc(ev.target.value)} defaultValue={candleDesc}></textarea>
            <div>
                <button
                    onClick={handleChangeDesc}
                    className={loader ? "action-loading" : "agree-btn"}
                >{loader ? "מעדכן את הפרטים" : "שנה תיאור המוצר"}</button>
                <button
                    className={loader ? "action-loading" : "cancel-btn"}
                    onClick={() => {
                        setCandleDesc(description)
                        setPopUpDescEdit(false)
                    }}>בטל</button>
            </div>
        </section>
    )
}

export default DescEdit