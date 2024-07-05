import { FC, SyntheticEvent, useState } from 'react'
import { validateNewCandle } from '../../../utils/validateNewCandle'
import ErrorMessega from '../../../UI/ErrorMessega'

export interface IPrompCandleEdit {
    hendleFillInput: (name: string, value: string) => void
}

const NewNameCandle: FC<IPrompCandleEdit> = ({ hendleFillInput }) => {
    const [error, setError] = useState<string>("")

    const handleValidName = (ev: SyntheticEvent) => {
        let target = ev.target as HTMLInputElement;
        const { continueWork, message } = validateNewCandle(target.name, target.value)
        if (!continueWork) { return setError(message) } else { setError("") }
        hendleFillInput(target.name, target.value)
    }

    return (
        <section>
            <h2>מוצר</h2>
            <div className='label-error-text-display'>
                <label htmlFor="name">שם המוצר*:</label> <ErrorMessega errorText={error} />
            </div>
            <input type='text' id="name" name="name" onChange={handleValidName} />
        </section>
    )
}

export default NewNameCandle