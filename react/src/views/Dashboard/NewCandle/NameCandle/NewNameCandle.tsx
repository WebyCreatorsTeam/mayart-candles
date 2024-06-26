import { FC, SyntheticEvent, useState } from 'react'
import { validateNewCandle } from '../../utils/validateNewCandle'

export interface IPrompCandleEdit {
    hendleFillInput: (name: string, value: string) => void
}

const NewNameCandle: FC<IPrompCandleEdit> = ({ hendleFillInput }) => {
    const [error, setError] = useState<string>("")

    const handleValidName = (ev: SyntheticEvent) => {
        let target = ev.target as HTMLInputElement;
        const { continueWork, message } = validateNewCandle(target.name, target.value)
        if (!continueWork) {return setError(message)} else {setError("")}
        hendleFillInput(target.name, target.value)
    }

    return (
        <section>
            <label htmlFor="name">שם המוצר*:</label> {error && <p>{error}</p>}
            <input type='text' id="name" name="name" onChange={handleValidName} />
        </section>
    )
}

export default NewNameCandle