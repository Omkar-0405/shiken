import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "../../assets/MOCK_DATA.json";
import { VerificationButton } from "../button/Button";
import { Link, Redirect, useHistory } from "react-router-dom";
import { BsFillPersonFill, BsEyeFill } from "react-icons/bs";
import { FcApproval } from "react-icons/fc";
import { VscVerified } from "react-icons/vsc";
import "./table.css";
import { Card, Row, Col } from "react-bootstrap";
import { Context } from "../../context/context";
import { verifyByRoll } from "../../context/actions";
import axios from "axios";

const HallTicketGenerateColumn = () => {
  const { state, dispatch } = React.useContext(Context);
  const download = (Roll_No) => {
    axios
      .request({
        url: `http://localhost:2000/api/hallTicket/?Roll_No=${Roll_No}`,
        method: "GET",
        responseType: "blob", //important
      })

      .then(({ data }) => {
        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "file.pdf"); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div class="container-fluid ">
        <br />
        <Card style={{ textAlign: "center" }}>
          <div className="d-flex  ">
            <Col className="cs_n" lg={2}>
              Sr. No
            </Col>
            <Col className="cs_n" lg={2}>
              Roll No.
            </Col>
            <Col className="cs_n" lg={3}>
              Name
            </Col>
            <Col className="cs_n" lg={3}>
              View Hall ticket
            </Col>
            <Col className="cs" lg={2}>
              Verified
            </Col>
          </div>
        </Card>
        <br />
        {state.studentList.lenght != 0
          ? state.studentList.map((item, index) => (
              <Card key={index} style={{ textAlign: "center" }}>
                <div
                  className="pl-3 p-0 d-flex justify-content-between align-items-center"
                  style={{ fontWeight: "bold" }}
                >
                  <Col className="h6" md={1}>
                    {/* <BsFillPersonFill /> */}
                    {+index + 1}
                  </Col>
                  <Col className="h6" md={2}>
                    {item.Roll_No}
                  </Col>
                  <Col className="h6" md={4}>
                    {item.First_Name} {item.Last_Name}
                  </Col>

                  <Col className="cb" md={2}>
                    <button
                      type="button"
                      className="btn btn-light btn-block"
                      //   onClick={() => openDetails(item)}
                    >
                      <BsEyeFill size={22} />
                    </button>
                  </Col>

                  <Col className="cb" md={2}>
                    <button
                      type="button"
                      className="btn btn-light btn-block"
                      onClick={() => download(item.Roll_No)}
                    >
                      Download
                    </button>
                  </Col>
                </div>
              </Card>
            ))
          : "No records"}
      </div>
    </>
  );
};

export default HallTicketGenerateColumn;
