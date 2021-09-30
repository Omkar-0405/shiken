import { Row, Col, Form, Button } from "react-bootstrap";
import "./ViewForm.css";

export const ViewForm = (props) => {
  console.log("props",props.student)
  let studentData 
  // check if props state is not empty 
  if(Object.keys(props.student).length === 0 ){
    studentData =   {
      first_name: "",
      last_name: "",
      roll_no: "",
      sr_no: 3,
      status: true,
    } //use user Object of istate 
  }
  else {

    studentData = props.student
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
                    <Form.Control type="text" placeholder="Student Name"
                    value ={`${studentData.first_name}  ${studentData.last_name} `}
                    />
                  </Col>
                </Row>

                <Row>
                  <Form.Label column lg={4} sm={12}>
                    Roll No. :
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control type="text" placeholder="Roll no" 
                    value = {studentData.roll_no}
                    />
                  </Col>
                </Row>

                <Row>
                  <Form.Label column lg={4} sm={12}>
                    Branch :
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control type="text" placeholder="Branch" />
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
                    <Form.Control type="text" placeholder="Year" />
                  </Col>
                </Row>

                <Row>
                  <Form.Label column lg={12} sm={12}>
                    Semester :
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control type="text" placeholder="Sem" />
                  </Col>
                </Row>

                <Row>
                  <Form.Label column lg={12} sm={12}>
                    Email-ID :
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control type="text" placeholder="Email" />
                  </Col>
                </Row>

                <Row>
                  <Form.Label column lg={12} sm={12}>
                    Mobile number :
                  </Form.Label>
                  <Col lg={12} sm={12}>
                    <Form.Control type="text" placeholder="Phone Number" />
                  </Col>
                </Row>
              </Col>
            </Row>

            {props.children}
            {/* for buttons */}
          </fieldset>
        </Form>
          
      </div>
    </div>
  );
}
