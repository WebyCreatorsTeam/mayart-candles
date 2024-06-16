import axios from 'axios'
import { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { ICandles } from '../MainDashboard'
import CandleImages from './ViewComponents/CandleImages'
import CandleColor from './ViewComponents/CandleColor'
import CandleFrag from './ViewComponents/CandleFrag'
import CandlePrice from './ViewComponents/CandlePrice'
import CandleName from './ViewComponents/CandleName'
import CandleDesc from './ViewComponents/CandleDesc'
import { CandleIdContext } from './Context/CandleContext'
import { BASE_API } from '../../../utils/api-connect'
import { ICategories } from '../Categories/CategoriesDashboard'

const DashcoardCandle = () => {
  const { candle, categories } = useLoaderData() as { candle: ICandles } & { categories: ICategories[] }

  return (
    <Suspense fallback={<h1 className='no_data_text'>Loading...</h1>}>
      <Await resolve={[candle, categories]}>
        <CandleIdContext.Provider value={candle._id}>
          <section className='candlePage'>
            <h1>עמוד מוצר</h1>
            <section className='candleItem' dir="rtl">
              <CandleImages images={candle.pictures} candleName={candle.name} />
              <section className='candleItem__info-section'>
                <CandleName name={candle.name} />
                <hr />
                <CandlePrice price={candle.price} salePrice={candle.salePrice} />
                <CandleColor colors={candle.colors} />
                <CandleFrag fragrances={candle.fragrances} />
                <CandleDesc description={candle.description} />
                <section>
                  <select defaultValue={candle.type}>
                    {categories.map(ctg => (
                      <option value={ctg.opt}>{ctg.opt}</option>
                    ))}
                  </select>
                </section>
                <section>
                  <select defaultValue={candle.size}>
                    <option value="נרות גדולים">נרות גדולים</option>
                    <option value="נרות בינוניים">נרות בינוניים</option>
                    <option value="נרות קטנים">נרות קטנים</option>
                  </select>
                </section>
              </section>
            </section>
          </section>
        </CandleIdContext.Provider>
      </Await>
    </Suspense>
  )
}

export default DashcoardCandle;

const hendleGetCandle = async (id: string) => {
  const { data: { continueWork, candle } } = await axios.post(`${BASE_API}/candles/get-one-candle`, { id })
  if (continueWork) return candle
  if (!continueWork) return alert("הראה שגיאה, נסה שנית")
}

const handleGetCategories = async () => {
  const { data: { continueWork, categories } } = await axios.get(`${BASE_API}/categories/get-categories`)
  if (continueWork) return categories
  if (!continueWork) return alert("הראה שגיאה, נסה שנית")
}

export const getCandle = async ({ params }: any) => {
  const { candleID } = params
  return defer({
    candle: await hendleGetCandle(candleID),
    categories: await handleGetCategories()
  })
}