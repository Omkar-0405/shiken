import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const StudentForm = () => {
  
  const his = useHistory()
  const [rollno, setRollNo] = useState("");
  const [password, setPassword] = useState("");
  
  

  const submitHandler = (e) => {
    e.preventDefault();
    const auth = {
      rollno, password, usertype:"student"
    }
    axios.post(' http://localhost:4000/api/login ', auth )
        .then((res)=>{
          
          localStorage.setItem( "student_token", res.data.token)
          localStorage.setItem( "Role", res.data.student.Role)
          
          return his.push("/stud_home")
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
  );
};

export default StudentForm;
