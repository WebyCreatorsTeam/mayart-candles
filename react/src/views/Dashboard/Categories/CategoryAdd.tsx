import axios from 'axios'
import React, { FC, useState } from 'react'
import { ICategories } from './CategoriesDashboard'
import { BASE_API } from '../../../utils/api-connect'

interface ICategoryAdd {
    setOpenPopupAdd: Function
    setAllCategories: Function
}

const CategoryAdd: FC<ICategoryAdd> = ({ setOpenPopupAdd, setAllCategories }) => {
    const [category, setCategory] = useState<string>("")
    const [loader, setLoader] = useState<boolean>(false)

    const hendleAddCategory = async () => {
        try {
            setLoader(true)
            if (category.length === 0) return alert("השדה לא יכול להיות ריק")
            const token = sessionStorage.getItem('token')
            const { data: { continueWork, message, newCategory } } = await axios.post(`${BASE_API}/categories/save-category?token=${token}`, { opt: category })
            if (continueWork) {
                alert(message)
                return setAllCategories((categories: Array<ICategories>) => [...categories, { _id: newCategory._id, opt: newCategory.opt }])
            }
            return alert(message)
        } catch (error) {
            alert(error)
        } finally {
            setOpenPopupAdd(false)
            setLoader(false)
        }
    }

    const handleChangeInput = (ev: React.SyntheticEvent) => {
        let target = ev.target as HTMLInputElement;
        return setCategory(target.value);
    };

    return (
        <div className='popup'>
            <div className='popup__window'>
                <h2 className='popup__window--title' >
                    איזה סוג קטגוריה להוסיף? 
                </h2>
                <input id='addInput' type="text" onChange={handleChangeInput} placeholder="נא הכנס שם הקטגוריה" />
                <button
                    onClick={hendleAddCategory}
                    disabled={loader}
                    className={
                        loader ? "form-btn_disable" :
                            category.length === 0 ? "form-btn_disable" : "form-btn_active"
                    }
                >{loader ? "שומר" : "הוספה"}</button>
                <button
                    disabled={loader}
                    className={loader === true ? "form-btn_disable" : "form-btn_active"}
                    onClick={() => setOpenPopupAdd(false)}
                >ביטול</button>
            </div>
        </div>
    )
}

export default CategoryAdd