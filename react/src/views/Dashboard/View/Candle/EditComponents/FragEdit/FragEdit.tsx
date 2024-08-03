import { FC, SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { useCandleIdContext } from '../../Context/CandleContext'
import PopUp from '../../../../UI/PopUp/PopUp'
import Cookies from 'universal-cookie';
import { IFragrances } from '../../../NewCandle/AddNewFrag/AddNewCandleFrg';
import { useLoaderData } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { red } from '@mui/material/colors';

const cookies = new Cookies();

interface IFragEdit {
    setPopUpEditFrag: Function
    setAllFragrances: Function
    allFragrances: [string]
}

const FragEdit: FC<IFragEdit> = ({ setPopUpEditFrag, setAllFragrances, allFragrances }) => {
    const { allCandleFrag } = useLoaderData() as { allCandleFrag: Array<IFragrances> }
    const [candlesFrags, setCandlesFrags] = useState<Array<IFragrances>>(allCandleFrag)
    const id = useCandleIdContext()
    const [loader, setLoader] = useState<boolean>(false)
    const [fragrance, setFragrance] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [editFrag, setEditFrag] = useState<boolean>(false)

    const handleChackIfExist = (fragName: string) => {
        if (allFragrances.find((frag: string) => frag === fragName)) {
            setError("ריח כבר קיים בנר")
            return true
        } else {
            setError("")
            return false
        }
    }

    const handleAddFrag = async (ev: SyntheticEvent) => {
        try {
            setLoader(true)
            ev.preventDefault()
            const target = ev.target as typeof ev.target & {
                fragChoose: { value: string }
            }
            if (target.fragChoose.value === "בחר ריח") return alert("נא לבחור ריח")
            const frag = candlesFrags.find((frag) => frag.name === target.fragChoose.value)

            if (!handleChackIfExist(frag!.name)) {
                const token = cookies.get('token')
                const { data: { continueWork, message, fragrances } } = await axios.post(`https://mayart-candles-api.vercel.app/candles/add-frag?token=${token}`, { id, newFrag: frag!.name })
                if (continueWork) {
                    alert(message)
                    setAllFragrances(fragrances)
                    return setPopUpEditFrag(false)
                }
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
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
            setCandlesFrags([...candlesFrags, newFrag])
            return alert(message)
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }
    }

    const handleDeleteFragFromArray = async (id: string | undefined) => {
        try {
            const token = cookies.get('token')
            const { data: { continueWork, message } } = await axios.delete(`https://mayart-candles-api.vercel.app/frags/delete-frag?token=${token}`, { data: { id } })
            if (continueWork) {
                setCandlesFrags(candlesFrags.filter((frag) => frag._id !== id))
                return alert(message)
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }
    }

    return (
        <PopUp>
            {error && <div className="error">{error}</div>}
            <button
                onClick={() => setEditFrag(!editFrag)}
                className={loader ? "form-btn_disable" : "form-btn_active"}>
                {editFrag ? "סגירת חלון עריכה" : "עריכת ריח"}
            </button>
            <div className='colorEdit'>
                {
                    editFrag ?
                        <>
                            <h1>עריכת ריח</h1>
                            <form onSubmit={handleAddFragToArrFrag}>
                                <label htmlFor='frag'>סוג ריח:</label>
                                <input id="frag" type='text' className='updateInput' onChange={(ev: any) => setFragrance(ev.target.value)} />
                                <div style={{ display: "flex", margin: "2% 0%" }}>
                                    <button
                                        type="submit"
                                        className={
                                            loader ? "action-loading" :
                                                fragrance.length > 0 ? "agree-btn" : "action-loading"
                                        }>
                                        {loader ? "מעדכן את הפרטים" : "הוסף ריח"}
                                    </button>
                                </div>
                            </form>
                            <div className="candleAddPage">
                                <div className='colorDisplay__colorsList'>
                                    {candlesFrags.map((frag, index) => (
                                        <div key={index} className='fragDisplay__fragranceList--frag-item'>
                                            <div key={index}>{frag.name}</div>
                                            <button onClick={() => handleDeleteFragFromArray(frag!._id)}><DeleteOutlineIcon fontSize="large" sx={{ color: red[700] }} /></button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <h1>הוספת ריח</h1>
                            <form onSubmit={handleAddFrag} style={{ display: 'flex', flexDirection: 'row' }}>
                                <select defaultValue="בחר צבע" name="fragChoose">
                                    <option selected disabled defaultValue="בחר צבע">בחר צבע</option>
                                    {candlesFrags.map((frag, index) => (
                                        <option key={index} defaultValue={frag.name}>
                                            {frag.name}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    type='submit'
                                    className={loader ? "action-loading" : "agree-btn"}
                                >הוסף ריח לנר</button>
                            </form>
                        </>
                }
                <button
                    className={loader ? "action-loading" : "cancel-btn"}
                    onClick={() => {
                        setPopUpEditFrag(false)
                        setFragrance("")
                    }}
                >בטל</button>
            </div>
        </PopUp>
    )
}

export default FragEdit