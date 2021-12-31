import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "../../assets/MOCK_DATA.json";
import { VerificationButton } from "../button/Button";
import {Link, Redirect,useHistory} from 'react-router-dom'
import { BsFillPersonFill, BsEyeFill } from "react-icons/bs";
import {FcApproval} from 'react-icons/fc'
import {VscVerified} from 'react-icons/vsc'
import "./table.css";
import { Card, Row, Col } from "react-bootstrap";

export const BasicTable = () => {
const [isVerified, setVerified] = React.useState(false)
const history = useHistory()
const verify =( ) =>{
  setVerified(!isVerified)
}

const openDetails = (student) => {
  history.push({
    pathname: `/student/${student.roll_no}`,
    state: {student}
  });
};

  return (
    <>
<div class="container-fluid ">
      <br />
      <Card style={{textAlign:"center"}}>
        <div className="d-flex  ">
          <Col className="cs" lg={2}>
            {" "}
            Sr. No{" "}
          </Col>
          <Col className="cs" lg={2}>
            {" "}
            Roll No.{" "}
          </Col>
          <Col className="cs" lg={4}>
            {" "}
            Name{" "}
          </Col>
          <Col className="cs" lg={2}>
            {" "}
           View Details{" "}
          </Col>
          <Col className="cs" lg={2}>
            {" "}
            Verified{" "}
          </Col>
        </div>
      </Card>
      <br />


      {MOCK_DATA.map((item, index) => (
										 <Card key={index} style={{textAlign:"center"}}>
                     <div
                       className="pl-3 p-0 d-flex justify-content-between align-items-center"
                       style={{ fontWeight: "bold" }}
                     >
                       <Col className="h6" md={2}>
                       {/* <BsFillPersonFill /> */}
                        {item.sr_no}
                       </Col>
                       <Col className="h6" md={2}>
                         {item.roll_no.slice(0,2)} 
                       </Col>
                       <Col className="h6" md={4}>
                         {item.first_name} {" "} {item.last_name}
                       </Col>
             
                       <Col className="cb" md={2}>
                         <button type="button" className="btn btn-light btn-block" onClick={()=>openDetails(item)}>
                           <BsEyeFill  size={22}/> 
                         </button>{" "}
                       </Col>
             
                       <Col className="cb" md={2}>
                         <button type="button" className="btn btn-light btn-block" onClick={verify}>
                          {isVerified? <FcApproval size={25} />:<VscVerified size={25}/>} 
                         </button>
                       </Col>
                     </div>
                   </Card>
									))}
     
    }

      
    </div>




    </>
  );
};
