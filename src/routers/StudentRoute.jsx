import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Store } from "../context/context";

const StudentRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(Store);
  return (
    <Route
      {...rest}
      component={(props) =>
        auth?.isAuthenticated && auth?.userType === "student" ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" exact={true} />
        )
      }
    />
  );
};

export default StudentRoute;
