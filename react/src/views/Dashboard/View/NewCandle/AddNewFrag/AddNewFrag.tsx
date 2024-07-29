import { FC, SyntheticEvent } from 'react'

interface IAddNewFrag {
    handleAddFragToArrFrag: (ev: SyntheticEvent) => any
    handeValidColorsFrag: (ev: SyntheticEvent) => void
    loader: boolean
}

const AddNewFrag: FC<IAddNewFrag> = ({ handleAddFragToArrFrag, handeValidColorsFrag, loader }) => {
    return (
        <form onSubmit={handleAddFragToArrFrag} className='fragDisplay__form-section'>
            <h2>הוספת ריח חדש</h2>
            <div>
                <label htmlFor="fragrance">שם הריח:</label>
            </div>
            <div>
                <input type="text" id="fragrance" name="fragrance" onChange={handeValidColorsFrag} />
            </div>
            <button
                type='submit'
                className={loader ? "action-loading" : "agree-btn"}
            >הוסף ריח</button>
        </form>
    )
}

export default AddNewFrag