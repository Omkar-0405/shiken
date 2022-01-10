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
import { login } from "../../context/actions";
import { Context } from "../../context/context";
import { EncryptStringData } from "../../utils/Hash/Hash";

const StudentForm = (props) => {
  const his = useHistory();
  const { state, dispatch } = useContext(Context);
  const [rollno, setRollNo] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const auth = {
      rollno,
      password,
      usertype: "student",
    };

    login(auth, dispatch);

    //clear form
    setRollNo("");
    setPassword("");
  };

  React.useEffect(() => {
    if (state?.auth?.isAuthenticated && state?.auth?.userType == "student") {
      console.log("state after login", state);
      if (state?.auth?.isAuthenticated) {
        console.log("original token :", state.auth.token);
        let encryptedToken = EncryptStringData(state.auth.token);
        localStorage.setItem("student_token", encryptedToken);
        localStorage.setItem("Role", state.auth.usertype);
        ToastifySuccess("Login Successfull");
        return setTimeout(() => {
          his.push("/stud_home");
        }, 1200);
      }
    } else if (state.auth.isAuthenticated && state.auth.userType == "Faculty") {
      return his.push("/fac_home");
    }
  }, [state]);

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
