import React, { FC } from 'react'

interface ICandleDesc {
    description: string
}
const CandleDesc: FC<ICandleDesc> = ({description}) => {
    return (
        <section>
            <h3>תיאור מוצר</h3>
            <p>{description}</p>
            <button>עריכת תיאור מוצר</button>
        </section>
    )
}

export default CandleDesc