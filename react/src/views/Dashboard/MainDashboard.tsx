import axios from 'axios'
import { FC, Suspense } from 'react'
import { Await, Link, defer, useLoaderData } from 'react-router-dom'

interface ICandles {
  name: string,
  shape: string
  colors: [string]
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
  const { candles }: any = useLoaderData() as { admins: Array<ICandles> }

  return (
    <Suspense fallback={<h1 className='no_data_text'>Loading...</h1>}>
      <Await resolve={candles}>
        <section className='mainImg'>
          <img className='bigImg' src="/images/hero-image.jpeg" alt="תמונת רקע של הירו" width={1684} height={972} /> {/* צריך לעשות שהתמונה תיהיה מותאמת לפי העיצוב */}
        </section>
        <section className='gridImg'>
          {candles.map((cdl: ICandles) => (
            <Link to={`candle/${cdl._id}`} key={cdl._id}>
              <img src="/images/candleimage.png" alt={`תמונה של מוצר ${cdl.name}`} width={530} height={700} />
              <h2 className='name'>{cdl.name}</h2>
              <p className='price'>{cdl.price}</p>
              {cdl.salePrice && <p className='salePrice'>{cdl.salePrice}</p>}
            </Link>
          ))}
        </section>
      </Await>
    </Suspense>
  )
}

export default MainDashboard

const hendleGetCandles = async () => {
  const { data } = await axios.get(`https://mayart-candles-api.vercel.app/candles/get-candles`)
  const { continueWork, allCandles } = data;
  if (continueWork) return allCandles
  if (!continueWork) return alert("הראה שגיאה, נסה שנית")
}

export const candlesLoader = async () => {
  return defer({
    candles: await hendleGetCandles()
  })
}