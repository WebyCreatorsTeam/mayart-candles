import axios from 'axios'
import { FC, Suspense, useState } from 'react'
import { Await, Link, defer, useLoaderData } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CategoryAdd from './CategoryAdd';
import CategoryRemove from './CategoryRemove';
import { getAllColors } from '../NewCandle/NewColor/NewCandleColor';

export interface ICategories {
  _id: string;
  opt: string;
}

const staticCategory = [
  "כל הנרות",
  "נרות גדולים",
  "נרות בינוניים",
  "נרות קטנים",
];

const CategoriesDashboard: FC = () => {
  const { categories }: any = useLoaderData() as { admins: Array<ICategories> };
  const [allCategories, setAllCategories] =
    useState<Array<ICategories>>(categories);
  const [openPopupAdd, setOpenPopupAdd] = useState<boolean>(false);
  const [openPopupRemove, setOpenPopupRemove] = useState<boolean>(false);
  const [removeCtgID, setRemoveCtgID] = useState<string>("");

  return (
    <Suspense fallback={<h1 className="no_data_text">Loading...</h1>}>
      <Await resolve={categories}>
        <div className="categoryGrid">
          <section>
            {/* Add Category Window */}
            {openPopupAdd && (
              <CategoryAdd
                setOpenPopupAdd={setOpenPopupAdd}
                setAllCategories={setAllCategories}
              />
            )}
          </section>

          <section>
            {/* Remove Category Window */}
            {openPopupRemove && (
              <CategoryRemove
                ctgId={removeCtgID}
                setOpenPopupRemove={setOpenPopupRemove}
                setRemoveCtgID={setRemoveCtgID}
                setAllCategories={setAllCategories}
              />
            )}
          </section>

          {staticCategory.map((ctg, idx) => (
            <section className="cubeGrid" key={idx}>
              <Link to={ctg}>{ctg}</Link>
            </section>
          ))}
          {allCategories.map((ctg: ICategories) => (
            <section className="cubeGrid" key={ctg._id}>
              <button
                onClick={() => {
                  setRemoveCtgID(ctg._id);
                  setOpenPopupRemove(true);
                }}
              >
                <DeleteOutlineIcon sx={{ fontSize: 40 }} />
              </button>
              <Link className="nameCategory" to={`${ctg.opt}`}>
                {ctg.opt}
              </Link>
            </section>
          ))}
          <button className="cubeGrid" onClick={() => setOpenPopupAdd(true)}>
            <img
              src="/icons/dashboard/add-category.svg"
              alt="הוספת קטגוריה"
              width={70}
              height={70}
            />
          </button>
        </div>
      </Await>
    </Suspense>
  );
};

export default CategoriesDashboard;

export const hendleGetCategories = async () => {
  const { data } = await axios.get(`https://mayart-candles-api.vercel.app/categories/get-categories`)
  const { continueWork, categories } = data;
  if (continueWork) return categories
  if (!continueWork) return alert("הראה שגיאה, נסה שנית")
}

export const categoriesLoader = async () => {
  return defer({
    categories: await hendleGetCategories(),
    colors: getAllColors()
  });
};
