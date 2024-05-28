import React from 'react'
//import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { getAllUser, sendUserData } from "./userAsync";
// import { selectUser } from "./loginSlice";

const Login = () => {
  
  // const dispatch = useAppDispatch();
  // const users = useAppSelector(selectUser);

  // console.log(users);

  // useEffect(() => {
  //   dispatch(getAllUser());
  // }, []);

  // const hendleGetUserData = async (e: any) => {
  //   e.preventDefault();

  //   const username = e.target.elements.name.value;
  //   const password = e.target.elements.password.value;

  //   console.log(username, password);

  //   dispatch(sendUserData({ username, password }));
  // };
  return (
    <div className="background">
      <h1>כניסת משתמש - דשבורד לאתר נרות</h1>
    {/*<form onSubmit={hendleGetUserData}>*/}
    <form>
        <p>דואר אלקטרוני</p>
      <input className="email" type="text" name="email" />
      <p>סיסמה</p>
      <input className="password" type="password" name="password"/>
      <button type="submit">כניסה</button>
    </form>
  </div>
  )
}

export default Login