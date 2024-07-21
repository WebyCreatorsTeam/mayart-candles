import { FC, useState } from 'react'
import { useCandleIdContext } from '../../Context/CandleContext'
import axios from 'axios'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

interface IShapeEdit {
    shape: string
    candleShape:string
    setCandleShape: Function
    setPopUpCandleShape: Function
}
const ShapeEdit: FC<IShapeEdit> = ({ shape, candleShape, setCandleShape, setPopUpCandleShape }) => {
    const [loader, setLoader] = useState<boolean>(false)
    const id = useCandleIdContext()

    const handleChangeShape = async () => {
        try {
            setLoader(true)
            if (candleShape.length === 0) return alert("צורת הנר לא יכול להיות ריק")
                const token = cookies.get('token')
            const { data: { continueWork, message } } = await axios.patch(`https://mayart-candles-api.vercel.app/candles/change-candle-shape?token=${token}`, { id, shape: candleShape })
            if (continueWork) {
                alert(message)
                return setPopUpCandleShape(false)
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
            <label htmlFor="updateInput">צורת הנר:</label>
            <input
                id="updateInput"
                className='updateInput'
                type="text"
                defaultValue={candleShape}
                onChange={(ev: any) => setCandleShape(ev.target.value)} />
            <button
                onClick={handleChangeShape}
                className={loader ? "action-loading" : "agree-btn"}
            >{loader ? "מעדכן את הפרטים" : "שנה סוג צורה"}</button>
            <button
                className={loader ? "action-loading" : "cancel-btn"}
                onClick={() => {
                    setCandleShape(shape)
                    setPopUpCandleShape(false)
                }}>בטל</button>
        </>
    )
}

export default ShapeEdit