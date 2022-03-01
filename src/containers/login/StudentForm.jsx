import axios from "axios";
import React, { useState, useContext } from "react";
import { Next } from "react-bootstrap/esm/PageItem";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { DataToken } from "../../App";
import {
  ToastifyDanger,
  ToastifySuccess,
} from "../../components/Toast/Toastify";
import { Login } from "../../context/actions";
import { Context } from "../../context/context";
import { DecryptObjectData, EncryptStringData } from "../../utils/Hash/Hash";

const StudentForm = (props) => {
  const his = useHistory();
  const { state, dispatch } = useContext(Context);

  const [rollno, setRollNo] = useState("");
  const [password, setPassword] = useState("");
  // let userData = DecryptObjectData(localStorage.getItem("DATA"));

  // let userData = " ";
  // if (DecryptObjectData(localStorage.getItem("DATA")) !== "12345") {
  //   userData = DecryptObjectData(localStorage.getItem("DATA"));
  // } else {
  //   userData = DecryptObjectData(localStorage.getItem("DATA"));
  // }

  const submitHandler = (e) => {
    e.preventDefault();
    const auth = {
      rollno,
      password,
      usertype: "student",
    };

    Login(auth, dispatch).then(
      (res) => {
        let userData = DecryptObjectData(localStorage.getItem("DATA"));
        if (
          // state?.auth?.isAuthenticated && state?.auth?.userType == "student"
          userData?.student &&
          userData?.message === "Authentication Successful"
        ) {
          // let encryptedToken = EncryptStringData(state.auth.token);
          // localStorage.setItem("faculty_token", encryptedToken);
          // localStorage.setItem("Role", state.auth.userType);
          ToastifySuccess("Login Successfull");
          return setTimeout(() => {
            his.push("/stud_home");
          }, 1200);
        } else {
          return his.push("/");
        }
      },
      (err) => console.log("bhai login me kuch gadbad hai", err)
    );

    //clear form
    setRollNo("");
    setPassword("");
  };

  // React.useEffect(() => {
  //   if (
  //     // state?.auth?.isAuthenticated && state?.auth?.userType == "student"
  //     userData?.student &&
  //     userData?.message === "Authentication Successful"
  //   ) {
  //     // let encryptedToken = EncryptStringData(state.auth.token);
  //     // localStorage.setItem("faculty_token", encryptedToken);
  //     // localStorage.setItem("Role", state.auth.userType);
  //     ToastifySuccess("Login Successfull");
  //     return setTimeout(() => {
  //       his.push("/stud_home");
  //     }, 1200);
  //   } else {
  //     return his.push("/");
  //   }
  // }, [state]);

  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Roll No."
          value={rollno}
          onChange={(e) => setRollNo(e.target.value)}
          required
          autoFocus
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn" type="submit">
          Login
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default StudentForm;
