import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../context/context";
import { userData } from "../../routers/AdminProtectedRoute";
import { EncryptObjectData } from "../../utils/Hash/Hash";
import FacultyForm from "./FacultyForm";
import "./LoginForm.css";
import StudentForm from "./StudentForm";

const LoginForm = () => {
  const his = useHistory();
  const { state, dispatch } = useContext(Context);

  const [toggle, settoggle] = useState(true);

  const toggleHandlerFaculty = () => {
    settoggle(false);
  };

  const toggleHandlerStudent = () => {
    settoggle(true);
  };

  const formHandler = () => {
    if (toggle) {
      return <StudentForm />;
    } else {
      return <FacultyForm />;
    }
  };

  return (
    <div className="login-form">
      <h1>RAIT EXAM SOFTWARE</h1>
      <div className="container">
        <div className="main">
          <div className="form-img">
            <img
              src="https://pbs.twimg.com/profile_images/1126020755739762688/lYBMKeYy.png"
              alt=""
            />
          </div>
          <div className="content">
            <h2>Login</h2>
            <div className="choices">
              <button onClick={toggleHandlerStudent} className="btn-1">
                Student
              </button>
              <button onClick={toggleHandlerFaculty} className="btn-1">
                Admin
              </button>
            </div>
            {formHandler()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
