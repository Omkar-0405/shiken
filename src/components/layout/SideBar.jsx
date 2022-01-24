import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";
import { DecryptObjectData } from "../../utils/Hash/Hash";
import "./layout.css";
import { StudentRoutes, FacultyRoutes } from "./SideBarData";

function SideBar() {
  const { state } = React.useContext(Context);
  const userData = DecryptObjectData(localStorage.getItem("DATA"));
  console.log("userdata in nav", userData);
  return (
    <div className="SideBar">
      <ul className="SideBarList">
        {/* 
        map routes as per context roles ! check auth 
        */}

        {userData?.faculty ? (
          <>
            {FacultyRoutes.map((val, key) => {
              return (
                <div>
                  <Link
                    className="row"
                    key={key}
                    id={window.location.pathname === val.link ? "active" : ""}
                    to={val.link}
                  >
                    <div id="icon"> {val.icon}</div>
                    <div id="title" className="sideLinks">
                      {val.title}
                    </div>
                  </Link>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {StudentRoutes.map((val, key) => {
              return (
                <div>
                  <Link
                    className="row"
                    key={key}
                    id={window.location.pathname === val.link ? "active" : ""}
                    to={val.link}
                  >
                    <div id="icon"> {val.icon}</div>
                    <div id="title" className="sideLinks">
                      {val.title}
                    </div>
                  </Link>
                </div>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
}

export default SideBar;
