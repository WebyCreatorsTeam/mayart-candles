import { FC, SyntheticEvent, useState } from 'react'
// import { validateNewCandle } from '../../utils/validateNewCandle';
import { IPrompCandleEdit } from '../NameCandle/NewNameCandle';
import { validateNewCandle } from '../../../utils/validateNewCandle';

const NewDescCandle: FC<IPrompCandleEdit> = ({ hendleFillInput }) => {
    const [error, setError] = useState<string>("")

    const handleValidDesc = (ev: SyntheticEvent) => {
        let target = ev.target as HTMLInputElement;
        const { continueWork, message } = validateNewCandle(target.name, target.value)
        if (!continueWork) {return setError(message)} else {setError("")}
        hendleFillInput(target.name, target.value)
    }
    
    return (
        <section>
            <h3>תיאור המוצר*</h3>
            <ul className='descDisplay'>
                מומלץ לכלול:
                <li>מפרט טכני מדויק של המוצר, כולל גודל, משקל, חומר, צבע וכו'.</li>
                <li>במידת הצורך, הסבר כיצד לתחזק את המוצר.</li>
                <li>שילוב מילות מפתח בתיאור כדי לשפר את מיקום המוצר בתוצאות החיפוש.</li>
            </ul>
            {error && <p>{error}</p>}
            <textarea name="description" onChange={handleValidDesc} />
        </section>
    )
}

export default NewDescCandle