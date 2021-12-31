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

    login(auth, dispatch);

    setNumber("");
    setPassword("");
  };

  React.useEffect(() => {
    if (state?.auth?.isAuthenticated && state?.auth?.userType == "Faculty") {
      let encryptedToken = EncryptStringData(state.auth.token);
      localStorage.setItem("faculty_token", encryptedToken);
      localStorage.setItem("Role", state.auth.userType);
      ToastifySuccess("Login Successfull");
      return setTimeout(() => {
        his.push("/fac_home");
      }, 1200);
    } else if (
      state?.auth?.isAuthenticated &&
      state?.auth?.userType == "student"
    ) {
      return his.push("/stud_home");
    }
  }, [state]);
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
