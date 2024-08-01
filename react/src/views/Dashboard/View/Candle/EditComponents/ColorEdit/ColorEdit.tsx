import { FC, useState } from 'react'
import axios from 'axios'
import { useCandleIdContext } from '../../Context/CandleContext'
import PopUp from '../../../../UI/PopUp/PopUp'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

interface IColorEdit {
    setPopUpEditColors: Function
    setCandleColors: Function
}
const ColorEdit: FC<IColorEdit> = ({ setPopUpEditColors, setCandleColors }) => {
    const id = useCandleIdContext()
    const [loader, setLoader] = useState<boolean>(false)
    const [newColor, setNewColor] = useState<{ color: string, hexCode: string }>({ color: "", hexCode: "" })
    const [editColor, setEditColor] = useState<boolean>(false)

    const hendleFillInput = (ev: any) => {
        setNewColor((color: any) => { return { ...color, [ev.target.name]: ev.target.value } })
    }

    const handleAddColor = async () => {
        try {
            setLoader(true)
            if (newColor.color.length === 0) return alert("חייב לכלול שם הצבע")
            if (newColor.hexCode.length === 0) return alert("נא לבחור את הצבע הרצוי")
            const token = cookies.get('token')
            const { data: { continueWork, message, colors } } = await axios.post(`https://mayart-candles-api.vercel.app/candles/add-color?token=${token}`, { id, newColor })
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
            <button
                onClick={() => setEditColor(!editColor)}
                className={loader ? "form-btn_disable" : "form-btn_active"}>
                {editColor ? "סגירת חלון עריכה" : "עריכת צבע"}
            </button>
            <div className='colorEdit'>
                {
                    editColor ?
                        (<>
                            <h1>עריכת צבע</h1>
                            {/* <div className='colorEdit__inputs'>
                                <label htmlFor='color'>שם הצבע:</label>
                                <input id="color" type='text' name="color" onChange={hendleFillInput} />
                                <label htmlFor='hexCode'>צבע:</label>
                                <input id="hexCode" type='color' name="hexCode" onChange={hendleFillInput} />
                            </div>
                            <div className='colorEdit__editBtns'>
                                <button
                                    onClick={handleAddColor}
                                    className={loader ? "action-loading" : "agree-btn"}
                                >
                                    {loader ? "מעדכן את הפרטים" : "הוסף צבע"}
                                </button>
                                <button
                                    className={loader ? "action-loading" : "cancel-btn"}
                                    onClick={() => {
                                        setPopUpEditColors(false)
                                        setNewColor({ color: "", hexCode: "" })
                                    }}
                                >בטל</button>
                            </div> */}
                        </>)
                        :
                        (<>
                            <h1>הוספת צבע</h1>
                            {/* <div className='colorEdit__inputs'>
                                <label htmlFor='color'>שם הצבע:</label>
                                <input id="color" type='text' name="color" onChange={hendleFillInput} />
                                <label htmlFor='hexCode'>צבע:</label>
                                <input id="hexCode" type='color' name="hexCode" onChange={hendleFillInput} />
                            </div>
                            <div className='colorEdit__editBtns'>
                                <button
                                    onClick={handleAddColor}
                                    className={loader ? "action-loading" : "agree-btn"}
                                >
                                    {loader ? "מעדכן את הפרטים" : "הוסף צבע"}
                                </button>
                                <button
                                    className={loader ? "action-loading" : "cancel-btn"}
                                    onClick={() => {
                                        setPopUpEditColors(false)
                                        setNewColor({ color: "", hexCode: "" })
                                    }}
                                >בטל</button>
                            </div> */}
                        </>)}
            </div>
            <button
                className={loader ? "action-loading" : "cancel-btn"}
                onClick={() => {
                    setPopUpEditColors(false)
                    setNewColor({ color: "", hexCode: "" })
                }}
            >בטל</button>
        </PopUp >
    )
}

export default ColorEdit