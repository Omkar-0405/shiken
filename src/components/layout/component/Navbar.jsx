import React, { useState } from "react";
import "../layout.css";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import * as GiIcons from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Dropdown from "./Dropdown";
import Dyplogo from '../../../assets/dypatil.png'
function Navbar(props) {
  const [sidebar, setSidebar] = useState(true);
  const [Drop_down, setDrop_down] = useState(false);

  const showDrop_down = () => {
    setDrop_down(!Drop_down);
  };

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
          <div className="nav-right" onClick={showDrop_down}>
            {/* <div>
            <img src="pp.jpg" alt="" />
          </div> */}
            <div>
              <span className="name">ADMIN</span>
            </div>
            <div>
              <RiArrowDropDownLine size="30" />
            </div>
          </div>

          <div className={Drop_down ? "dd-menu active" : "dd-menu"}>
            <div className="App">
              <Dropdown />
            </div>
          </div>
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
