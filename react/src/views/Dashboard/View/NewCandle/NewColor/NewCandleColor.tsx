import { FC, Suspense, SyntheticEvent, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { red } from '@mui/material/colors';
import { ICandles } from '../../../MainDashboard';
import { validateNewCandle } from '../../../utils/validateNewCandle';
import ErrorMessega from '../../../UI/ErrorMessega';
import axios from 'axios';
import { Await, useLoaderData } from 'react-router-dom';
import PopUp from '../../../UI/PopUp/PopUp';
import EditIcon from '@mui/icons-material/Edit';
import Cookies from 'universal-cookie';

export interface INewCandleProps {
    setNewCandle: Function
}

interface IColor {
    color: string,
    hexCode: string
}
const NewCandleColor: FC<INewCandleProps> = ({ setNewCandle }) => {
    const cookies = new Cookies();
    const { colorsArray }: any = useLoaderData() as { admins: Array<IColor> };
    const [allColorsOfCandles, setAllColorsOfCandles] = useState<Array<IColor>>(colorsArray)
    const [loader, setLoader] = useState<boolean>(false)
    const [openPopup, setOpenPopup] = useState<boolean>(false)
    const [color, setColorName] = useState<string>("")
    const [hexCode, setHexCode] = useState<string>("")
    const [colors, setColors] = useState<Array<{ color: string, hexCode: string }>>([])
    const [error, setError] = useState<string>("")

    const handleChackIfExist = (hexCode: string) => {
        if (colors.find((color: IColor) => color.hexCode === hexCode)) {
            setError("צבע כבר קיים בנר")
            return true
        } else {
            setError("")
            return false
        }
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
            setAllColorsOfCandles([...allColorsOfCandles, newColor])
            setColorName("")
            setHexCode("")
            setOpenPopup(false)
            return alert(message)
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }
    }

    const handleAddColor = (ev: SyntheticEvent) => {
        ev.preventDefault()
        const target = ev.target as typeof ev.target & {
            colorChoose: { value: string }
        }

        const color = allColorsOfCandles.find((color) => color.color === target.colorChoose.value)
        if (!handleChackIfExist(color!.hexCode)) {
            setColors([...colors, { color: color!.color, hexCode: color!.hexCode }])
            return setNewCandle((candle: ICandles) => { return { ...candle, colors: [...colors, { color: color?.color, hexCode: color?.hexCode }] } })
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

    const handleDeleteColor = (indx: number) => {
        setNewCandle((candle: ICandles) => { return { ...candle, colors: [...colors.filter((color, index) => index !== indx)] } })
        return setColors(colors.filter((color, index) => index !== indx))
    }

    return (
        <section className='colorDisplay'>
            <div className='label-error-text-display'>
                <h3>צבע המוצר (חייב לכלול לפחות צבע אחד)*:</h3>
                <ErrorMessega errorText={error} />
            </div>
            <section>
                <Suspense fallback={<h1 className="no_data_text">Loading...</h1>}>
                    <Await resolve={colorsArray}>
                        <button
                            onClick={() => setOpenPopup(true)}
                        ><EditIcon color="primary" /></button>
                        <form onSubmit={handleAddColor}>
                            <select defaultValue="בחר צבע" name="colorChoose">
                                <option selected disabled defaultValue="בחר צבע">בחר צבע</option>
                                {allColorsOfCandles.map((color, index) => (
                                    <option key={index} defaultValue={color.color} style={{ backgroundColor: color.hexCode }}>
                                        {color.color}
                                    </option>
                                ))}
                            </select>
                            <button type='submit'>הוסף צבע לנר</button>
                        </form>
                    </Await>
                </Suspense>
                {openPopup && (
                    <PopUp>
                        <form onSubmit={handleAddColor} className='colorDisplay__form-section'>
                            <h2>הוספת צבע חדש</h2>
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
                            <div className="aboutDash__editTitle--editWindow--btns">
                                <button
                                    type='submit'
                                    className={loader ? "action-loading" : "agree-btn"}
                                    onClick={handleAddColorToArrColor}
                                >הוסף צבע</button>
                                <button
                                    type='button'
                                    className={loader ? "action-loading" : "cancel-btn"}
                                    onClick={() => setOpenPopup(false)}
                                >בטל</button>
                            </div>
                        </form>
                    </PopUp>)}
                <div>
                    {colors.length === 0 && <p>אין צבעים שנבחרו</p>}
                    {colors.length > 0 && <p>צבעים שנבחרו:</p>}
                    <div className='colorDisplay__colorsList'>
                        {colors.map((clr: { color: string, hexCode: string }, index: number) => (
                            <div key={index} className='colorDisplay__colorsList--color-item'>
                                <div key={index} style={{ backgroundColor: clr.hexCode }}>{clr.color}</div>
                                <button onClick={() => handleDeleteColor(index)}><DeleteOutlineIcon fontSize="large" sx={{ color: red[700] }} /></button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default NewCandleColor

export const getAllColors = async () => {
    const { data: { continueWork, colors } } = await axios.get("https://mayart-candles-api.vercel.app/colors/get-colors")
    if (continueWork) return colors
    return alert("שגיאה בטעינת הצבעים")
}