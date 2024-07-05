import { FC, SyntheticEvent, useState } from 'react'
import { IPrompCandleEdit } from '../NameCandle/NewNameCandle'
import { validateNewCandle } from '../../../utils/validateNewCandle'
import ErrorMessega from '../../../UI/ErrorMessega'
// import { validateNewCandle } from '../../utils/validateNewCandle'
// import ErrorMessega from '../../UI/ErrorMessega'

const NewCandlePrice: FC<IPrompCandleEdit> = ({ hendleFillInput }) => {
    const [price, setPrice] = useState<number>(0)
    const [error, setError] = useState<string>("")

    const handleValidPrice = (ev: SyntheticEvent) => {
        let target = ev.target as HTMLInputElement;
        const { continueWork, message } = validateNewCandle(target.name, target.value)
        if (!continueWork) { return setError(message) } else { setError("") }
        hendleFillInput(target.name, target.value)
        setPrice(Number(target.value))
    }

    const handleValidSalePrice = (ev: SyntheticEvent) => {
        let target = ev.target as HTMLInputElement;
        if (Number(target.value) > price || Number(target.value) === price) return setError("ההנחה לא יכולה להיות יותר ממחחיר המוצר או שווה למחיר המקורי")
        hendleFillInput(target.name, target.value)
        return setError("")
    }

    return (
        <section className='cost-section'>
            <div className='label-error-text-display'>
                <h2>עלויות</h2>
                <ErrorMessega errorText={error} />
            </div>
            <section className='costsDisplay'>
                <div>
                    <div>
                        <label htmlFor="price">מחיר המוצר*:</label>
                    </div>
                    <div className='cost-section__price'>
                        <input type='number' id="price" name="price" onChange={handleValidPrice} /> <p>&#x20AA;</p>
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="salePrice">הנחה על המוצר:</label>
                    </div>
                    <div className='cost-section__price'>
                        <input type='number' id="salePrice" name="salePrice" onChange={handleValidSalePrice} /> <p>&#x20AA;</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default NewCandlePrice