import React, { FC, useState } from 'react'
import PopUp from '../../../UI/PopUp/PopUp'
import axios from 'axios'
import { useCandleIdContext } from '../../Context/CandleContext'
import { BASE_API } from '../../../../../utils/api-connect'

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
            if (newColor.hexCode.length === 0) return alert("נא לבחור את הצבע הרצוי")
            const token = sessionStorage.getItem('token')
            const { data: { continueWork, message, colors } } = await axios.post(`${BASE_API}/candles/add-color?token=${token}`, { id, newColor })
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
            <div className='colorEdit'>
                <h1>הוספת צבע</h1>
                <div className='colorEdit__inputs'>
                    <label htmlFor='color'>שם הצבע:</label>
                    <input id="color" type='text' name="color" onChange={hendleFillInput} />
                    <label htmlFor='hexCode'>צבע:</label>
                    <input id="hexCode" type='color' name="hexCode" onChange={hendleFillInput} />
                </div>
                <div className='colorEdit__editBtns'>
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
                </div>
            </div>
        </PopUp >
    )
}

export default ColorEdit