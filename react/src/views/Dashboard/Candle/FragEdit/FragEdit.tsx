import React, { FC, useState } from 'react'
import PopUp from '../../UI/PopUp/PopUp'
import axios from 'axios'
import { useCandleIdContext } from '../Context/CandleContext'

interface IFragEdit {
    setPopUpEditFrag: Function
    setAllFragrances: Function
    allFragrances: [string]
}

const FragEdit: FC<IFragEdit> = ({ setPopUpEditFrag, setAllFragrances,allFragrances }) => {
    const id = useCandleIdContext()
    const [loader, setLoader] = useState<boolean>(false)
    const [newFrag, setNewFag] = useState<string>("")

    const handleAddFrag = async () => {
        try {
            setLoader(true)
            const filterFrag = allFragrances.filter(fgr => fgr === newFrag)
            if(filterFrag.length>0) return alert(`ריח ${newFrag} כבר קיים ברשימה`)
            const { data: { continueWork, message, fragrances } } = await axios.post("http://localhost:7575/candles/add-frag", { id, newFrag })
            if (continueWork) {
                alert(message)
                setAllFragrances(fragrances)
                return setPopUpEditFrag(false)
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }
    }
    return (
        <PopUp>
            <h1>הוספת ריח</h1>
            <label htmlFor='frag'>סוג ריח:</label>
            <input id="frag" type='text' className='updateInput' onChange={(ev: any) => setNewFag(ev.target.value)} />
            <button
                onClick={handleAddFrag}
                className={loader ? "unactiveBtn" : "actionBtn"}>
                {loader ? "מעדכן את הפרטים" : "הוסף צבע"}
            </button>
            <button
                className={loader ? "unactiveBtn" : "actionBtn"}
                onClick={() => {
                    setPopUpEditFrag(false)
                    setNewFag("")
                }}
            >בטל</button>
        </PopUp>
    )
}

export default FragEdit