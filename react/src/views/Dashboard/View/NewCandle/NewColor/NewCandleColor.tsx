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
import AddNewColor from './AddNewColor';
import DeleteColor from './DeleteColor';

export interface INewCandleProps {
    setNewCandle: Function
}

export interface IColor {
    color: string,
    hexCode: string
    _id?: string
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
    const [showAddColor, setShawAddColor] = useState<boolean>(false)
    const [showDeleteColor, setDeleteColor] = useState<boolean>(false)

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
            return alert(message)
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
            setOpenPopup(false)
        }
    }

    const handleAddColor = (ev: SyntheticEvent) => {
        ev.preventDefault()
        const target = ev.target as typeof ev.target & {
            colorChoose: { value: string }
        }

        if(target.colorChoose.value === "בחר צבע") return alert("נא לבחור צבע")
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

    const handleDeleteColorFromArray = async (id: string | undefined) => {
        try {
            const token = cookies.get('token')
            const { data: { continueWork, message } } = await axios.delete(`https://mayart-candles-api.vercel.app/colors/delete-color?token=${token}`, { data: { id } })
            if (continueWork) {
                setAllColorsOfCandles(allColorsOfCandles.filter((color) => color._id !== id))
                return alert(message)
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
            setOpenPopup(false)
        }
    }

    return (
        <section className='colorDisplay'>
            <div className='label-error-text-display'>
                <h3>צבע המוצר (חייב לכלול לפחות צבע אחד)*:</h3>
                <ErrorMessega errorText={error} />
            </div>
            <section>
                <Suspense fallback={<h1 className="no_data_text">בטעינה...</h1>}>
                    <Await resolve={colorsArray}>
                        <form onSubmit={handleAddColor}>
                            <button type="button"
                                onClick={() => setOpenPopup(true)}
                            ><EditIcon color="primary" /></button>
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
                        <h2>עריכת צבעים</h2>
                        <div className="aboutDash__editTitle--editWindow--btns">
                            <button
                                onClick={() => {
                                    setShawAddColor(true)
                                    setDeleteColor(false)
                                }}
                                className={`loginRegBtn ${loader ? "form-btn_disable" : "form-btn_active"}`}
                            >הוספת צבע חדש</button>
                            <button
                                onClick={() => {
                                    setShawAddColor(false)
                                    setDeleteColor(true)
                                }}
                                className={`loginRegBtn ${loader ? "form-btn_disable" : "form-btn_active"}`}
                            >מחיקת צבע</button>
                        </div>
                        {showAddColor && (<AddNewColor
                            handeValidColorsName={handeValidColorsName}
                            handleValidColorCode={handleValidColorCode}
                            loader={loader}
                            handleAddColorToArrColor={handleAddColorToArrColor}
                        />
                        )}
                        {showDeleteColor && (
                            <DeleteColor
                                allColorsOfCandles={allColorsOfCandles}
                                handleDeleteColorFromArray={handleDeleteColorFromArray}
                            />
                        )}
                        <button
                            type='button'
                            className={loader ? "action-loading" : "cancel-btn"}
                            onClick={() => setOpenPopup(false)}
                        >סגירת חלון</button>
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