import { FC, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import ColorEdit from './ColorEdit/ColorEdit';

interface ICandleColor {
    colors: [{ color: string, hexCode: string, _id: string }]
}

const CandleColor: FC<ICandleColor> = ({ colors }) => {
    const [popUpEditColors, setPopUpEditColors] = useState<boolean>(false)
    const [candleColors, setCandleColors] = useState<[{color: string, hexCode: string, _id: string}]>(colors)

    return (
        <section className='candleItem__colors'>
            צבע:
            {candleColors.map(clr => (
                <button
                    key={clr._id}
                    title={clr.color}
                    style={{ backgroundColor: clr.hexCode }}></button>
            ))}
            <button
                onClick={() => setPopUpEditColors(true)}
            ><EditIcon color="primary" /></button>
            {popUpEditColors && (<ColorEdit setPopUpEditColors={setPopUpEditColors} setCandleColors={setCandleColors}/>)}
        </section >
    )
}

export default CandleColor