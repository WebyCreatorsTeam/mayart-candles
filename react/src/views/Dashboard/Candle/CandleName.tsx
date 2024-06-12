import React, { FC, useState } from 'react'
import NameEdit from './NameEdit/NameEdit'
import EditIcon from '@mui/icons-material/Edit';

interface ICandleName {
    name: string
}
const CandleName: FC<ICandleName> = ({ name }) => {
    const [popUpNameEdit, setPopUpNameEdit] = useState<boolean>(false)
    const [candleName, setCandleName] = useState<string>(name)

    return (
        <section className='candleItem__candleName'>
            {!popUpNameEdit && (<>
                <h2>{candleName}</h2>
                <button onClick={() => setPopUpNameEdit(true)}><EditIcon color="primary"/></button>
            </>)}
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