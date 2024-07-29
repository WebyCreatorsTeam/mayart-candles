import { red } from '@mui/material/colors'
import { FC } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IFragrances } from './AddNewCandleFrg';
// import { IColor } from './NewCandleColor';

interface IDeleteFrag {
    allFragsOfCandles: Array<IFragrances>
    handleDeleteFragFromArray: (id: string | undefined) => Promise<void>
}

const DeleteFrag: FC<IDeleteFrag> = ({ allFragsOfCandles, handleDeleteFragFromArray }) => {
    return (
        <div className='colorDisplay__colorsList'>
            {allFragsOfCandles.map((frag, index) => (
                <div key={index} className='fragDisplay__fragranceList--frag-item'>
                    <div key={index}>{frag.name}</div>
                    <button onClick={() => handleDeleteFragFromArray(frag!._id)}><DeleteOutlineIcon fontSize="large" sx={{ color: red[700] }} /></button>
                </div>
            ))}
        </div>
    )
}

export default DeleteFrag