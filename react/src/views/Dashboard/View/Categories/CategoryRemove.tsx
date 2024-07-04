import axios from 'axios'
import React, { FC, useState } from 'react'
import { ICategories } from './CategoriesDashboard'
import { BASE_API } from '../../../../utils/api-connect'
import PopUp from '../../UI/PopUp/PopUp'


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
            const token = sessionStorage.getItem('token')
            const { data: { continueWork, message } } = await axios.delete(`https://mayart-candles-api.vercel.app/categories/remove-category?token=${token}`, { data: { id: ctgId } })
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
        <PopUp>
            <h2 className='popup__window--title'>
                בטוחה שאת רוצה להסיר את הפריט?
            </h2>
            <div className='popup__window--confirmBtns'>
                <button
                    disabled={loader}
                    className={loader ? "action-loading" : "agree-btn"}
                    onClick={hendleRemoveCategory}
                >{loader ? "שומר" : "מחיקה"}</button>
                <button
                    disabled={loader}
                    className={loader ? "action-loading" : "cancel-btn"}
                    onClick={() => {
                        setRemoveCtgID("")
                        setOpenPopupRemove(false)
                    }}
                >ביטול</button>
            </div>
        </PopUp>
    )
}

export default CategoryRemove