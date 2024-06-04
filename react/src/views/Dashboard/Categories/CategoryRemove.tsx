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
        <div>
            <h2>
                בטוחה שאת רוצה להסיר את הפריט?
            </h2>
            <button
                onClick={hendleRemoveCategory}
            >הסרה</button>
            <button
                onClick={() => {
                    setRemoveCtgID("")
                    setOpenPopupRemove(false)
                }}
            >ביטול</button>
        </div>
    )
}

export default CategoryRemove