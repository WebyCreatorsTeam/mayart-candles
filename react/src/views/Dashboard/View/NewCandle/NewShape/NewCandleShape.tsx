import { FC, SyntheticEvent, useState } from 'react'
import { IPrompCandleEdit } from '../NameCandle/NewNameCandle'
import { validateNewCandle } from '../../../utils/validateNewCandle'
import ErrorMessega from '../../../UI/ErrorMessega'

const NewCandleShape: FC<IPrompCandleEdit> = ({ hendleFillInput }) => {
    const [error, setError] = useState<string>("")

    const handleValidName = (ev: SyntheticEvent) => {
        let target = ev.target as HTMLInputElement;
        const { continueWork, message } = validateNewCandle(target.name, target.value)
        if (!continueWork) { return setError(message) } else { setError("") }
        hendleFillInput(target.name, target.value)
    }

    return (
        <section className='shapeDisplay'>
            <div className='label-error-text-display'>
                <label htmlFor="shape">צורת המוצר*</label>  <ErrorMessega errorText={error} />
            </div>
            <div>
                <input type="text" id="shape" name="shape" onChange={handleValidName} />
            </div>
        </section>
    )
}

export default NewCandleShape