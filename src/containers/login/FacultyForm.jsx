import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
          return his.push("/fac_home")
        })
        .catch((err) =>{
          console.log(err)
          alert("Invalid LoginId or Password")
        })
};

  return (
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
  );
};

export default FacultyForm;
