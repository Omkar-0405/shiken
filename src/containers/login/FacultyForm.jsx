import React, { useState } from "react";

const FacultyForm = () => {
  const [sdrn, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
const auth = {sdrn , password , role:"faculty"}
console.log(auth);
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
