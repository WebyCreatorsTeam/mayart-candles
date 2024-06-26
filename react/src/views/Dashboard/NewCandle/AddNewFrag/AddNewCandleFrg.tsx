import { FC, SyntheticEvent, useState } from 'react'
import { INewCandleProps } from '../NewColor/NewCandleColor'
import { validateNewCandle } from '../../utils/validateNewCandle'
import { ICandles } from '../../MainDashboard'

const AddNewCandleFrg: FC<INewCandleProps> = ({ setNewCandle }) => {
    const [fragrance, setFragrance] = useState<string>("")
    const [fragrances, setFragrances] = useState<Array<string>>([])
    const [error, setError] = useState<string>("")

    const handleAddColor = (ev: SyntheticEvent) => {
        ev.preventDefault()
        if (fragrance.length === 0) { return setError("שם הריח לא יכול להיות ריק") } else { setError("") }
        setFragrances([...fragrances, fragrance])
        setFragrance("")
        return setNewCandle((candle: ICandles) => { return { ...candle, fragrances: [...fragrances, fragrance] } })
    }

    const handeValidColorsFrag = (ev: SyntheticEvent) => {
        const target = ev.target as HTMLInputElement;
        const { continueWork, message } = validateNewCandle(target.name, target.value)
        if (!continueWork) { return setError(message) } else { setError("") }
        return setFragrance(target.value)
    }

    return (
        <section className='flagDisplay'> 
            {error && <p>{error}</p>}
            <form onSubmit={handleAddColor}>
                <label htmlFor="fragrance">ריח של מוצר (חייב לכלול לפחות ריח אחד)*:</label>
                <input type="text" id="fragrance" name="fragrance" onChange={handeValidColorsFrag}/>
                <button type='submit'>הוסף ריח</button>
            </form>
            <div>{fragrances.map((clr: string, index: number) => (
                    <div key={index}>{clr}</div>
                ))}</div>
        </section>
    )
}

export default AddNewCandleFrg