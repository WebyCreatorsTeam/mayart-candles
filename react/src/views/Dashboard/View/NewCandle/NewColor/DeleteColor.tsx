import { red } from '@mui/material/colors'
import { FC } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IColor } from './NewCandleColor';

interface IDeleteColor {
    allColorsOfCandles: Array<IColor>
    handleDeleteColorFromArray: (id: string | undefined) => Promise<void>
}

const DeleteColor: FC<IDeleteColor> = ({ allColorsOfCandles, handleDeleteColorFromArray }) => {
    return (
        <div className='colorDisplay__colorsList'>
            {allColorsOfCandles.map((color, index) => (
                <div key={index} className='colorDisplay__colorsList--color-item'>
                    <div key={index} style={{ backgroundColor: color.hexCode }}>{color.color}</div>
                    <button onClick={() => handleDeleteColorFromArray(color!._id)}><DeleteOutlineIcon fontSize="large" sx={{ color: red[700] }} /></button>
                </div>
            ))}
        </div>
    )
}

export default DeleteColor