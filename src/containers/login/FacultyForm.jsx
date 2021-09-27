import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ToastifyDanger, ToastifySuccess } from "../../components/Toast/Toastify";

const FacultyForm = () => {
  const [sdrn, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const his = useHistory()


  const submitHandler = (e) => {
    e.preventDefault();

    const auth = {
      sdrn, password, usertype:"faculty"
    }
   

    axios.post('http://localhost:2000/api/login', auth )
        .then((res)=>{
          localStorage.setItem( "faculty_token",res.data.token)
          localStorage.setItem( "Role", res.data.faculty.Role)
          ToastifySuccess ( "Login Successfull")
          return setTimeout(() => {
            his.push("/fac_home") 
          }, 1500);
        })
        .catch((err) =>{
          ToastifyDanger( "Authentication Fail" )
        })
};

  return (<>
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
    <ToastContainer/>
    </>
  );
};

export default FacultyForm;
