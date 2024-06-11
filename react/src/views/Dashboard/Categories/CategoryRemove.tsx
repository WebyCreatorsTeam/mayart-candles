import React, { FC } from 'react'

interface ICategoryRemove {
    ctgId: string
    setOpenPopupRemove: Function
    setRemoveCtgID: Function
    setAllCategories: Function
}
const CategoryRemove: FC<ICategoryRemove> = ({ ctgId, setOpenPopupRemove, setRemoveCtgID, setAllCategories }) => {
    const hendleRemoveCategory = () => {
        console.log(ctgId)
        // setAllCategories()
    }

    return (
        <div className='popup'>
            <h2 className='titlePopup'>
                בטוחה שאת רוצה להסיר את הפריט?
            </h2>
            <button className='removeButton'
                onClick={hendleRemoveCategory}
            >הסרה</button>
            <button className='cancleButton'
                onClick={() => {
                    setRemoveCtgID("")
                    setOpenPopupRemove(false)
                }}
            >ביטול</button>
        </div>
    )
}

export default CategoryRemove