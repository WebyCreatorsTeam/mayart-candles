import { FC, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

interface IPaymentDesc {
  id: string;
  desc: string;
}

const PaymentDesc: FC<IPaymentDesc> = ({ id, desc }) => {
  const [editDesc, setEditDesc] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [paymentDesc, setPaymentDesc] = useState<string>(desc);

  const handleChangeTitle = async () => {
    try {
      setLoader(true);
      if (paymentDesc.length === 0) return alert("שם הנר לא יכול להיות ריק");
      const token = sessionStorage.getItem("token");
      // const { data: { continueWork, message } } = await axios.patch(`${BASE_API}/candles/change-candle-name?token=${token}`, { id, name: aboutTitle })
      const {
        data: { continueWork, message }
      } = await axios.patch(
        `http://localhost:7575/payment/update-payment-text?token=${token}`,
        { id, paymentDesc },
      );
      if (continueWork) {
        alert(message);
        return setEditDesc(false);
      }
      return alert(message);
    } catch (error) {
      alert(error);
    } finally {
      setLoader(false);
    }
  };
  return (
    <section className="aboutDash__editDesc">
      {!editDesc && (
        <>
          <p className="paymentPara">{paymentDesc}</p>
          <button onClick={() => setEditDesc(true)}>
            <EditIcon color="primary" />
          </button>
        </>
      )}
      {editDesc && (
        <>
          <textarea
            rows={5}
            cols={90}
            defaultValue={paymentDesc}
            className="updateInput"
            onChange={(ev: any) => setPaymentDesc(ev.target.value)}
          ></textarea>
          <button
            className="change"
            onClick={handleChangeTitle}
          // className={loader ? "form-btn_disable" : "form-btn_active"}
          >
            {loader ? "המעדכן" : "עדכן"}
          </button>
          <button className="cancle"
            onClick={() => {
              setEditDesc(false);
              setPaymentDesc(desc);
            }}
          // className={loader ? "form-btn_disable" : "form-btn_active"}
          >
            בטל
          </button>
        </>
      )}
    </section>
  );
};

export default PaymentDesc;
