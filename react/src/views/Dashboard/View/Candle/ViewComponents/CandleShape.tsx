import { FC, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import ShapeEdit from '../EditComponents/ShapeEdit/ShapeEdit';

interface ICandleShape {
    shape: string
}

const CandleShape: FC<ICandleShape> = ({ shape }) => {
    const [popUpCandleShape, setPopUpCandleShape] = useState<boolean>(false)
    const [candleShape, setCandleShape] = useState<string>(shape)

    return (
        <section className='candleItem__candleName'>
            {!popUpCandleShape && (<div className='candleItem__editInfo'>
                <p>צורה:</p>
                <p>{candleShape}</p>
                <button onClick={() => setPopUpCandleShape(true)}><EditIcon color="primary"/></button>
            </div>)}
            {popUpCandleShape && (
                <ShapeEdit
                    shape={shape} candleShape={candleShape} setCandleShape={setCandleShape} setPopUpCandleShape={setPopUpCandleShape}/>
            )}
        </section>
    )
}

export default CandleShape