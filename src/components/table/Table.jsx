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

export const StudentTable = () => {
  const { state, dispatch } = React.useContext(Context);
  const [isVerified, setVerified] = React.useState(false);
  const history = useHistory();
  const verify = (rollNo) => {
    // alert(rollNo);
    verifyByRoll(rollNo, state, dispatch);
    setVerified(!isVerified);

    // dispatch verify by roll no
  };

  // React.useEffect(() => {
  //   console.log("loaded");
  // }, [state]);
  const openDetails = (student) => {
    history.push({
      pathname: `/student/${student.roll_no}`,
      state: { student },
    });
  };

  return (
    <>
      <div class="container-fluid ">
        <br />
        <Card style={{ textAlign: "center" }}>
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
                      onClick={() => openDetails(item)}
                    >
                      <BsEyeFill size={22} />
                    </button>{" "}
                  </Col>

                  <Col className="cb" md={2}>
                    <button
                      type="button"
                      className="btn btn-light btn-block"
                      onClick={() => verify(item.Roll_No)}
                    >
                      {item.Form_Status == "Approved" ? (
                        <FcApproval size={25} />
                      ) : (
                        <VscVerified size={25} />
                      )}
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
