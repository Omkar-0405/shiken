import axios from "axios";
import React, { useState, useContext } from "react";
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

const FacultyForm = (props) => {
  const { state, dispatch } = useContext(Context);
  const [sdrn, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const his = useHistory();

  // const userData = DecryptObjectData(localStorage.getItem("DATA"));
  // let userData = " ";
  // if (DecryptObjectData(localStorage.getItem("DATA")) !== "12345") {
  //   userData = DecryptObjectData(localStorage.getItem("DATA"));
  // } else {
  //   userData = DecryptObjectData(localStorage.getItem("DATA"));
  // }

  const submitHandler = (e) => {
    e.preventDefault();
    const auth = {
      sdrn,
      password,
      usertype: "faculty",
    };

    Login(auth, dispatch).then(
      (res) => {
        let userData = DecryptObjectData(localStorage.getItem("DATA"));
        if (
          // state?.auth?.isAuthenticated && state?.auth?.userType == "Faculty"
          userData?.faculty &&
          userData.message === "Authentication Successful"
        ) {
          // let encryptedToken = EncryptStringData(state.auth.token);
          // localStorage.setItem("faculty_token", encryptedToken);
          // localStorage.setItem("Role", state.auth.userType);
          ToastifySuccess("Login Successfull");
          return setTimeout(() => {
            his.push("/fac_home");
          }, 1200);
        } else {
          return his.push("/");
        }
      },
      (err) => console.log("bhai login me kuch gadbad hai", err)
    );

    setNumber("");
    setPassword("");
  };

  // React.useEffect(() => {
  //   if (
  //     // state?.auth?.isAuthenticated && state?.auth?.userType == "Faculty"
  //     userData?.faculty &&
  //     userData.message === "Authentication Successful"
  //   ) {
  //     // let encryptedToken = EncryptStringData(state.auth.token);
  //     // localStorage.setItem("faculty_token", encryptedToken);
  //     // localStorage.setItem("Role", state.auth.userType);
  //     ToastifySuccess("Login Successfull");
  //     return setTimeout(() => {
  //       his.push("/fac_home");
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
          placeholder="SDRN No."
          value={sdrn}
          onChange={(e) => setNumber(e.target.value)}
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

export default FacultyForm;
