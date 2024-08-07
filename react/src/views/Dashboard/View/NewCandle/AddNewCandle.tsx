import { FC, Suspense, useState } from 'react'
import { Await, defer, useLoaderData, useNavigate } from 'react-router-dom'
import { hendleGetCategories, ICategories } from '../Categories/CategoriesDashboard'
import NewNameCandle from './NameCandle/NewNameCandle'
import NewCandlePrice from './NewCandlePrice/NewCandlePrice'
import NewDescCandle from './NewDesc/NewDescCandle'
import NewCandleColor, { getAllColors } from './NewColor/NewCandleColor'
import AddNewCandleFrg, { getAllFrags } from './AddNewFrag/AddNewCandleFrg'
import NewCandleShape from './NewShape/NewCandleShape'
import NewCandleType from './NewCandleType/NewCandleType'
import NewCandleSize from './NewCandleSize/NewCandleSize'
import axios from 'axios'
import { ICandles } from '../../MainDashboard'
import NewCandleImages from './NewImagesCandle/NewCandleImages'
import { validateNewCandleBeforeSend } from '../../utils/validateNewCandle'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const AddNewCandle: FC = () => {
  const { categories }: any = useLoaderData() as { admins: Array<ICategories> }
  const [loader, setLoader] = useState<boolean>(false)
  const [images, setImages] = useState<any>([])
  const navigate = useNavigate();

  const [newCandle, setNewCandle] = useState<ICandles>({
    name: "",
    shape: "",
    colors: [{ color: "", hexCode: "" }],
    fragrances: [""],
    price: 0,
    salePrice: 0,
    description: "",
    type: "",
    size: ""
  })

  console.log(newCandle)
  const hendleFillInput = (name: string, value: string) => {
    setNewCandle((candle: any) => { return { ...candle, [name]: value } })
  }

  const handleUploadNewCandle = async () => {
    try {
      const valid = await validateNewCandleBeforeSend(newCandle, images)
      if (!valid?.continueWork) {
        return alert(valid?.message)
      }

      setLoader(true);
      const data = new FormData()
      for (let i = 0; i < images.length; i++) {
        data.append("my_many_files", images[i])
      }

      data.append("candle", JSON.stringify(newCandle))

      const token = cookies.get('token')
      const res = await axios.post(`https://mayart-candles-api.vercel.app/candles/save-candle?token=${token}`, data, {
        headers: {
          'content-type': "mulpipart/form-data"
        }
      })
      const { continueWork, message } = res.data;
      if (continueWork) {
        alert(message);
        return navigate("/dashboard")
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoader(false);
    }
  }

  return (
    <Suspense fallback={<h1 className='no_data_text'>Loading...</h1>}>
      <Await resolve={categories}>
        <section dir="rtl" className='candleAddPage'>
          <h1>הוספת מוצר חדש</h1>
          <p className='candleAddPage__mustIncluded'>*כל השדות אשר נמצאים תחת כוכבים הינם שדות חובה </p>
          <hr />
          <section>
            <NewNameCandle hendleFillInput={hendleFillInput} />
            <NewCandlePrice hendleFillInput={hendleFillInput} />
          </section>
          <hr />
          <section>
            <h2>מפרט טכני</h2>
            <NewCandleColor setNewCandle={setNewCandle} />
            <AddNewCandleFrg setNewCandle={setNewCandle} />
            <NewCandleShape hendleFillInput={hendleFillInput} />
          </section>
          <hr />
          <NewDescCandle hendleFillInput={hendleFillInput} />
          <hr />
          <section>
            <h2>קטגוריות</h2>
            <Suspense fallback={<h1 className='no_data_text'>Loading...</h1>}>
              <Await resolve={categories}>
                <NewCandleType categories={categories} setNewCandle={setNewCandle} />
                <NewCandleSize setNewCandle={setNewCandle} />
              </Await>
            </Suspense>
          </section>
          <hr />
          <NewCandleImages loader={loader} setImages={setImages} />
          <div className='addCandleBtn'>
            <button
              disabled={loader}
              className={loader ? "addCandleBtn__btn addCandleBtn__btn--loader" : "addCandleBtn__btn addCandleBtn__btn--waiting"}
              onClick={handleUploadNewCandle} >הוסף מוצר לחנות</button>
          </div>
        </section>
      </Await>
    </Suspense>
  )
}

export default AddNewCandle;

export const addNewCandleLoader = async () => {
  return defer({
    categories: await hendleGetCategories(),
    colorsArray: await getAllColors(),
    fragsArray: await getAllFrags()
  });
};