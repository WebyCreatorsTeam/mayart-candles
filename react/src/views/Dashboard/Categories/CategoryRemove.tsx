import axios from 'axios'
import React, { FC, useState } from 'react'
import { ICategories } from './CategoriesDashboard'

interface ICategoryRemove {
    ctgId: string
    setOpenPopupRemove: Function
    setRemoveCtgID: Function
    setAllCategories: Function
}

const CategoryRemove: FC<ICategoryRemove> = ({ ctgId, setOpenPopupRemove, setRemoveCtgID, setAllCategories }) => {
    const [loader, setLoader] = useState<boolean>(false)

    const hendleRemoveCategory = async () => {
        try {
            setLoader(true)
            const { data: { continueWork, message } } = await axios.delete("https://mayart-candles-api.vercel.app/categories/remove-category", { data: { id: ctgId } })
            if (continueWork) {
                alert(message)
                return setAllCategories((categories: Array<ICategories>) => categories.filter(ctg => ctg._id !== ctgId))
            }
            return alert(message)
        } catch (error) {
            alert(error)
        } finally {
            setOpenPopupRemove(false)
            setLoader(false)
        }
    }

    return (
        <div className='popup'>
            <div className='popup__window'>
                <h2 className='popup__window--title'>
                    בטוחה שאת רוצה להסיר את הפריט?
                </h2>
                <button
                    disabled={loader}
                    className={loader === true ? "form-btn_disable" : "form-btn_active"}
                    onClick={hendleRemoveCategory}
                >{loader ? "שומר" : "מחיקה"}</button>
                <button
                    disabled={loader}
                    className={loader === true ? "form-btn_disable" : "form-btn_active"}
                    onClick={() => {
                        setRemoveCtgID("")
                        setOpenPopupRemove(false)
                    }}
                >ביטול</button>
            </div>
        </div>
    )
}

export default CategoryRemove