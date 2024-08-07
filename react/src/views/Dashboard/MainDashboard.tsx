import axios from 'axios'
import { FC, Suspense, useState } from 'react'
import { Await, Link, defer, useLoaderData } from 'react-router-dom'
import CandleToShow from './UI/CandleToShow'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export interface ICandles {
  name: string,
  shape: string
  colors: [{ color: string, hexCode: string, _id?: string }]
  fragrances: [string]
  price: number,
  salePrice: number
  pictures?: Array<{ img: string, _id?: string }>
  description: string
  type: string
  size: string
  _id?: string
}

const MainDashboard: FC = () => {
  const { candles } = useLoaderData() as { candles: Array<ICandles> }
  const [allCandles, setAllCandles] = useState<Array<ICandles>>(candles)

  return (
    <Suspense fallback={<h1 className='no_data_text'>Loading...</h1>}>
      <Await resolve={candles}>
        <section className='dashboardGrid'>
          <section className='mainImg'>
            <img className='bigImg' src="./images/hero-image.webp" alt="תמונת רקע של הירו" width={1500} height={855} />
          </section>
          <section className='gridImg'>
            <div className='candle-show'>
              <Link to={`/dashboard/candle/add-new-candle`} className='link-to-candle'>
              <img src="/icons/dashboard/add-category.svg" alt="הוספת תמונה" width={70} height={70} />
                <div className='price-details'>
                  <div className='price-details__costs'>
                    <p>הוספת נר חדש</p>
                  </div>
                </div>
              </Link>
            </div>
            {allCandles.map((cdl: ICandles) => (
              <CandleToShow cdl={cdl} key={cdl._id} setAllCandles={setAllCandles} />
            ))}
          </section>
        </section>
      </Await>
    </Suspense>
  )
}

export default MainDashboard;

const hendleGetCandles = async () => {
  const token = cookies.get('token')
  const { data } = await axios.get(`https://mayart-candles-api.vercel.app/candles/get-candles?token=${token}`)
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