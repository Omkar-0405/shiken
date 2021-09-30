import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Done, EditButton, VerificationButton } from "../../components/button/Button";
import "./ViewForm.css";

export const ViewForm = (props) => {
  const [disabled, setDisabled] = useState(true)

  const EditBtn = () => {
    setDisabled(!disabled)
  }

  const DoneEditForm = () => {
    setDisabled(!disabled)
  }

  const Verified = ( ) =>{

  }


  return (
    <div className="bg">
      <div className="mbody">
        <h2>
          <b>Verification </b>
        </h2>

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
                    <Form.Control type="text" placeholder="Student Name" disabled= {disabled} />
                  </Col>
                </Row>

                <Row>
                  <Form.Label column lg={4} sm={12}>
                    Roll No. :
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control type="text" placeholder="Roll no" disabled= {disabled} />
                  </Col>
                </Row>

                <Row>
                  <Form.Label column lg={4} sm={12}>
                    Branch :
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control type="text" placeholder="Branch" disabled= {disabled}/>
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
                    <Form.Control type="text" placeholder="Year" disabled= {disabled}/>
                  </Col>
                </Row>

                <Row>
                  <Form.Label column lg={12} sm={12}>
                    Semester :
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control type="text" placeholder="Sem" disabled= {disabled}/>
                  </Col>
                </Row>

                <Row>
                  <Form.Label column lg={12} sm={12}>
                    Email-ID :
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control type="text" placeholder="Email" disabled= {disabled} />
                  </Col>
                </Row>

                <Row>
                  <Form.Label column lg={12} sm={12}>
                    Mobile number :
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control type="text" placeholder="Phone Number" disabled= {disabled}/>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="btn-sec" style={{ display: "flex", justifyContent: "right" }}>
              {disabled? <EditButton click = {EditBtn} /> : "" }
              {disabled? <VerificationButton click={Verified}  /> : <Done click={ DoneEditForm } /> }
               
            </div>

            {props.children}
            {/* for buttons */}
          </fieldset>
        </Form>
          
      </div>
    </div>
  );
}
