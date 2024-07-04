import { FC, SyntheticEvent } from 'react'
import { ICategories } from '../../Categories/CategoriesDashboard'
import { ICandles } from '../../../MainDashboard'
// import { ICandles } from '../../MainDashboard'

interface INewCandleType {
    categories: Array<ICategories>
    setNewCandle: Function
}
const NewCandleType: FC<INewCandleType> = ({ categories, setNewCandle }) => {

    const handleChooseType = (ev: SyntheticEvent) => {
        const target = ev.target as HTMLInputElement;
        setNewCandle((candle: ICandles) => { return { ...candle, type: target.value } })
    }

    return (
        <section>
            <label htmlFor="">נא לשייך לקטגורית את הנר. *חייב לבחור באחת האופציות:</label>
            <select onChange={handleChooseType}>
                {categories.map((ctg: any) => (
                    <option key={ctg._id} value={ctg.opt}>{ctg.opt}</option>
                ))}
            </select>
        </section>
    )
}

export default NewCandleType