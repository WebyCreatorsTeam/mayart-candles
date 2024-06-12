import React, { FC, useState } from 'react'
import PopUp from '../../UI/PopUp/PopUp'
import axios from 'axios'
import { useCandleIdContext } from '../Context/CandleContext'

interface IColorEdit {
    setPopUpEditColors: Function
    setCandleColors: Function
}
const ColorEdit: FC<IColorEdit> = ({ setPopUpEditColors, setCandleColors }) => {
    const id = useCandleIdContext()
    const [loader, setLoader] = useState<boolean>(false)
    const [newColor, setNewColor] = useState<{ color: string, hexCode: string }>({ color: "", hexCode: "" })

    const hendleFillInput = (ev: any) => {
        setNewColor((color: any) => { return { ...color, [ev.target.name]: ev.target.value } })
    }

    const handleAddColor = async () => {
        try {
            setLoader(true)
            if (newColor.color.length === 0) return alert("חייב לכלול שם הצבע")
            const { data: { continueWork, message, colors } } = await axios.post("http://localhost:7575/candles/add-color", { id, newColor })
            if (continueWork) {
                alert(message)
                setCandleColors(colors)
                return setPopUpEditColors(false)
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }
    }

    return (
        <PopUp>
            <h1>הוספת צבע</h1>
            <label>שם הצבע:</label>
            <input type='text' name="color" className='updateInput' onChange={hendleFillInput} />
            <label>צבע:</label>
            <input type='color' name="hexCode" className='updateInput' onChange={hendleFillInput} />
            <button
                onClick={handleAddColor}
                className={loader ? "unactiveBtn" : "actionBtn"}
            >
                {loader ? "מעדכן את הפרטים" : "הוסף צבע"}
            </button>
            <button
                className={loader ? "unactiveBtn" : "actionBtn"}
                onClick={() => {
                    setPopUpEditColors(false)
                    setNewColor({ color: "", hexCode: "" })
                }}
            >בטל</button>
        </PopUp >
    )
}

export default ColorEdit