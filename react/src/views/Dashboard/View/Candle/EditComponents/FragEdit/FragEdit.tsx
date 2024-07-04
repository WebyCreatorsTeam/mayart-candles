import { FC, useState } from 'react'
import axios from 'axios'
import { useCandleIdContext } from '../../Context/CandleContext'
import { BASE_API } from '../../../../../../utils/api-connect'
import PopUp from '../../../../UI/PopUp/PopUp'

interface IFragEdit {
    setPopUpEditFrag: Function
    setAllFragrances: Function
    allFragrances: [string]
}

const FragEdit: FC<IFragEdit> = ({ setPopUpEditFrag, setAllFragrances, allFragrances }) => {
    const id = useCandleIdContext()
    const [loader, setLoader] = useState<boolean>(false)
    const [newFrag, setNewFag] = useState<string>("")

    const handleAddFrag = async () => {
        try {
            setLoader(true)
            const filterFrag = allFragrances.filter(fgr => fgr === newFrag)
            if (filterFrag.length > 0) return alert(`ריח ${newFrag} כבר קיים ברשימה`)
            const token = sessionStorage.getItem('token')
            const { data: { continueWork, message, fragrances } } = await axios.post(`https://mayart-candles-api.vercel.app/candles/add-frag?token=${token}`, { id, newFrag })
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
            <div style={{ display: "flex", margin: "2% 0%" }}>
                <button
                    onClick={handleAddFrag}
                    className={
                        loader ? "action-loading" : 
                        newFrag.length > 0 ? "agree-btn" : "action-loading"
                        }>
                    {loader ? "מעדכן את הפרטים" : "הוסף צבע"}
                </button>
                <button
                    className={loader ? "action-loading" : "cancel-btn"}
                    onClick={() => {
                        setPopUpEditFrag(false)
                        setNewFag("")
                    }}
                >בטל</button>
            </div>
        </PopUp>
    )
}

export default FragEdit