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
            <h3>
                נא לבחור קטגורית הנר*
            </h3>
            <select onChange={handleChooseType} className='selectDisplay'>
                <option defaultValue="" selected disabled>קטגורית הנר</option>
                {categories.map((ctg: any) => (
                    <option key={ctg._id} defaultValue={ctg.opt}>{ctg.opt}</option>
                ))}
            </select>
        </section>
    )
}

export default NewCandleType