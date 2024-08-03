import { FC, Suspense, SyntheticEvent, useState } from 'react'
import { INewCandleProps } from '../NewColor/NewCandleColor'
import { ICandles } from '../../../MainDashboard'
import { validateNewCandle } from '../../../utils/validateNewCandle'
import ErrorMessega from '../../../UI/ErrorMessega'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { red } from '@mui/material/colors';
import Cookies from 'universal-cookie'
import axios from 'axios'
import { Await, useLoaderData } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import PopUp from '../../../UI/PopUp/PopUp'
import AddNewFrag from './AddNewFrag'
import DeleteFrag from './DeleteColor'

export interface IFragrances {
    name: string
    _id?: string
}

const AddNewCandleFrg: FC<INewCandleProps> = ({ setNewCandle }) => {
    const cookies = new Cookies();
    const { fragsArray }: any = useLoaderData() as { fragsArray: Array<IFragrances> };
    const [allFragsOfCandles, setAllFragsOfCandles] = useState<Array<IFragrances>>(fragsArray)
    const [openPopup, setOpenPopup] = useState<boolean>(false)
    const [loader, setLoader] = useState<boolean>(false)
    const [fragrance, setFragrance] = useState<string>("")
    const [fragrances, setFragrances] = useState<Array<string>>([])
    const [error, setError] = useState<string>("")
    const [showAddFrag, setShawAddFrag] = useState<boolean>(false)
    const [showDeleteFrag, setDeleteFrag] = useState<boolean>(false)

    const handleChackIfExist = (fragName: string) => {
        if (fragrances.find((frag: string) => frag === fragName)) {
            setError("ריח כבר קיים בנר")
            return true
        } else {
            setError("")
            return false
        }
    }

    const handleAddFragToArrFrag = async (ev: SyntheticEvent) => {
        try {
            setLoader(true)
            ev.preventDefault()
            if (fragrance.length === 0) { return setError("נא לרשום שם הצבע") } else { setError("") }
            const token = cookies.get('token')
            const { data: { continueWork, message, newFrag } } = await axios.post(`https://mayart-candles-api.vercel.app/frags/save-frag?token=${token}`, { fragrance })
            if (!continueWork) return alert(message)
            setAllFragsOfCandles([...allFragsOfCandles, newFrag])
            return alert(message)
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
            setOpenPopup(false)
        }
    }


    const handleAddFrag = (ev: SyntheticEvent) => {
        ev.preventDefault()
        const target = ev.target as typeof ev.target & {
            fragChoose: { value: string }
        }
        if (target.fragChoose.value === "בחר ריח") return alert("נא לבחור ריח")
        const frag = allFragsOfCandles.find((frag) => frag.name === target.fragChoose.value)

        if (!handleChackIfExist(frag!.name)) {
            setFragrances([...fragrances, frag!.name])
            return setNewCandle((candle: ICandles) => { return { ...candle, fragrances: [...fragrances, frag!.name] } })
        }
    }

    const handeValidColorsFrag = (ev: SyntheticEvent) => {
        const target = ev.target as HTMLInputElement;
        const { continueWork, message } = validateNewCandle(target.name, target.value)
        if (!continueWork) { return setError(message) } else { setError("") }
        return setFragrance(target.value)
    }

    const handleDeleteFrag = (indx: number) => {
        setFragrances(fragrances.filter((fragrances, index) => index !== indx))
        return setNewCandle((candle: ICandles) => { return { ...candle, fragrances: [...fragrances.filter((fragrances, index) => index !== indx)] } })
    }

    const handleDeleteFragFromArray = async (id: string | undefined) => {
        try {
            const token = cookies.get('token')
            const { data: { continueWork, message } } = await axios.delete(`https://mayart-candles-api.vercel.app/frags/delete-frag?token=${token}`, { data: { id } })
            if (continueWork) {
                setAllFragsOfCandles(allFragsOfCandles.filter((frag) => frag._id !== id))
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
        <section className='fragDisplay'>
            <div className='label-error-text-display'>
                <h3>ריח של מוצר (חייב לכלול לפחות ריח אחד)*</h3>
                <ErrorMessega errorText={error} />
            </div>
            <section>
                <Suspense fallback={<h1 className="no_data_text">בטעינה...</h1>}>
                    <Await resolve={fragsArray}>
                        <form onSubmit={handleAddFrag}>
                            <button
                                type='button'
                                onClick={() => setOpenPopup(true)}
                            ><EditIcon color="primary" /></button>
                            <select defaultValue="בחר ריח" name="fragChoose">
                                <option value="בחר ריח">בחר ריח</option>
                                {allFragsOfCandles.map((frag: IFragrances, idx: number) => (
                                    <option key={idx} value={frag.name}>{frag.name}</option>
                                ))}
                            </select>
                            <button type='submit'>הוסף ריח לנר</button>
                        </form>
                    </Await>
                </Suspense>
                {openPopup && (
                    <PopUp>
                        <h2>עריכת ריחות</h2>
                        <div className="aboutDash__editTitle--editWindow--btns">
                            <button
                                onClick={() => {
                                    setShawAddFrag(true)
                                    setDeleteFrag(false)
                                }}
                                className={`loginRegBtn ${loader ? "form-btn_disable" : "form-btn_active"}`}
                            >הוספת ריח חדש</button>
                            <button
                                onClick={() => {
                                    setShawAddFrag(false)
                                    setDeleteFrag(true)
                                }}
                                className={`loginRegBtn ${loader ? "form-btn_disable" : "form-btn_active"}`}
                            >מחיקת ריח</button>
                        </div>
                        {showAddFrag && (
                            <AddNewFrag
                                handleAddFragToArrFrag={handleAddFragToArrFrag}
                                handeValidColorsFrag={handeValidColorsFrag}
                                loader={loader}
                            />
                        )}
                        {showDeleteFrag && (
                            <DeleteFrag
                                allFragsOfCandles={allFragsOfCandles}
                                handleDeleteFragFromArray={handleDeleteFragFromArray}
                            />
                        )}
                        <button
                            type='button'
                            className={loader ? "action-loading" : "cancel-btn"}
                            onClick={() => setOpenPopup(false)}
                        >סגירת חלון</button>
                    </PopUp>
                )}

                <div>
                    {fragrances.length === 0 && <p>אין ריחות שנבחרו</p>}
                    {fragrances.length > 0 && <p>ריחות שנבחרו:</p>}
                    <div className='fragDisplay__fragranceList'>
                        {fragrances.map((clr: string, idx: number) => (
                            <div key={idx} className='fragDisplay__fragranceList--frag-item'>
                                <div key={idx}>{clr}</div>
                                <button onClick={() => handleDeleteFrag(idx)}><DeleteOutlineIcon fontSize="large" sx={{ color: red[700] }} /></button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default AddNewCandleFrg;

export const getAllFrags = async () => {
    const { data: { continueWork, frags } } = await axios.get("https://mayart-candles-api.vercel.app/frags/get-frags")
    if (continueWork) return frags
    return alert("שגיאה בטעינת הצבעים")
}