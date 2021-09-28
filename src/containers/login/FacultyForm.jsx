import axios from "axios";
import React, {  useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { DataToken } from "../../App";
import { ToastifyDanger, ToastifySuccess } from "../../components/Toast/Toastify";
import {  EncryptData } from "./HashedToken/Hash";



const FacultyForm = (props) => {
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
          let encryptedToken = EncryptData(res.data.token)
          localStorage.setItem( "faculty_token", encryptedToken )
          // localStorage.setItem( "Role", res.data.faculty.Role)
          ToastifySuccess ( "Login Successfull")
          setTimeout(() => { his.push("/fac_home")}, 1500);
          return(
            <>
              <DataToken.Provider value={res.data.token}>
                {props.children}
              </DataToken.Provider>
            </>
          ) 
             
          
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
