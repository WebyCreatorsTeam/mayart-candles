import axios from "axios";
import React, { FC, useState } from "react";
import { ICategories } from "./CategoriesDashboard";

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
      setLoader(true);
      if (category.length === 0) return alert("השדה לא יכול להיות ריק");

      const {
        data: { continueWork, message, newCategory },
      } = await axios.post("http://localhost:7575/categories/save-category", {
        opt: category,
      });
      if (continueWork) {
        alert(message);
        return setAllCategories((categories: Array<ICategories>) => [
          ...categories,
          { _id: newCategory._id, opt: newCategory.opt },
        ]);
      }
      return alert(message);
    } catch (error) {
      alert(error);
    } finally {
      setLoader(false);
    }
  };

  const handleChangeInput = (ev: React.SyntheticEvent) => {
    let target = ev.target as HTMLInputElement;
    return setCategory(target.value);
  };

  return (
    <div>
      <h2>איזה סוג קטיגוריה את רוצה להוסיף?</h2>
      <input type="text" onChange={handleChangeInput} />
      <button
        onClick={hendleAddCategory}
        disabled={loader}
        className={loader === true ? "form-btn_disable" : "form-btn_active"}
      >
        הוספה
      </button>
      <button
        disabled={loader}
        className={loader === true ? "form-btn_disable" : "form-btn_active"}
        onClick={() => setOpenPopupAdd(false)}
      >
        ביטול
      </button>
    </div>
  );
};

export default CategoryAdd;
