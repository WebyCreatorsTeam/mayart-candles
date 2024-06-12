import { FC, useState } from 'react'

interface ICandleColor {
    colors: [{ color: string, hexCode: string }]
}

const CandleColor: FC<ICandleColor> = ({ colors }) => {
    const [choosenColor, setChoosenColor] = useState<string>("")

    return (
        <section className='candleItem__colors'>
            צבע: <p>{choosenColor}</p>
            {colors.map(clr => (
                <button
                    onClick={() => { setChoosenColor(clr.color) }}
                    title={clr.color}
                    style={{ backgroundColor: `#${clr.hexCode}` }}></button>
            ))}
            <button>עריכת צבע</button>
        </section>
    )
}

export default CandleColor