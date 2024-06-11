import { FC, useEffect, useState } from 'react'
import { Form, redirect, useNavigation } from 'react-router-dom';
import Input from '../UI/Input';
import axios from 'axios';
/* {
  "email":"admin@weby.com",
  "password":"123ASD!@#"
} */

export interface InputsList {
  type: string
  name: string
  placeholder: string
  autoComp: string
}

export const inputs: Array<InputsList> = [
  { type: "text", name: "email", placeholder: "דואר אלקטרוני", autoComp: "email" },
  { type: "password", name: "password", placeholder: "סיסמא", autoComp: "current-password" },
];

const Login: FC = () => {
  const [submitting, setSubmitting] = useState<boolean>(true);
  const [userDetails, setUserDetails] = useState({ email: "", password: "" })
  const navigation = useNavigation();


  useEffect(() => {
    (() => {
      return setSubmitting(Object.values(userDetails).every((a) => a.length > 0));
    })()
  }, [userDetails]);

  return (
    <div className='authDashboard'>
      <div className="background">
        <div className='auth'>
        <section className='section'>
          <h1>כניסת משתמש - דשבורד לאתר נרות</h1>
          <Form className='authForm' action='/login' method='post'>
            {inputs.map((int, idx) => (
              <Input key={idx} {...int} setUserDetails={setUserDetails} />
            ))}
            <button
              type="submit"
              disabled={!submitting === true ? true : navigation.state === "submitting" ? true : false}
              className={!submitting === true ? "form-btn_disable" : navigation.state === "submitting" ? "form-btn_disable" : "form-btn_active"}
            >
              {navigation.state === "submitting" ? "הפרטים נשלחים" : "כניסה"}
            </button>
          </Form>
        </section>
        </div>
      </div>
    </div>
  )
}

export default Login

const handleLoginUser = async ({ email, password }: IUser) => {
  const { data } = await axios.post(
    `${BASE_API}/admin/login-admin`,
    { email, password },
  );
  return data;
};

export interface IUser {
  email: string, password: string
}

export const formLoginAction = async ({ request }: any) => {
  const formData = await request.formData();

  const user = {
    email: formData.get("email"),
    password: formData.get("password")
  };

  const { continueWork, token, message } = await handleLoginUser(user);

  if (continueWork) {
    await sessionStorage.setItem('token', token)
    return redirect("/dashboard");
  }

  if (!continueWork) return alert(message)
}
