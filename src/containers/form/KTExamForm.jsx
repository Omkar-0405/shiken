import React,{ useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./form.css";
let electives = ["IP", "ADBMS", "EL"];

export default function Veriform() {
  

  const [student, setStudent]=useState({
    email:"",
    name:"",
    fname:"",
    mname:"",
    lname:"",
    mobile:"",
    year:"",
    branch:"",
    roll:"",
    sem:"",
    elective:electives[0]
  });

  function handleChange(e){
    const{value, name}=e.target;
    setStudent(prevValue=>({...prevValue,[name]:value}))
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(student);
  };

  return (
    <div className="bg">
      <div className="mbody">
        <h2>
          <b>Verification </b>
        </h2>

        <Form onSubmit={handleSubmit}>
          <fieldset className="sec">
            {/* <legend className="w-auto p-1">
              <b>Students Details</b>
            </legend> */}
            <br />

            <Row>
              <Form.Label column lg={2} sm={12}>
                Email-ID:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="example@mail.com"
                  name="email"
                  value={student.email}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                First Name:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={student.name}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Father Name:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="fname"
                  value={student.fname}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Last Name:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="lname"
                  value={student.lname}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Mother Name:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="mname"
                  value={student.mname}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Mobile number:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="8888"
                  name="mobile"
                  value={student.mobile}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Year:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="TE"
                  name="year"
                  value={student.year}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Branch:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  name="branch"
                  value={student.branch}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Roll No.:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="1234"
                  name="roll"
                  value={student.roll}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Semester:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="5"
                  name="sem"
                  value={student.sem}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Elective
              </Form.Label>
              <Col lg={4} sm={12}>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="elective"
                  onChange={handleChange}
                >
                  {electives.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
            <Button className="m-3" variant="danger" type="submit">
              Submit
            </Button>
          </fieldset>
        </Form>
      </div>
      
    </div>
  );
}
