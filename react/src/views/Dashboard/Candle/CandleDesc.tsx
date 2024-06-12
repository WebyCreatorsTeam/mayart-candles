import { FC, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DescEdit from './DescEdit/DescEdit';

interface ICandleDesc {
    description: string
}
const CandleDesc: FC<ICandleDesc> = ({ description }) => {
    const [popUpDescEdit, setPopUpDescEdit] = useState<boolean>(false)
    const [candleDesc, setCandleDesc] = useState<string>(description)

    return (
        <section className='candleItem__candleDesc'>
            <div className='candleItem__candleDesc--title'>
                <h3>תיאור מוצר</h3>
                {!popUpDescEdit && (
                    <button onClick={() => setPopUpDescEdit(true)}><EditIcon color="primary" /></button>
                )}
            </div>
            {!popUpDescEdit && (
                <p>{candleDesc}</p>
            )}
            {popUpDescEdit && (
                <DescEdit 
                description={description}
                candleDesc={candleDesc} 
                setCandleDesc={setCandleDesc}
                setPopUpDescEdit={setPopUpDescEdit}/>
            )}
        </section>
    )
}

export default CandleDesc