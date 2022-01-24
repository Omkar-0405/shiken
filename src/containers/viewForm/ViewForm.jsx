import React, { useState, useContext } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import {
  Done,
  EditButton,
  VerificationButton,
} from "../../components/button/Button";
import "./ViewForm.css";
import { subjectData, verifyByRoll } from "../../context/actions";
import { Context } from "../../context/context";
import { useHistory } from "react-router-dom";
import {
  ToastifyDanger,
  ToastifySuccess,
} from "../../components/Toast/Toastify";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

export const ViewForm = (props) => {
  const { state, dispatch } = useContext(Context);
  const [disabled, setDisabled] = useState(true);
  const [isVerified, setVerified] = useState(false);
  const [EachStudSubjData, setEachStudSubjData] = useState([]);

  React.useEffect(() => {
    if (isVerified == true) {
      let verifiedStudent = state.studentList.find(
        (student) => student?.Roll_No == props.student?.Roll_No
      ); // to get data of student with roll no in props
      console.log("verified student in state", verifiedStudent); // checking status in updated state
      verifiedStudent?.Form_Status == "Approved"
        ? DoneVerification()
        : ToastifyDanger(`Couldn't verify, Try Again`);
    }
    console.log("status of all after verification", state.studentList);
  }, [isVerified]);

  useEffect(() => {
    console.log("view student props", props);
    const sem = props.student.Sem;
    const Elective = () => {
      if (props.student.Elective) return 1;
      else return 0;
    };
    subjectData(sem, Elective).then(
      (res) => {
        console.log("Subjets", res.data);
        return setEachStudSubjData(res.data);
      },
      (err) => {
        alert(err);
      }
    );
  }, []);

  console.log("EachStudSubjData", EachStudSubjData);
  const SubjLength = EachStudSubjData.length;

  const history = useHistory();
  // console.log("props", props);
  let studentData;
  if (Object.keys(props.student).length === 0) {
    studentData = {
      Department: "",
      Elective: "",
      Email: "",
      Father_Name: "",
      First_Name: "",
      Form_Status: "",
      Last_Name: "",
      Mobile_No: 0,
      Mother_Name: "",
      Roll_No: "",
      Seat_No: "Not avaiable",
      Sem: 0,
      Year: "",
    };
  } else {
    studentData = props.student;
    if (studentData?.Form_Status === "Approved") {
      // setVerified(true);
    }
  }
  const EditBtn = () => {
    setDisabled(!disabled);
  };

  const Verify = (rollNo) => {
    rollNo
      ? verifyByRoll(rollNo, state, dispatch)
          .then(() => {
            console.log("res after action", state);
            setVerified(true);
          })
          .catch(() => setVerified(false))
      : ToastifyDanger("Can't Verify Empty");

    // setDisabled(!disabled);
  };

  const DoneEditForm = () => {
    setDisabled(!disabled);
    // yet to call put api if edited
    ToastifySuccess("Changes Saved");
    return setTimeout(() => {
      history.push("/form-status");
    }, 2000);
  };
  const DoneVerification = () => {
    setVerified(true);
    ToastifySuccess(`Succefully verified`);
    return setTimeout(() => {
      history.push("/form-status");
    }, 2000);
  };

  return (
    <div className="bg">
      <div className="mbody">
        <h2>
          <b>Verification </b>
        </h2>
        <ToastContainer />
        <Form>
          <fieldset className="sec">
            <legend className="w-auto p-1">Students Details</legend>

            <Row>
              {/* whole body row */}
              <Col>
                {/* left section */}
                <Row>
                  <Form.Label column lg={4} sm={12}>
                    Student Name:
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control
                      type="text"
                      placeholder="Student Name"
                      readOnly={disabled}
                      value={`${studentData.First_Name} ${studentData.Father_Name} ${studentData.Last_Name} `}
                    />
                  </Col>
                </Row>

                <Row>
                  <Form.Label column lg={4} sm={12}>
                    Roll No. :
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control
                      type="text"
                      placeholder="Roll no"
                      readOnly={disabled}
                      value={studentData.Roll_No}
                    />
                  </Col>
                </Row>

                <Row>
                  <Form.Label column lg={4} sm={12}>
                    Branch :
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control
                      type="text"
                      value={studentData.Department}
                      placeholder="Branch"
                      readOnly={disabled}
                    />
                  </Col>
                </Row>
                <Row>
                  <Form.Label column lg={8} sm={12}>
                    Current Form Status:
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control
                      type="text"
                      value={studentData.Form_Status}
                      placeholder="Branch"
                      readOnly={disabled}
                    />
                  </Col>
                </Row>
                {/* extra */}
                {EachStudSubjData.map((data, key) => {
                  if (key < Math.round(SubjLength / 2))
                    return (
                      <Row>
                        <Form.Label column lg={8} sm={12}>
                          Subject {key + 1}
                        </Form.Label>
                        <Col lg={12} sm={12}>
                          <Form.Control
                            type="text"
                            value={data.Subject_shortname}
                            placeholder={`Subject ${key + 1}`}
                            readOnly={disabled}
                          />
                        </Col>
                      </Row>
                    );
                })}
              </Col>

              {/* RIGHT COLUMN STARTS HERE 
          style={{ borderLeftStyle:'double', borderColor:"#f59096",borderWidth:'3px'}}
          */}

              <Col className="fordiv">
                <Row>
                  <Form.Label column lg={12} sm={12}>
                    Academic Year :
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control
                      type="text"
                      value={studentData.Year}
                      placeholder="Year"
                      readOnly={disabled}
                    />
                  </Col>
                </Row>

                <Row>
                  <Form.Label column lg={12} sm={12}>
                    Semester :
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control
                      type="text"
                      value={studentData.Sem}
                      placeholder="Sem"
                      readOnly={disabled}
                    />
                  </Col>
                </Row>

                <Row>
                  <Form.Label column lg={12} sm={12}>
                    Email-ID :
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control
                      type="text"
                      value={studentData.Email}
                      placeholder="Email"
                      readOnly={disabled}
                    />
                  </Col>
                </Row>

                <Row>
                  <Form.Label column lg={12} sm={12}>
                    Mobile number :
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control
                      type="text"
                      value={studentData.Mobile_No}
                      placeholder="Phone Number"
                      readOnly={disabled}
                    />
                  </Col>
                </Row>
                {/* extra */}
                {EachStudSubjData.map((data, key) => {
                  if (key >= Math.round(SubjLength / 2))
                    return (
                      <Row>
                        <Form.Label column lg={8} sm={12}>
                          Subject {key + 1}
                        </Form.Label>
                        <Col lg={12} sm={12}>
                          <Form.Control
                            type="text"
                            value={data.Subject_shortname}
                            placeholder={`Subject ${key + 1}`}
                            readOnly={disabled}
                          />
                        </Col>
                      </Row>
                    );
                })}
              </Col>
            </Row>
            <div
              className="btn-sec"
              style={{ display: "flex", justifyContent: "right" }}
            >
              {disabled ? <EditButton click={EditBtn} /> : ""}
              {disabled && studentData?.Form_Status !== "Approved" ? (
                <VerificationButton click={() => Verify(studentData.Roll_No)} />
              ) : (
                <Done click={DoneEditForm} />
              )}
            </div>

            {props.children}
            {/* for buttons */}
          </fieldset>
        </Form>
      </div>
    </div>
  );
};
