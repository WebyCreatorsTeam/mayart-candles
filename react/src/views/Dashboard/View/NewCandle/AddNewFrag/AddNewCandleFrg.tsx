import { FC, SyntheticEvent, useState } from 'react'
import { INewCandleProps } from '../NewColor/NewCandleColor'
import { ICandles } from '../../../MainDashboard'
import { validateNewCandle } from '../../../utils/validateNewCandle'
import ErrorMessega from '../../../UI/ErrorMessega'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { red } from '@mui/material/colors';

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
        <section className='fragDisplay'>
            <div className='label-error-text-display'>
                <h3>ריח של מוצר (חייב לכלול לפחות ריח אחד)*</h3>
                <ErrorMessega errorText={error} />
            </div>
            <section>
                <form onSubmit={handleAddColor} className='fragDisplay__form-section'>
                    <div>
                        <label htmlFor="fragrance">שם הריח:</label>
                    </div>
                    <div>
                        <input type="text" id="fragrance" name="fragrance" onChange={handeValidColorsFrag} />
                    </div>
                    <button type='submit' className='agree-btn'>הוסף ריח</button>
                </form>
                <div>
                    {fragrances.length === 0 && <p>אין ריחות שנבחרו</p>}
                    {fragrances.length > 0 && <p>ריחות שנבחרו:</p>}
                    <div className='fragDisplay__fragranceList'>
                        {fragrances.map((clr: string, idx: number) => (
                            <div key={idx} className='fragDisplay__fragranceList--frag-item'>
                                <div key={idx}>{clr}</div>
                                <button onClick={() => handleDeleteFrag(idx)}><DeleteOutlineIcon fontSize="large" sx={{ color: red[700] }} /></button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default AddNewCandleFrg