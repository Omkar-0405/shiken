import React from "react";
import "./layout.css";
import Navbar from "./component/Navbar";

// import Navbar1 from "./Component/navbar1";


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
