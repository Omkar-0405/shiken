import React, { useState } from "react";
import "../layout.css";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import * as GiIcons from "react-icons/gi";
// import { RiArrowDropDownLine } from "react-icons/ri";
import Dyplogo from '../../../assets/dypatil.png'
import {MenuItem} from './MenuItem'

function Navbar(props) {
  const [sidebar, setSidebar] = useState(true);
  
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="layout">
      <div>
        <nav className="Navbar">
          <div className="nav-left">
            <div className="menu-button">
              <div className="logo">
                <Link to="/home">
                  <img src={Dyplogo} alt="Logo" />
                </Link>
              </div>
            </div>
          </div>
         
          <ul className="nav-right">
            
            <li className="menu" >
              {MenuItem.map((val,key) => {
                return (
                  <div>
                    <a href="/login" key={key} id="menu" >
                      {/* <div id="icon" >{val.icon}</div> */}
                      <div id="title" >{val.title}</div>
                    </a>
                  </div>
                );

              } )}
            </li>
            <li id="name" >
              <img src="pp.jpg" alt="" />
              <span > Admin </span>
            </li>
          </ul>
         
        </nav>

        <nav className="navbar1">
          <div className="hamburger">

            <GiIcons.GiHamburgerMenu color="white" onClick={showSidebar} />

          </div>
        </nav>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div className="App">
            <SideBar />
          </div>
        </nav>
      </div>
      
      <div className="appBody">
        {props.children}
      </div>

    </div>
  );
}

export default Navbar;
