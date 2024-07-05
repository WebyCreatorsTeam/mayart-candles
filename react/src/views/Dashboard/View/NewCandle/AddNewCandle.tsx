import { FC, Suspense, SyntheticEvent, useState } from 'react'
// import { ICandles } from '../MainDashboard'
import { Await, useLoaderData } from 'react-router-dom'
import { ICategories } from '../Categories/CategoriesDashboard'
import NewNameCandle from './NameCandle/NewNameCandle'
import NewCandlePrice from './NewCandlePrice/NewCandlePrice'
import NewDescCandle from './NewDesc/NewDescCandle'
import NewCandleColor from './NewColor/NewCandleColor'
import AddNewCandleFrg from './AddNewFrag/AddNewCandleFrg'
import NewCandleShape from './NewShape/NewCandleShape'
import NewCandleType from './NewCandleType/NewCandleType'
import NewCandleSize from './NewCandleSize/NewCandleSize'
// import UploadManyFiles from '../UI/UploadManyFiles'
import axios from 'axios'
import { ICandles } from '../../MainDashboard'
import NewCandleImages from './NewImagesCandle/NewCandleImages'
// import UploadManyFiles from '../../UI/UploadManyFiles'
// import { BASE_API } from '../../../utils/api-connect'

const AddNewCandle: FC = () => {
  const { categories }: any = useLoaderData() as { admins: Array<ICategories> }
  const [loader, setLoader] = useState<boolean>(false)
  // const [prevFileShow, setPrevFileShow] = useState<Array<string>>([])
  const [images, setImages] = useState<any>([])

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

  // console.log(images)

  const hendleFillInput = (name: string, value: string) => {
    setNewCandle((candle: any) => { return { ...candle, [name]: value } })
  }

  // const handleSelectFile = (ev: SyntheticEvent) => {
  //   const target = ev.target as HTMLInputElement;

  //   if (target.files) {
  //     setImages(target.files)
  //     for (let i = 0; i < target.files.length; i++) {
  //       const fileToShow = URL.createObjectURL(target.files[i])
  //       setPrevFileShow((prv: any) => [...prv, fileToShow])
  //     }
  //   }
  // }

  const handleUploadNewCandle = async () => {
    try {
      setLoader(true);
      const data = new FormData()
      for (let i = 0; i < images.length; i++) {
         data.append("my_many_files", images[i])
      }
      console.log(data)
      const token = sessionStorage.getItem('token')
      console.log(`qweqweq`)
      // const res = await axios.post(`https://mayart-candles-api.vercel.app/candles/add-candle-image?token=${token}&candle=${newCandle}`, data, {
      const candle = JSON.stringify(newCandle)
      const res = await axios.post(`http://localhost:7575/candles/save-candle?token=${token}&candle=${candle}`, data, {
        headers: {
          'content-type': "mulpipart/form-data"
        }
      })
      console.log(res)
    } catch (error) {
      alert(error);
    } finally {
      setLoader(false);
    }
  }

  // console.log(prevFileShow)
  // console.log(newCandle)
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
            <NewCandleType categories={categories} setNewCandle={setNewCandle} />
            <NewCandleSize setNewCandle={setNewCandle} />
          </section>
          <hr />
          <NewCandleImages loader={loader} setImages={setImages} />
          <div className='addCandleBtn'>
            <button onClick={handleUploadNewCandle} className="addCandleBtn__btn">הוסף מוצר לחנות</button>
          </div>
        </section>
      </Await>
    </Suspense>

  )
}

export default AddNewCandle;