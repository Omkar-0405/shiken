import React, { useContext } from "react";
import { Switch, useHistory } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { statePersist } from "../context/actions";
import { Context } from "../context/context";
import Types from "../context/types";
import { DecryptObjectData } from "../utils/Hash/Hash";

const StudentProtectedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const userData = DecryptObjectData(localStorage.getItem("DATA"));

  console.log("bhai", userData);

  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (
            // state?.auth?.isAuthenticated &&
            // state?.auth?.userType == "student"
            userData?.student &&
            userData?.message === "Authentication Successful"
          ) {
            return <Component />;
          } else {
            return history.push("/");
          }
        }}
      />
    </div>
  );
};

export default StudentProtectedRoute;
