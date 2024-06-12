import axios from 'axios'
import React, { Suspense, useState } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { ICandles } from '../MainDashboard'

const DashcoardCandle = () => {
  const [choosenColor, setChoosenColor] = useState<string>("")
  const [choosenFrag, setChoosenFrag] = useState<string>("")
  const { candle } = useLoaderData() as { candle: ICandles }
  console.log(candle)

  return (
    <Suspense fallback={<h1 className='no_data_text'>Loading...</h1>}>
      <Await resolve={candle}>
        <section className='candlePage'>
          <h1>עמוד מוצר</h1>
          <section className='candleItem' dir="rtl">
            <section>
              תמונות
            </section>
            <section className='candleItem__info-section'>
              <div>
                <h2>{candle.name}</h2>
                <button>עריכת כותרת</button>
              </div>
              <hr />
              <div className='candleItem__costs'>
                {candle.salePrice && <p className='candleItem__costs--sale'>{candle.salePrice}&#x20AA;</p>}
                <p className={candle.salePrice ? "candleItem__costs--priceBefore" : "candleItem__costs--regularPrice"}>{candle.price}&#x20AA;</p>
                <button>עריכת מחיר</button>
              </div>
              <div className='candleItem__colors'>
                צבע: <p>{choosenColor}</p>
                {candle.colors.map(clr => (
                  <button
                    onClick={() => { setChoosenColor(clr.color) }}
                    title={clr.color}
                    style={{ backgroundColor: `#${clr.hexCode}` }}></button>
                ))}
                <button>עריכת צבע</button>
              </div>
              <div className='candleItem__fragr'>
                ריח: {choosenFrag}
                {candle.fragrances.map(frg => (
                  <button
                    onClick={() => { setChoosenFrag(frg) }}
                  >{frg}</button>
                ))}
                <button>עריכת ריח</button>
              </div>
            </section>

            <div>
              <h3>תיאור מוצר</h3>
              <p>{candle.description}</p>
              <button>עריכת תיאור מוצר</button>
            </div>
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