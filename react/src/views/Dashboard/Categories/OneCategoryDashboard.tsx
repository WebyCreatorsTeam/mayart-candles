import axios from 'axios'
import { FC, Suspense } from 'react'
import { Await, defer, useLoaderData, useParams } from 'react-router-dom'
import { ICandles } from '../MainDashboard'
import CandleToShow from '../UI/CandleToShow'
import { BASE_API } from '../../../utils/api-connect'

const OneCategoryDashboard: FC = () => {
  const { candles }: any = useLoaderData() as { candles: Array<ICandles> }
  const { categotyName } = useParams()
  return (
    <Suspense fallback={<h1 className='no_data_text'>Loading...</h1>}>
      <Await resolve={candles}>
        <div className='candlePage'>
          <h1>{categotyName}</h1>
          <section className='gridImg'>
            {candles.map((cdl: ICandles) => (
              <CandleToShow cdl={cdl} key={cdl._id} />
            ))}
          </section>
        </div>
      </Await>
    </Suspense>
  )
}

export default OneCategoryDashboard;

const hendleGetCategoryCandles = async (categoryType: string) => {
  const { data: { continueWork, categoryCandles } } = await axios.post(`${BASE_API}/candles/get-candles-by-category`, { categoryType })
  if (continueWork) return categoryCandles
  if (!continueWork) return alert("הראה שגיאה, נסה שנית")
}

export const getCategoryLoader = async ({ params }: any) => {
  const { categotyName } = params
  return defer({
    candles: await hendleGetCategoryCandles(categotyName)
  })
}