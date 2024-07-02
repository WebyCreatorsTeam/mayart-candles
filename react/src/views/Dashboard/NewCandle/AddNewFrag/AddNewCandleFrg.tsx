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

    const handleDeleteFrag = (indx: number) => {
        return setFragrances(fragrances.filter((fragrances, index) => index !== indx))
    }

    return (
        <section className='flagDisplay'>
            <div className='label-error-text-display'>
                <h3>ריח של מוצר (חייב לכלול לפחות ריח אחד)*</h3>
            </div>
            {error && <p>{error}</p>}
            <form onSubmit={handleAddColor} className='flagDisplay__form-section'>
                <label htmlFor="fragrance">שם הריח:</label>
                <div>
                    <input type="text" id="fragrance" name="fragrance" onChange={handeValidColorsFrag} />
                </div>
                <button type='submit' className='agree-btn'>הוסף ריח</button>
            </form>
            <div>
                {fragrances.map((clr: string, index: number) => (
                    <div>
                        <div key={index}>{clr}</div>
                        <button onClick={() => handleDeleteFrag(index)}>Del</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AddNewCandleFrg