import { FC, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';

interface ICandleFrag {
    fragrances: [string]
}
const CandleFrag: FC<ICandleFrag> = ({ fragrances }) => {
    return (
        <section className='candleItem__fragr'>
            ריח:
            {fragrances.map((frg, idx) => (
                <div
                    className='candleItem__fragr--item'
                    key={idx}
                >{frg}</div>
            ))}
            <button><EditIcon color="primary" /></button>
        </section>
    )
}

export default CandleFrag