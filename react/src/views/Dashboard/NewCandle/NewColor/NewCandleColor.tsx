import { FC, SyntheticEvent, useState } from 'react'
import { validateNewCandle } from '../../utils/validateNewCandle'
import { ICandles } from '../../MainDashboard'

export interface INewCandleProps {
    setNewCandle: Function
}
const NewCandleColor: FC<INewCandleProps> = ({ setNewCandle }) => {
    const [color, setColorName] = useState<string>("")
    const [hexCode, setHexCode] = useState<string>("")
    const [colors, setColors] = useState<Array<{ color: string, hexCode: string }>>([])
    const [error, setError] = useState<string>("")

    const handleAddColor = (ev: SyntheticEvent) => {
        ev.preventDefault()
        if (color.length === 0) { return setError("נא לרשום שם הצבע") } else { setError("") }
        if (hexCode.length === 0) { return setError("נא לבחור צבע") } else { setError("") }
        setColors([...colors, { color, hexCode }])
        setColorName("")
        setHexCode("")
        return setNewCandle((candle: ICandles) => { return { ...candle, colors: [...colors, { color, hexCode }] } })
    }

    const handeValidColorsName = (ev: SyntheticEvent) => {
        const target = ev.target as HTMLInputElement;
        const { continueWork, message } = validateNewCandle(target.name, target.value)
        if (!continueWork) { return setError(message) } else { setError("") }
        return setColorName(target.value)
    }

    const handleValidColorCode = (ev: SyntheticEvent) => {
        const target = ev.target as HTMLInputElement;
        return setHexCode(target.value)
    }

    return (
        <section className='colorDisplay'>
            <h3>צבע:</h3>
            <section> 
                {error && <p>{error}</p>}
                <form onSubmit={handleAddColor}>
                    <label htmlFor="color">שם הצבע:</label>
                    <input type="text" id="color" name="color" onChange={handeValidColorsName} />
                    <label htmlFor="hexCode">צבע של מוצר (חייב לכלול לפחות צבע אחד)*:</label>
                    <input type="color" id="hexCode" name="hexCode" onChange={handleValidColorCode} />
                    <button type='submit'>הוסף צבע</button>
                </form>
                <div>{colors.map((clr: { color: string, hexCode: string }, index: number) => (
                    <div key={index} style={{ backgroundColor: clr.hexCode }}>{clr.color}</div>
                ))}</div>
            </section>
        </section>
    )
}

export default NewCandleColor