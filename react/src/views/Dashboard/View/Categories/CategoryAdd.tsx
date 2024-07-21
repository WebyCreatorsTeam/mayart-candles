import axios from 'axios'
import React, { FC, useState } from 'react'
import { ICategories } from './CategoriesDashboard'
import PopUp from '../../UI/PopUp/PopUp'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

interface ICategoryAdd {
  setOpenPopupAdd: Function;
  setAllCategories: Function;
}

const CategoryAdd: FC<ICategoryAdd> = ({
  setOpenPopupAdd,
  setAllCategories,
}) => {
  const [category, setCategory] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

    const hendleAddCategory = async () => {
        try {
            setLoader(true)
            if (category.length === 0) return alert("השדה לא יכול להיות ריק")
                const token = cookies.get('token')
            const { data: { continueWork, message, newCategory } } = await axios.post(`https://mayart-candles-api.vercel.app/categories/save-category?token=${token}`, { opt: category })
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
          <PopUp>
              <h2>
                  איזה סוג קטגוריה להוסיף?
              </h2>
              <input id='addInput' type="text" onChange={handleChangeInput} placeholder="נא הכנס שם הקטגוריה" />
              <div className='confirmBtns popup__window--confirmBtns'>
                  <button
                      onClick={hendleAddCategory}
                      disabled={loader}
                      className={
                          loader ? "action-loading" :
                              category.length === 0 ? "action-loading" : "agree-btn"
                      }
                  >{loader ? "שומר" : "הוספה"}</button>
                  <button
                      disabled={loader}
                      className={loader === true ? "action-loading" : "cancel-btn"}
                      onClick={() => setOpenPopupAdd(false)}
                  >ביטול</button>
              </div>
          </PopUp>
      )
  };

export default CategoryAdd;
