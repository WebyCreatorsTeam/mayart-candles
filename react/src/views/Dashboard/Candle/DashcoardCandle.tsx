import axios from 'axios'
import { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { ICandles } from '../MainDashboard'
import CandleImages from './CandleImages'
import CandleColor from './CandleColor'
import CandleFrag from './CandleFrag'
import CandlePrice from './CandlePrice'
import CandleName from './CandleName'
import CandleDesc from './CandleDesc'

const DashcoardCandle = () => {
  const { candle } = useLoaderData() as { candle: ICandles }
  console.log(candle)

  return (
    <Suspense fallback={<h1 className='no_data_text'>Loading...</h1>}>
      <Await resolve={candle}>
        <section className='candlePage'>
          <h1>עמוד מוצר</h1>
          <section className='candleItem' dir="rtl">
            <CandleImages images={candle.pictures} candleName={candle.name} />
            <section className='candleItem__info-section'>
              <CandleName name={candle.name}/>
              <hr />
              <CandlePrice price={candle.price} salePrice={candle.salePrice} />
              <CandleColor colors={candle.colors} />
              <CandleFrag fragrances={candle.fragrances} />
              <CandleDesc description={candle.description}/>
            </section>
          </section>
        </section>
      </Await>
    </Suspense>
  )
}

export default DashcoardCandle;

const hendleGetCandle = async (id: string) => {
  const { data: { continueWork, candle } } = await axios.post(`https://mayart-candles-api.vercel.app/candles/get-one-candle`, { id })
  if (continueWork) return candle
  if (!continueWork) return alert("הראה שגיאה, נסה שנית")
}

export const getCandle = async ({ params }: any) => {
  const { candleID } = params
  return defer({
    candle: await hendleGetCandle(candleID)
  })
}