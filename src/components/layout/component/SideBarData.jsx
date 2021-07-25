import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
export const SideBarData = [
  {
    title: "Home",
    icon: <AiFillHome size={25} />,
    link: "/",
  },
  {
    title: "Login",
    icon: <FaInfoCircle size={22} />,
    link: "/login",
  },
];
