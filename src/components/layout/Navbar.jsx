import React, { useState } from "react";
import "./layout.css";
import SideBar from "./SideBar";
import { Link, useHistory } from "react-router-dom";
import * as GiIcons from "react-icons/gi";
// import { RiArrowDropDownLine } from "react-icons/ri";
import Dyplogo from '../../assets/dypatil.png'
import { MenuItem } from './MenuItem'
import IdleUser from "../IdleUser/IdleUser";

function Navbar(props) {
  const [sidebar, setSidebar] = useState(true);
 const his =useHistory()
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (

    <IdleUser>
    <div className="layout">
      <div className="sticky" >
        <nav className="Navbar">
          <div className="nav-left">
            <div className="menu-button">
              <div className="logo">
                <Link to="/stud_home">
                  <img src={Dyplogo} alt="Logo" />
                </Link>
              </div>
            </div>
          </div>

          <ul className="nav-right">

            <li className="menu" >
              
                  <div>
                    <Link  id="menu" >
                      {/* <div id="icon" >{val.icon}</div> */}
                      <div id="title" 
                      onClick= {()=>{
                        localStorage.clear();
                        return(
                          his.push('/')
                        )
                      }} >
                      {MenuItem[0].title}</div>
                    </Link>
                  </div>
              
            </li>
            <li id="name" >
              <img src="pp.jpg" alt="" />
              <span >Name </span>
            </li>
          </ul>
        </nav>

        <nav className="navbar1 ">
          <div className="hamburger">
            <GiIcons.GiHamburgerMenu color="white" onClick={showSidebar} />
          </div>
        </nav>
                        
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <SideBar />
        </nav>


      </div>

      <div className={sidebar ? "appBody" : "appBody1"}>
        {props.children}
      </div>
    </div>
  </IdleUser>
  );
}

export default Navbar;
