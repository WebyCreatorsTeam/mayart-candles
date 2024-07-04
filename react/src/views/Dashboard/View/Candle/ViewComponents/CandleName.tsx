import { FC, useState } from 'react'
import NameEdit from '../EditComponents/NameEdit/NameEdit'
import EditIcon from '@mui/icons-material/Edit';

interface ICandleName {
    name: string
}
const CandleName: FC<ICandleName> = ({ name }) => {
    const [popUpNameEdit, setPopUpNameEdit] = useState<boolean>(false)
    const [candleName, setCandleName] = useState<string>(name)

    return (
        <section className='candleItem__candleName'>
            {!popUpNameEdit && (<div className='candleItem__editInfo'>
                <h2>{candleName}</h2>
                <button onClick={() => setPopUpNameEdit(true)}><EditIcon color="primary"/></button>
            </div>)}
            {popUpNameEdit && (
                <NameEdit
                    name={name}
                    setCandleName={setCandleName}
                    candleName={candleName}
                    setPopUpNameEdit={setPopUpNameEdit} />
            )}
        </section>
    )
}

export default CandleName