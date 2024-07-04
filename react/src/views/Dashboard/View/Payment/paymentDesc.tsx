import { FC, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { BASE_API } from "../../../../utils/api-connect";
// import { BASE_API } from "../../../utils/api-connect";

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
      const { data: { continueWork, message } } = await axios.patch(`${BASE_API}/payment/update-payment-text?token=${token}`, { id, paymentDesc });
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
        <section className="aboutDash__editTitle--editWindow">
          <textarea
            defaultValue={paymentDesc}
            className="updateInput"
            onChange={(ev: any) => setPaymentDesc(ev.target.value)}
          ></textarea>
          <div className="aboutDash__editTitle--editWindow--btns">
            <button
              onClick={handleChangeTitle}
              className={loader ? "action-loading" : "agree-btn"}
            >
              {loader ? "המעדכן" : "עדכן"}
            </button>
            <button
              className={loader ? "action-loading" : "cancel-btn"}
              onClick={() => {
                setEditDesc(false);
                setPaymentDesc(desc);
              }}
            >
              בטל
            </button>
          </div>
        </section>
      )}
    </section>
  );
};

export default PaymentDesc;