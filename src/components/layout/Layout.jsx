import React from "react";
import "./layout.css";
import Navbar from "./Navbar";


function Layout(props) {
  return (
  <div >
        <Navbar />
          <div className="appBody">
          {props.children}
          </div>

    </div>
  );
}

export default Layout;
