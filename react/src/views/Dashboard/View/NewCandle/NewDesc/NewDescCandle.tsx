import { FC, SyntheticEvent, useState } from 'react'
import { IPrompCandleEdit } from '../NameCandle/NewNameCandle';
import { validateNewCandle } from '../../../utils/validateNewCandle';
import ErrorMessega from '../../../UI/ErrorMessega';

const NewDescCandle: FC<IPrompCandleEdit> = ({ hendleFillInput }) => {
    const [error, setError] = useState<string>("")

    const handleValidDesc = (ev: SyntheticEvent) => {
        let target = ev.target as HTMLInputElement;
        const { continueWork, message } = validateNewCandle(target.name, target.value)
        if (!continueWork) { return setError(message) } else { setError("") }
        hendleFillInput(target.name, target.value)
    }

    return (
        <section className='descDisplay'>
            <div className='label-error-text-display'>
                <h3>תיאור המוצר*</h3>
                <ErrorMessega errorText={error} />
            </div>
            <p>מומלץ לכלול:</p>
            <ul className='descDisplay__list'>
                <li>מפרט טכני מדויק של המוצר, כולל גודל, משקל, חומר, צבע וכו'.</li>
                <li>במידת הצורך, הסבר כיצד לתחזק את המוצר.</li>
                <li>שילוב מילות מפתח בתיאור כדי לשפר את מיקום המוצר בתוצאות החיפוש.</li>
            </ul>
            <textarea name="description" onChange={handleValidDesc} />
        </section>
    )
}

export default NewDescCandle