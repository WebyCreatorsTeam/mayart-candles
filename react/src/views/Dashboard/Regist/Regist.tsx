import { FC, useEffect, useState } from "react";
import { IUser, InputsList } from "../Login/Login";
import { Form, redirect, useNavigation } from "react-router-dom";
import Input from "../UI/Input";
import axios from "axios";

export const inputs: Array<InputsList> = [
  { type: "text", name: "name", placeholder: "שם", autoComp: "nickname" },
  {
    type: "text",
    name: "email",
    placeholder: "דואר אלקטרוני",
    autoComp: "email",
  },
  {
    type: "text",
    name: "password",
    placeholder: "סיסמא",
    autoComp: "new-password",
  },
];

const Regist: FC = () => {
  const [submitting, setSubmitting] = useState<boolean>(true);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    name: "",
  });
  const navigation = useNavigation();

  useEffect(() => {
    (() => {
      return setSubmitting(
        Object.values(userDetails).every((a) => a.length > 0),
      );
    })();
  }, [userDetails]);

  return (
    <section className="register">
      <h2 className="addStyle">הוספת גישה לאתר זה</h2>
      <p className="title">
        הוספת גישה מאפשרת למשתמשים נוספים לצפות בדשבורד ולערוך את האתר. תוכלי
        להוסיף ולמחוק משתמשים בכל עת.
      </p>
      <Form className="regisForm" action="/dashboard/regist" method="post">
        {inputs.map((int, idx) => (
          <Input key={idx} {...int} setUserDetails={setUserDetails} />
        ))}
        <button
          type="submit"
          disabled={
            !submitting === true
              ? true
              : navigation.state === "submitting"
                ? true
                : false
          }
          className={
            !submitting === true
              ? "form-btn_disable"
              : navigation.state === "submitting"
                ? "form-btn_disable"
                : "form-btn_active"
          }
        >
          {navigation.state === "submitting" ? "הפרטים נשלחים" : "הוסף משתמש"}
        </button>
      </Form>
    </section>
  );
};

export default Regist;

const hendleRegistUser = async ({ name, email, password }: IUserReg) => {
  const { data } = await axios.post(
    ` https://mayart-candles-api.vercel.app/admin/reg-admin`,
    { name, email, password },
  );
  return data;
};

interface IUserReg extends IUser {
  name: string;
}

export const formRegistAction = async ({ request }: any) => {
  const formData = await request.formData();

  const user = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { continueWork, message } = await hendleRegistUser(user);

  if (continueWork) {
    alert(message);
    return redirect("/dashboard/admins");
  }

  if (!continueWork) return alert(message);
};
