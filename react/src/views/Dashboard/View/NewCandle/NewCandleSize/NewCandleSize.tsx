import { FC, SyntheticEvent } from 'react'
import { ICandles } from '../../../MainDashboard';
// import { ICandles } from '../../MainDashboard';

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
            <h3>נא לבחור גודל הנר*</h3>
            <select onChange={handleChooseType} className='selectDisplay'>
                <option defaultValue="" selected disabled>גודל הנר</option>
                <option defaultValue="נרות גדולים">נרות גדולים</option>
                <option defaultValue="נרות בינוניים">נרות בינוניים</option>
                <option defaultValue="נרות קטנים">נרות קטנים</option>
            </select>
        </section>
    )
}

export default NewCandleSize