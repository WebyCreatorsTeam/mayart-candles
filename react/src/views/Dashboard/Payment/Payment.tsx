import axios from "axios";
import { FC, Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import paymantDesc from './paymentDesc'

interface IPayment {
  _id: string
  desc: string
}
const Payment: FC = () => {
  return (
    <Suspense fallback={<h1 className='no_data_text'>Loading...</h1>}>
      <Await resolve={Payment}>
    <section className='payment'>
      <h1 className='paymentTitle'>
      טקסט עמוד תשלום
      </h1>
      
      {/*<paymantDesc id={Payment._id} desc={Payment.desc} />*/}
        <p className='paymentPara'>
        *לקוחות יקרים, שימו לב שבעת מעבר לתשלום יפתח צ’אט בWhatsapp שם תתבצע ההזמנה מולי. הפריטים שהוספתם לסל יופיעו לכן אין צורך לחזור על ההזמנה. תודה, מיה :)
        </p>
    </section>
    </Await>
    </Suspense>
  )
}

export default Payment


const handleGetPayment = async () => {
  try {
    const { data: { continueWork, aboutText } } = await axios.get("http://localhost:7575/about/get-about")
    if (continueWork) return aboutText
  } catch (error) {
    return alert(error)
  }
}

export const paymentDashLoader = async () => {
  return defer({
    about: await handleGetPayment()
  })
}