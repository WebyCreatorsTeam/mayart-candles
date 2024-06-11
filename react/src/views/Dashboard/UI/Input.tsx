import { FC, useState } from 'react'
import { validateValues } from '../utils/fornValidation'

interface I_Input {
    type: string
    name: string
    placeholder: string
    autoComp: string
    setUserDetails: Function
}

const Input: FC<I_Input> = ({ type, name, placeholder, autoComp, setUserDetails }) => {
    const [error, setError] = useState("")

    const hendleFillInput = (ev: any) => {
        const { continueWork, message } = validateValues(ev.target.name, ev.target.value)
        if (!continueWork) return setError(message)
        if (continueWork) {
            setUserDetails((user: any) => { return { ...user, [ev.target.name]: ev.target.value } })
            return setError("")
        }
    }

    return (
        <>
            <div className='input-label-and-error'>
                <label htmlFor={name} >{placeholder}</label>
                {error.length > 0 && <p>{error}</p>}
            </div>
            <input
                id={name}
                required
                type={type}
                name={name}
                onBlur={hendleFillInput}
                aria-label={placeholder}
                autoComplete={autoComp}
                style={{ borderColor: error.length > 0 ? "red" : "black" }}
            />
        </>
    )
}

export default Input