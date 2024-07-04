import { FC, SyntheticEvent, useState } from 'react'
import { IPrompCandleEdit } from '../NameCandle/NewNameCandle'
import { validateNewCandle } from '../../../utils/validateNewCandle'
// import { validateNewCandle } from '../../utils/validateNewCandle'

const NewCandleShape: FC<IPrompCandleEdit> = ({ hendleFillInput }) => {
    const [error, setError] = useState<string>("")

    const handleValidName = (ev: SyntheticEvent) => {
        let target = ev.target as HTMLInputElement;
        const { continueWork, message } = validateNewCandle(target.name, target.value)
        if (!continueWork) { return setError(message) } else { setError("") }
        hendleFillInput(target.name, target.value)
    }

    return (
        <section>
            <label htmlFor="shape">צורת המוצר*</label>  {error && <p>{error}</p>}
            <input type="text" id="shape" name="shape" onChange={handleValidName} />
        </section>
    )
}

export default NewCandleShape