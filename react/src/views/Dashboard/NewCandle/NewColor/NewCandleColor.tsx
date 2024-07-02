import { FC, SyntheticEvent, useState } from 'react'
import { validateNewCandle } from '../../utils/validateNewCandle'
import { ICandles } from '../../MainDashboard'
import ErrorMessega from '../../UI/ErrorMessega'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { red } from '@mui/material/colors';
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

    const handleDeleteColor = (indx: number) => {
        return setColors(colors.filter((color, index) => index !== indx))
    }

    return (
        <section className='colorDisplay'>
            <div className='label-error-text-display'>
                <h3>צבע המוצר (חייב לכלול לפחות צבע אחד)*:</h3>
                <ErrorMessega errorText={error} />
            </div>
            <section>
                <form onSubmit={handleAddColor} className='colorDisplay__form-section'>
                    <div>
                        <div>
                            <label htmlFor="color">שם הצבע:</label>
                        </div>
                        <div className='colorDisplay__form-section--color-name'>
                            <input type="text" id="color" name="color" onChange={handeValidColorsName} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="hexCode">צבע של מוצר :</label>
                        </div>
                        <div className='colorDisplay__form-section--color-hex'>
                            <input type="color" id="hexCode" name="hexCode" onChange={handleValidColorCode} />
                        </div>
                    </div>
                    <button type='submit' className='agree-btn'>הוסף צבע</button>
                </form>
                <div >
                    {colors.length > 0 && <p>צבעים קיימים:</p>}
                    <div className='colorDisplay__colorsList'>
                        {colors.map((clr: { color: string, hexCode: string }, index: number) => (
                            <div key={index} className='colorDisplay__colorsList--color-item'>
                                <div key={index} style={{ backgroundColor: clr.hexCode }}>{clr.color}</div>
                                <button onClick={() => handleDeleteColor(index)}><DeleteOutlineIcon fontSize="large" sx={{ color: red[700] }} /></button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default NewCandleColor