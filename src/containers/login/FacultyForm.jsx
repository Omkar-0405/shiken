import axios from "axios";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { DataToken } from "../../App";
import {
  ToastifyDanger,
  ToastifySuccess,
} from "../../components/Toast/Toastify";
import { login } from "../../context/actions";
import { Context } from "../../context/context";
import { EncryptStringData } from "../../utils/Hash/Hash";

const FacultyForm = (props) => {
  const { state, dispatch } = useContext(Context);
  const [sdrn, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const his = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const auth = {
      sdrn,
      password,
      usertype: "faculty",
    };

    login(auth, dispatch)
      .then(() => {
        if (state?.auth?.isAuthenticated) {
          console.log("login sucessful", state);
          alert(state?.auth?.isAuthenticated);
          let encryptedToken = EncryptStringData(state.auth?.token);
          localStorage.setItem("faculty_token", encryptedToken);
          localStorage.setItem("Role", auth.usertype);
          ToastifySuccess("Login Successfull");
          return setTimeout(() => {
            his.push("/fac_home");
          }, 1500);
        }
      })
      .catch(() => {
        ToastifyDanger("Authentication Fail");
      });

    // axios.post("http://localhost:2000/api/login", auth).then((res) => {
    //   let encryptedToken = EncryptData(res.data.token);
    //   localStorage.setItem("faculty_token", encryptedToken);
    //   localStorage.setItem("Role", auth.usertype);

    //   ToastifySuccess("Login Successfull");

    //   return setTimeout(() => {
    //     his.push("/fac_home");
    //   }, 1500);
    // });
    // .catch((err) => {
    //   //console.log(err)
    //   ToastifyDanger("Authentication Fail");
    // });
    setNumber("");
    setPassword("");
  };

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
