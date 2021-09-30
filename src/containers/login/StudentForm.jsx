import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {  ToastContainer } from 'react-toastify';
import { DataToken } from "../../App";
import { ToastifyDanger, ToastifySuccess } from "../../components/Toast/Toastify";

import {  EncryptData } from "./HashedToken/Hash";

const StudentForm = (props) => {
  
  const his = useHistory()
  const [rollno, setRollNo] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const auth = {
      rollno, password, usertype: "student"
    }
    axios.post(' http://localhost:2000/api/login ', auth )
        .then((res)=>{
          console.log("original token :" , res.data.token)
          let encryptedToken = EncryptData( res.data.token )

          localStorage.setItem( "student_token",encryptedToken)
          localStorage.setItem("Role", auth.usertype)

          ToastifySuccess ( "Login Successfull")
          
          return setTimeout(() => {
            his.push('/stud_home')
          },1500)
          
        })
        
        .catch((err) =>{
          ToastifyDanger( "Authentication Fail" )
        })

    //clear form
    setRollNo("")
    setPassword("")
  };

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

        <button className="btn" type="submit" >Login</button>

      </form>
      <ToastContainer />
    </>
  );
};

export default StudentForm;
