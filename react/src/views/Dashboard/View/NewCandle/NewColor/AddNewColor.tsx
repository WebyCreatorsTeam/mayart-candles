import { FC, SyntheticEvent } from 'react'

interface IAddNewColor {
    handeValidColorsName: (ev: SyntheticEvent) => any
    handleValidColorCode: (ev: SyntheticEvent) => any
    handleAddColorToArrColor: (ev: SyntheticEvent) => any
    loader: boolean
}

const AddNewColor: FC<IAddNewColor> = ({ handeValidColorsName, handleValidColorCode, loader, handleAddColorToArrColor }) => {
    return (
        <form onSubmit={handleAddColorToArrColor} className='colorDisplay__form-section'>
            <h2>הוספת צבע חדש</h2>
            <div>
                <div>
                    <label htmlFor="color">שם הצבע:</label>
                </div>
                <div className='colorDisplay__form-section--color-name'>
                    <input type="text" id="color" name="color" onChange={handeValidColorsName} />
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="hexCode">צבע של מוצר:</label>
                </div>
                <div className='colorDisplay__form-section--color-hex'>
                    <input type="color" id="hexCode" name="hexCode" onChange={handleValidColorCode} />
                </div>
            </div>
            <button
                type='submit'
                className={loader ? "action-loading" : "agree-btn"}
            >הוסף צבע</button>
        </form>
    )
}

export default AddNewColor