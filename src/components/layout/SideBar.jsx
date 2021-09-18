import React from "react";
import { Link } from "react-router-dom";
import "./layout.css";
import { SideBarData, Student } from "./SideBarData";
function SideBar() {
  return (
    <div className="SideBar">
      <ul className="SideBarList">
        {/* 
        map routes as per context roles ! check auth 
        */}

        {(localStorage.getItem("Role")==="student")?
          <>{Student.map((val, key) => {
          return (
            <div>
              <Link
                className="row"
                key={key}
                id={window.location.pathname === val.link ? "active" : ""}
                to={val.link}
              >
                <div id="icon"> {val.icon}</div>
                <div id="title" className="sideLinks">{val.title}</div>
              </Link>

            </div>
          );
        })}</>
        :
        <>
        {SideBarData.map((val, key) => {
          return (
            <div>
              <Link
                className="row"
                key={key}
                id={window.location.pathname === val.link ? "active" : ""}
                to={val.link}
              >
                <div id="icon"> {val.icon}</div>
                <div id="title" className="sideLinks">{val.title}</div>
              </Link>

            </div>
          );
        })}
        </>
      }
      </ul>
    </div>
  );
}

export default SideBar;
