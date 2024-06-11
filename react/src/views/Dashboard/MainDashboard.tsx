import axios from 'axios'
import { FC, Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import CandleToShow from './UI/CandleToShow'

export interface ICandles {
  name: string,
  shape: string
  colors: [{color: string, hexCode: string}]
  fragrances: [string]
  price: number,
  salePrice: number
  pictures: [string]
  description: string
  type: string
  size: string
  _id: string
}

const MainDashboard: FC = () => {
  const { candles } = useLoaderData() as { candles: Array<ICandles> }
  console.log(candles)
  return (
    <Suspense fallback={<h1 className='no_data_text'>Loading...</h1>}>
      <Await resolve={candles}>
        <section className='mainImg'>
          <img className='bigImg' src="./images/hero-image.webp" alt="תמונת רקע של הירו" width={1500} height={855} />
        </section>
        <section className='gridImg'>
          {candles.map((cdl: ICandles) => (
            <CandleToShow cdl={cdl}  key={cdl._id}/>
          ))}
        </section>
      </Await>
    </Suspense>
  )
}

export default MainDashboard;

const hendleGetCandles = async () => {
  const { data } = await axios.get(`https://mayart-candles-api.vercel.app/candles/get-candles`)
  const { continueWork, allCandles } = data;
  console.log(data)
  if (continueWork) return allCandles
  if (!continueWork) return alert("הראה שגיאה, נסה שנית")
}

export const candlesLoader = async () => {
  return defer({
    candles: await hendleGetCandles()
  })
}