import React from "react";
import { FaInfoCircle, FaWpforms } from "react-icons/fa";
import { AiFillHome ,AiOutlineFileDone ,AiFillFileAdd} from "react-icons/ai";
import { GoChecklist } from "react-icons/go";
import {IoIosOpen} from 'react-icons/io';
import {GrDocumentCsv} from 'react-icons/gr';

//public links , student route links , faculty route links are exported separtely --- map them as per role in navbar.jsx
export const Student = [
  {
    title: "Home",
    icon: <AiFillHome size={25} />,
    link: "/stud_home",
  },
  
  {
    title: "Exam Form",
    icon: <FaWpforms size={22} />,
    link: "/form",
  },
  

  {
    title: "Details",
    icon: <IoIosOpen size={22} />,
    link: "/details",
  },
  

];


export const SideBarData = [
  {
    title: "Home",
    icon: <AiFillHome size={25} />,
    link: "/fac_home",
  },
  
  {
    title: "Student List",
    icon: <GoChecklist size={25} />,
    link: "/form-status",
  },

  {
    title: "Generate Hall Ticket",
    icon: <AiOutlineFileDone size={25}/>,
    link: "/hall-ticket",
  },
  {
    title: "Upload File",
    icon: <AiFillFileAdd size={25}/>,
    link: "/upload-csv",
  },
  {
    title: "Add Subjects",
    icon: <AiFillFileAdd size={25}/> ,
    link: "/addsubj",
  }

];
