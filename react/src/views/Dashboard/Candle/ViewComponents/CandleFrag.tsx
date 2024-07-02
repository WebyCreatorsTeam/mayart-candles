import { FC, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import FragEdit from '../EditComponents/FragEdit/FragEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';
import { useCandleIdContext } from '../Context/CandleContext';
import { red } from '@mui/material/colors';
import { BASE_API } from '../../../../utils/api-connect';

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
            const confirm = window.confirm(`האם אתה בטוח שברצונך למחוק את הריח ${frg}?`)
            if (!confirm) return;
            setLoader(true)
            const token = sessionStorage.getItem('token')
            const { data: { continueWork, message, fragrances } } = await axios.delete(`${BASE_API}/candles/remove-frag?token=${token}`, { data: { id, frg } })
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
                >{frg}
                <button
                    disabled={loader}
                    title='מחק ריח מהרשימה'
                    onClick={() => handleDeleteFragColor(frg)}
                ><DeleteOutlineIcon fontSize="large" sx={{ color: red[700] }}/></button></div>
            ))}
            <button onClick={() => setPopUpEditFrag(true)}><EditIcon color="primary" /></button>
            {popUpEditFrag && (<FragEdit
                setPopUpEditFrag={setPopUpEditFrag}
                setAllFragrances={setAllFragrances}
                allFragrances={allFragrances} />)}
        </section>
    )
}

export default CandleFrag