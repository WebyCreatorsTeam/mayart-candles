import { FC, SyntheticEvent } from 'react'
import { ICandles } from '../../MainDashboard';

interface INewCandleSize {
    setNewCandle: Function
}
const NewCandleSize: FC<INewCandleSize> = ({ setNewCandle }) => {
    const handleChooseType = (ev: SyntheticEvent) => {
        const target = ev.target as HTMLInputElement;
        setNewCandle((candle: ICandles) => { return { ...candle, size: target.value } })
    }
    return (
        <section>
            <label htmlFor="">נא לשייך לקטגורית גודל הנר. *חייב לבחור באחת האופציות:</label>
            <select onChange={handleChooseType}>
                <option value="נרות גדולים">נרות גדולים</option>
                <option value="נרות בינוניים">נרות בינוניים</option>
                <option value="נרות קטנים">נרות קטנים</option>
            </select>
        </section>
    )
}

export default NewCandleSize