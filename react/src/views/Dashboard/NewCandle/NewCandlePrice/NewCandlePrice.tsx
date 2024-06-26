import { FC, SyntheticEvent, useState } from 'react'
import { IPrompCandleEdit } from '../NameCandle/NewNameCandle'
import { validateNewCandle } from '../../utils/validateNewCandle'

const NewCandlePrice: FC<IPrompCandleEdit> = ({ hendleFillInput }) => {
    const [price, setPrice] = useState<number>(0)
    const [error, setError] = useState<string>("")

    const handleValidPrice = (ev: SyntheticEvent) => {
        let target = ev.target as HTMLInputElement;
        const { continueWork, message } = validateNewCandle(target.name, target.value)
        console.log(target.name)
        if (!continueWork) { return setError(message) } else { setError("") }
        hendleFillInput(target.name, target.value)
        setPrice(Number(target.value))
    }

    const handleValidSalePrice = (ev: SyntheticEvent) => {
        let target = ev.target as HTMLInputElement;
        if (Number(target.value) > price || Number(target.value) === price) return setError("ההנחה לא יכולה להיות יותר ממחחיר המוצר או שווה למחיר")
        hendleFillInput(target.name, target.value)
        return setError("")
    }

    return (
        <section>
            <h2>עלויות</h2>
            <section className='costsDisplay'>
                <label htmlFor="price">מחיר המוצר*:</label> {error && <p>{error}</p>}
                <input type='number' id="price" name="price" onChange={handleValidPrice} />
                <label htmlFor="salePrice">הנחה על המוצר:</label>
                <input type='number' id="salePrice" name="salePrice" onChange={handleValidSalePrice} />
            </section>
        </section>
    )
}

export default NewCandlePrice