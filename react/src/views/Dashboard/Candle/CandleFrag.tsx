import { FC, useState } from 'react'

interface ICandleFrag {
    fragrances: [string]
}
const CandleFrag: FC<ICandleFrag> = ({ fragrances }) => {
    const [choosenFrag, setChoosenFrag] = useState<string>("")
    return (
        <section className='candleItem__fragr'>
            ריח: {choosenFrag}
            {fragrances.map(frg => (
                <button
                    onClick={() => { setChoosenFrag(frg) }}
                >{frg}</button>
            ))}
            <button>עריכת ריח</button>
        </section>
    )
}

export default CandleFrag