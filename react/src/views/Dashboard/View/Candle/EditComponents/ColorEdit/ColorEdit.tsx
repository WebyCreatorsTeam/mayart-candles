import { FC, SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { useCandleIdContext } from '../../Context/CandleContext'
import PopUp from '../../../../UI/PopUp/PopUp'
import Cookies from 'universal-cookie';
import { useLoaderData } from 'react-router-dom';
import { IColor } from '../../../NewCandle/NewColor/NewCandleColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { validateNewCandle } from '../../../../utils/validateNewCandle';
import { red } from '@mui/material/colors';

const cookies = new Cookies();

interface IColorEdit {
    colors: Array<IColor>
    setPopUpEditColors: Function
    setCandleColors: Function
}
const ColorEdit: FC<IColorEdit> = ({ colors, setPopUpEditColors, setCandleColors }) => {
    const { allCandleColors } = useLoaderData() as { allCandleColors: Array<IColor> }
    const [candlesColors, setCandlesColors] = useState<Array<IColor>>(allCandleColors)
    const id = useCandleIdContext()
    const [loader, setLoader] = useState<boolean>(false)
    const [editColor, setEditColor] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const [color, setColorName] = useState<string>("")
    const [hexCode, setHexCode] = useState<string>("")

    const handleChackIfExist = (colorname: string) => {
        if (colors.find((color: IColor) => color.color === colorname)) {
            setError("צבע כבר קיים בנר")
            return true
        } else {
            setError("")
            return false
        }
    }

    const handleAddColor = async (ev: SyntheticEvent) => {
        try {
            ev.preventDefault()
            const target = ev.target as typeof ev.target & {
                colorChoose: { value: string }
            }

            if (target.colorChoose.value === "בחר צבע") return alert("נא לבחור צבע")
            const color = candlesColors.find((color) => color.color === target.colorChoose.value)
            if (!handleChackIfExist(color!.color)) {
                const token = cookies.get('token')
                const { data: { continueWork, message, colors } } = await axios.post(`https://mayart-candles-api.vercel.app/candles/add-color?token=${token}`, { id, newColor: { color: color?.color, hexCode: color?.hexCode } })
                if (continueWork) {
                    alert(message)
                    setCandleColors(colors)
                    return setPopUpEditColors(false)
                }
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }
    }

    const handeValidColorsName = (ev: SyntheticEvent) => {
        const target = ev.target as HTMLInputElement;
        const { continueWork, message } = validateNewCandle(target.name, target.value)
        if (!continueWork) { return setError(message) } else { setError("") }
        return setColorName(target.value)
    }

    const handleValidColorCode = (ev: SyntheticEvent) => {
        const target = ev.target as HTMLInputElement;
        return setHexCode(target.value)
    }

    const handleAddColorToArrColor = async (ev: SyntheticEvent) => {
        try {
            setLoader(true)
            ev.preventDefault()
            if (color.length === 0) { return setError("נא לרשום שם הצבע") } else { setError("") }
            if (hexCode.length === 0) { return setError("נא לבחור צבע") } else { setError("") }
            const token = cookies.get('token')
            const { data: { continueWork, message, newColor } } = await axios.post(`https://mayart-candles-api.vercel.app/colors/save-color?token=${token}`, { color, hexCode })
            if (!continueWork) return alert(message)
            setCandlesColors([...candlesColors, newColor])
            setColorName("")
            setHexCode("")
            return alert(message)
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }
    }

    const handleDeleteColorFromArray = async (id: string | undefined) => {
        try {
            setLoader(true)
            const token = cookies.get('token')
            const { data: { continueWork, message } } = await axios.delete(`https://mayart-candles-api.vercel.app/colors/delete-color?token=${token}`, { data: { id } })
            if (continueWork) {
                setCandlesColors(candlesColors.filter((color) => color._id !== id))
                return alert(message)
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }
    }

    return (
        <PopUp >
            {error && <div className="error">{error}</div>}
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
                            <form onSubmit={handleAddColorToArrColor}>
                                <div>
                                    <div>
                                        <label htmlFor="color">שם הצבע:</label>
                                    </div>
                                    <div className='colorDisplay__form-section--color-name'>
                                        <input type="text" id="color" name="color" onChange={handeValidColorsName} />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="hexCode">צבע של מוצר:</label>
                                    </div>
                                    <div className='colorDisplay__form-section--color-hex'>
                                        <input type="color" id="hexCode" name="hexCode" onChange={handleValidColorCode} />
                                    </div>
                                </div>
                                <button
                                    type='submit'
                                    className={loader ? "action-loading" : "agree-btn"}

                                >הוסף צבע</button>
                            </form>
                            <div className="candleAddPage">
                                <div className='colorDisplay__colorsList'>
                                    {candlesColors.map((color, index) => (
                                        <div key={index} className='colorDisplay__colorsList--color-item'>
                                            <div key={index} style={{ backgroundColor: color.hexCode }}>{color.color}</div>
                                            <button onClick={() => handleDeleteColorFromArray(color!._id)}><DeleteOutlineIcon fontSize="large" sx={{ color: red[700] }} /></button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>)
                        :
                        (<>
                            <h1>הוספת צבע</h1>
                            <form onSubmit={handleAddColor} style={{ display: 'flex', flexDirection: 'row' }}>
                                <select defaultValue="בחר צבע" name="colorChoose">
                                    <option selected disabled defaultValue="בחר צבע">בחר צבע</option>
                                    {candlesColors.map((color, index) => (
                                        <option key={index} defaultValue={color.color} style={{ backgroundColor: color.hexCode }}>
                                            {color.color}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    type='submit'
                                    className={loader ? "action-loading" : "agree-btn"}
                                    // style={{margin: "15px 0"}}
                                >הוסף צבע לנר</button>
                            </form>
                        </>)}
            </div>
            <button
                className={loader ? "action-loading" : "cancel-btn"}
                onClick={() => {
                    setPopUpEditColors(false)
                }}
            >בטל</button>
        </PopUp >
    )
}

export default ColorEdit