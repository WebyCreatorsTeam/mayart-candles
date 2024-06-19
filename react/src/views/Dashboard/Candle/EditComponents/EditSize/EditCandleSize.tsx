import { FC, SyntheticEvent, useState } from 'react'
import { useCandleIdContext } from '../../Context/CandleContext'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';

interface IEditCandleSize {
    candleSize: string
}
const EditCandleSize: FC<IEditCandleSize> = ({ candleSize }) => {
    const [editType, setEditType] = useState<boolean>(false)
    const [loader, setLoader] = useState<boolean>(false)
    const id = useCandleIdContext()
    const [size, setSize] = useState<string>(candleSize)

    const handleChangeType = async () => {
        try {
            setLoader(true)
            const { data: { continueWork, message } } = await axios.patch("${BASE_API}/candles/edit-size-candle", { id, size })
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
            {!editType && <div className='candleItem__editType--title'>
                <h4>גודל נר:</h4>
                <p>{size}</p>
                <button
                    onClick={() => setEditType(true)}
                ><EditIcon color="primary" /></button>
            </div>}
            {editType &&
                <section className='candleItem__editType--section'>
                    <select defaultValue={size} onChange={(ev: SyntheticEvent) => {
                        let target = ev.target as HTMLInputElement;
                        setSize(target.value)
                    }}>
                        <option value="נרות גדולים">נרות גדולים</option>
                        <option value="נרות בינוניים">נרות בינוניים</option>
                        <option value="נרות קטנים">נרות קטנים</option>
                    </select>
                    <button
                        className={loader ? "unactiveBtn" : "actionBtn"}
                        onClick={handleChangeType}
                    >שמור</button>
                    <button
                        className={loader ? "unactiveBtn" : "actionBtn"}
                        onClick={() => {
                            setEditType(false)
                            setSize(candleSize)
                        }}
                    >בטל</button>
                </section>}
        </section>
    )
}

export default EditCandleSize