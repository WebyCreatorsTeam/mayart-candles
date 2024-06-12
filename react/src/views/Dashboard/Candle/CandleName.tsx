import React, { FC } from 'react'

interface ICandleName {
    name: string
}
const CandleName: FC<ICandleName> = ({name}) => {
    return (
        <section>
            <h2>{name}</h2>
            <button>עריכת כותרת</button>
        </section>
    )
}

export default CandleName