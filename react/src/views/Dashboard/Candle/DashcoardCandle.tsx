import axios from 'axios'
import React, { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { ICandles } from '../MainDashboard'

const DashcoardCandle = () => {
  const { candle } = useLoaderData() as { candle: ICandles }
  // console.log(candle)
  return (
    <Suspense fallback={<h1 className='no_data_text'>Loading...</h1>}>
      <Await resolve={candle}>
        <h1>עמוד מוצר</h1>
        <section>
          <h2>{candle.name}</h2>
          <hr />
          <div className='price-details__costs'>
            {candle.salePrice && <p className='salePrice'>{candle.salePrice}&#x20AA;</p>}
            <p className={candle.salePrice ? "priceBefore" : "regularPrice"}>{candle.price}&#x20AA;</p>
          </div>
          <p>צבע: </p>
          <p>ריח: </p>
        </section>
        <section>
          תמונות
        </section>
        <section>
          <h3>תיאור מוצר</h3>
          <p>{candle.description}</p>
        </section>
      </Await>
    </Suspense>
  )
}

export default DashcoardCandle


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