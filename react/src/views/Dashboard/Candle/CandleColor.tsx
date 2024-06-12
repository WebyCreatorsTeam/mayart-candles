import { FC, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import ColorEdit from './ColorEdit/ColorEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useCandleIdContext } from './Context/CandleContext';
import axios from 'axios';

interface ICandleColor {
    colors: [{ color: string, hexCode: string, _id: string }]
}

const CandleColor: FC<ICandleColor> = ({ colors }) => {
    const [loader, setLoader] = useState<boolean>(false)
    const [popUpEditColors, setPopUpEditColors] = useState<boolean>(false)
    const [candleColors, setCandleColors] = useState<[{ color: string, hexCode: string, _id: string }]>(colors)
    const id = useCandleIdContext()

    const handleDeleteColor = async (colorId: string) => {
        try {
            setLoader(true)
            const { data: { continueWork, message, colors } } = await axios.delete("http://localhost:7575/candles/delete-color", { data: { id, colorId } })
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
            צבע:
            {candleColors.map(clr => (
                <div
                    className='candleItem__colors--item'
                    key={clr._id}
                    title={clr.color}
                    style={{ backgroundColor: clr.hexCode }}>
                    <button
                        disabled={loader}
                        title='מחק צבע מהרשימה'
                        onClick={() => handleDeleteColor(clr._id)}
                    ><DeleteOutlineIcon fontSize="large" /></button>
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