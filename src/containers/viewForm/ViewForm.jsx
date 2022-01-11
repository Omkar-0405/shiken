import React, { useState, useContext } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import {
  Done,
  EditButton,
  VerificationButton,
} from "../../components/button/Button";
import "./ViewForm.css";
import { verifyByRoll } from "../../context/actions";
import { Context } from "../../context/context";
import { useHistory } from "react-router-dom";
import {
  ToastifyDanger,
  ToastifySuccess,
} from "../../components/Toast/Toastify";
import { ToastContainer } from "react-toastify";

export const ViewForm = (props) => {
  const { state, dispatch } = useContext(Context);
  const [disabled, setDisabled] = useState(true);
  const [status, setStatus] = useState(false);
  React.useEffect(() => {
    if (status == true) {
      let verifiedStudent = state?.studentList.find(
        (student) => student?.Roll_No == props.student?.Roll_No
      ); // found form data of student with roll no in props
      verifiedStudent?.Form_Status == "Approved" // checking status in updated state
        ? ToastifySuccess(`Succefully verified`)
        : ToastifyDanger(`Couldn't verify, Try Again`);

      console.log("real status after sucess", state.studentList);
    }
    // console.log("useeffect status", status);
  }, [status]);
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
      Seat_No: 0,
      Sem: 0,
      Year: "",
    };
  } else {
    studentData = props.student;
  }
  const EditBtn = () => {
    setDisabled(!disabled);
  };

  const Verify = (rollNo) => {
    rollNo
      ? verifyByRoll(rollNo, state, dispatch).then(() => setStatus(true))
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
                      disabled={disabled}
                    />
                  </Col>
                </Row>
                <Row>
                  <Form.Label column lg={4} sm={12}>
                    Current Form Status
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control
                      type="text"
                      value={studentData.Form_Status}
                      placeholder="Branch"
                      disabled={disabled}
                    />
                  </Col>
                </Row>
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
                      disabled={disabled}
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
                      disabled={disabled}
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
                      disabled={disabled}
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
                      disabled={disabled}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <div
              className="btn-sec"
              style={{ display: "flex", justifyContent: "right" }}
            >
              {disabled ? <EditButton click={EditBtn} /> : ""}
              {disabled && status ? (
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
