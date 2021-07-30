import React from "react";
import { FaInfoCircle, FaWpforms } from "react-icons/fa";
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
  {
    title: "Exam Form",
    icon: <FaWpforms size={22} />,
    link: "/form",
  },
];
