import { FC, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import ColorEdit from '../EditComponents/ColorEdit/ColorEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useCandleIdContext } from '../Context/CandleContext';
import axios from 'axios';
import { red } from '@mui/material/colors';

interface ICandleColor {
    colors: [{ color: string, hexCode: string, _id?: string }]
}

const CandleColor: FC<ICandleColor> = ({ colors }) => {
    const [loader, setLoader] = useState<boolean>(false)
    const [popUpEditColors, setPopUpEditColors] = useState<boolean>(false)
    const [candleColors, setCandleColors] = useState<[{ color: string, hexCode: string, _id?: string }]>(colors)
    const id = useCandleIdContext()

    const handleDeleteColor = async (colorId: string) => {
        try {
            const confirm = window.confirm("למוק את הצבע?")
            if(!confirm ) return;
            setLoader(true)
            const token = sessionStorage.getItem('token')
            const { data: { continueWork, message, colors } } = await axios.delete(`https://mayart-candles-api.vercel.app/candles/delete-color?token=${token}`, { data: { id, colorId } })
            if (continueWork) {
                alert(message)
                setCandleColors(colors)
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }
    }

    return (
        <section className='candleItem__colors'>
            <p>צבע:</p>
            {candleColors.map(clr => (
                <div
                    className='candleItem__colors--item'
                    key={clr._id}
                    title={clr.color}
                    style={{ backgroundColor: clr.hexCode }}>
                    <button
                        disabled={loader}
                        title='מחק צבע מהרשימה'
                        onClick={() => handleDeleteColor(clr._id!)}
                    ><DeleteOutlineIcon fontSize="large" sx={{ color: red[700] }} /></button>
                </div>
            ))}
            <button
                onClick={() => setPopUpEditColors(true)}
            ><EditIcon color="primary" /></button>
            {popUpEditColors && (<ColorEdit setPopUpEditColors={setPopUpEditColors} setCandleColors={setCandleColors} />)}
        </section >
    )
}

export default CandleColor