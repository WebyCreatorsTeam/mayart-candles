import React, { FC, ReactNode } from 'react'

interface IPopUp {
    children: ReactNode
}

const PopUp: FC<IPopUp> = ({ children }) => {
    return (
        <div className='popup'>
            <div className='popup__window'>
                {children}
            </div>
        </div>
    )
}

export default PopUp