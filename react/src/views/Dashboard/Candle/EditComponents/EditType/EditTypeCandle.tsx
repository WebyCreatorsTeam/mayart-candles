import { FC, SyntheticEvent, useState } from 'react'
import { ICategories } from '../../../Categories/CategoriesDashboard'
import EditIcon from '@mui/icons-material/Edit';
import { useCandleIdContext } from '../../Context/CandleContext';
import axios from 'axios';

interface IEditTypeCandle {
    candleType: string
    categoryOption: ICategories[]
}
const EditTypeCandle: FC<IEditTypeCandle> = ({ candleType, categoryOption }) => {
    const [editType, setEditType] = useState<boolean>(false)
    const [loader, setLoader] = useState<boolean>(false)
    const id = useCandleIdContext()
    const [type, setType] = useState<string>(candleType)

    const handleChangeType = async () => {
        try {
            setLoader(true)
            const { data: { continueWork, message } } = await axios.patch("${BASE_API}/candles/edit-type-candle", { id, type })
            if (continueWork) {
                alert(message)
                setEditType(false)
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }
    }

    return (
        <section className='candleItem__editType'>
            {!editType && 
            <div className='candleItem__editType--title candleItem__editInfo'>
                <p>קטגורית נר:</p>
                <p>{type}</p>
                <button
                    onClick={() => setEditType(true)}
                ><EditIcon color="primary" /></button>
            </div>}
            {editType &&
                <section className='candleItem__editType--section'>
                    <select defaultValue={type} onChange={(ev: SyntheticEvent) => {
                        let target = ev.target as HTMLInputElement;
                        setType(target.value)
                    }}>
                        {categoryOption.map(ctg => (
                            <option key={ctg._id} value={ctg.opt}>{ctg.opt}</option>
                        ))}
                    </select >
                    <div className='candleItem__editType--actionBtns'>
                        <button
                            className={loader ? "action-loading" : "agree-btn"}
                            onClick={handleChangeType}
                        >שמור</button>
                        <button
                            className={loader ? "action-loading" : "cancel-btn"}
                            onClick={() => {
                                setEditType(false)
                                setType(candleType)
                            }}
                        >בטל</button>
                    </div>
                </section>
            }
        </section>
    )
}

export default EditTypeCandle