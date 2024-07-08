import { FC, useState } from 'react'
import { useCandleIdContext } from '../../Context/CandleContext'
import axios from 'axios'

interface INameEdit {
    name: string;
    setCandleName: Function;
    candleName: string;
    setPopUpNameEdit: Function;
}

const NameEdit: FC<INameEdit> = ({ name, setCandleName, candleName, setPopUpNameEdit }) => {
    const [loader, setLoader] = useState<boolean>(false);
    const id = useCandleIdContext();

    const handleChangeName = async () => {
        try {
            setLoader(true)
            if (candleName.length === 0) return alert("שם הנר לא יכול להיות ריק")
            const token = sessionStorage.getItem('token')
            const { data: { continueWork, message } } = await axios.patch(`https://mayart-candles-api.vercel.app/candles/change-candle-name?token=${token}`, { id, name: candleName })
            if (continueWork) {
                alert(message)
                return setPopUpNameEdit(false)
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
            <label htmlFor="updateInput">שם הנר:</label>
            <input
                id="updateInput"
                className='updateInput'
                type="text"
                defaultValue={candleName}
                onChange={(ev: any) => setCandleName(ev.target.value)} />
            <button
                onClick={handleChangeName}
                className={loader ? "action-loading" : "agree-btn"}
            >{loader ? "מעדכן את הפרטים" : "שנה שם"}</button>
            <button
                className={loader ? "action-loading" : "cancel-btn"}
                onClick={() => {
                    setCandleName(name)
                    setPopUpNameEdit(false)
                }}>בטל</button>

        </>
    )
}

export default NameEdit