import axios from "axios";
import { FC, Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import PaymentDesc from "./paymentDesc";
import { BASE_API } from "../../../../utils/api-connect";
// import { BASE_API } from "../../../utils/api-connect";

interface IPayment {
  _id: string;
  text: string;
}
const Payment: FC = () => {
  const { payment } = useLoaderData() as { payment: IPayment };

  return (
    <Suspense fallback={<h1 className="no_data_text">Loading...</h1>}>
      <Await resolve={payment}>
        <section className="payment">
          <h1 className="paymentTitle">טקסט עמוד תשלום</h1>
          <PaymentDesc id={payment._id} desc={payment.text} />
        </section>
      </Await>
    </Suspense>
  );
};

export default Payment;

const handleGetPayment = async () => {
  try {
    const { data: { continueWork, paymentText }, } = await axios.get(`https://mayart-candles-api.vercel.app/payment/get-payment`)
    if (continueWork) return paymentText;
  } catch (error) {
    return alert(error);
  }
};

export const paymentDashLoader = async () => {
  return defer({
    payment: await handleGetPayment(),
  });
};
