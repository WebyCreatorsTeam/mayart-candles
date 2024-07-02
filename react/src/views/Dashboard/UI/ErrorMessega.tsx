import React, { FC } from 'react'

interface IErrorMessega {
    errorText: string;
}

const ErrorMessega: FC<IErrorMessega> = ({ errorText }) => {
    return (
        <>
        {errorText.length > 0 && <p className='error-text'>{errorText}</p>}
        </>
    )
}

export default ErrorMessega