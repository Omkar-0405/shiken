import React, { useState } from "react";

const StudentForm = () => {
  const [rollNo, setRollNo] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

const auth = {rollNo , password , role:"student"}
    console.log(auth);
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Roll No."
        value={rollNo}
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
  );
};

export default StudentForm;
