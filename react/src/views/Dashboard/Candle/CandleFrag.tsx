import { FC, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import FragEdit from './FragEdit/FragEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';
import { useCandleIdContext } from './Context/CandleContext';

interface ICandleFrag {
    fragrances: [string]
}
const CandleFrag: FC<ICandleFrag> = ({ fragrances }) => {
    const [loader, setLoader] = useState<boolean>(false)
    const id = useCandleIdContext()
    const [popUpEditFrag, setPopUpEditFrag] = useState<boolean>(false)
    const [allFragrances, setAllFragrances] = useState<[string]>(fragrances)

    const handleDeleteFragColor = async (frg: string) => {
        try {
            setLoader(true)
            const { data: { continueWork, message, fragrances } } = await axios.delete("http://localhost:7575/candles/remove-frag", { data: { id, frg } })
            if (continueWork) {
                alert(message)
                return setAllFragrances(fragrances)
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }
    }

    return (
        <section className='candleItem__fragr'>
            ריח:
            {allFragrances.map((frg, idx) => (
                <div
                    className='candleItem__fragr--item'
                    key={idx}
                >{frg}<button
                    disabled={loader}
                    title='מחק צבע מהרשימה'
                    onClick={() => handleDeleteFragColor(frg)}
                ><DeleteOutlineIcon fontSize="large" /></button></div>
            ))}
            <button onClick={() => setPopUpEditFrag(true)}><EditIcon color="primary" /></button>
            {popUpEditFrag && (<FragEdit setPopUpEditFrag={setPopUpEditFrag} setAllFragrances={setAllFragrances} />)}
        </section>
    )
}

export default CandleFrag