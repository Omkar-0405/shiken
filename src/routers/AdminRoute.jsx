import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import {Store} from "../context/context";

const AdminRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, userType } = useContext(Store);
    return (
        <Route
            {...rest}
            component={(props) =>
                isAuthenticated && userType === "student" ? (
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

export default AdminRoute;