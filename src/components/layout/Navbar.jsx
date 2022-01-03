import React, { useState, useContext } from "react";
import "./layout.css";
import SideBar from "./SideBar";
import { Link, useHistory } from "react-router-dom";
import * as GiIcons from "react-icons/gi";
// import { RiArrowDropDownLine } from "react-icons/ri";
import Dyplogo from "../../assets/dypatil.png";
import { MenuItem } from "./MenuItem";
import IdleUser from "../IdleUser/IdleUser";
import { logout } from "../../context/actions";
import { Context } from "../../context/context";
import { FaUserAlt } from "react-icons/fa";

function Navbar(props) {
  const [sidebar, setSidebar] = useState(true);
  const his = useHistory();
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const { state, dispatch } = useContext(Context);
  // const [flag, setFlag] = useState(false);

 

  const logoutUser = async() => {
    await logout(dispatch)
    his.push("/");
    console.log("state", state)
  };

  // React.useEffect(() => {
  //   console.log("use effect ", state);
  //   if (state?.auth?.isAuthenticated === false) {
  //     his.push("/");
  //   }
  // }, [flag]);

  // need optimization is this rerendering
  return (
    <IdleUser>
      <div className="layout">
        <div className="sticky">
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
              <li id="name">
                <FaUserAlt /> <img src="pp.jpg" alt="" />
                <span>{state?.user?.First_name} </span>
                <span>{state?.user?.First_Name} </span>
              </li>
              <li className="menu">
                <div>
                  <Link id="menu">
                    {/* <div id="icon" >{val.icon}</div> */}
                    <div id="title" onClick={logoutUser}>
                      {MenuItem[0].title}
                    </div>
                  </Link>
                </div>
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

        <div className={sidebar ? "appBody" : "appBody1"}>{props.children}</div>
      </div>
    </IdleUser>
  );
}

export default Navbar;
