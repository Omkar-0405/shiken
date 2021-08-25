import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./form.css";
let electives = ["IP", "ADBMS", "EL"];

export default function RegularForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [roll, setRoll] = useState("");
  const [sem, setSem] = useState(5);
  const [elective, setElective] = useState(electives[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const exam_form = {
      email,
      name,
      fname,
      mname,
      lname,
      mobile,
      year,
      branch,
      roll,
      sem,
      elective
    };
    console.log(exam_form);
  };

  return (
    <div className="bg">
      <div className="mbody">
        <h2>
          <b>Exam Form </b>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  placeholder="Father Name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
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
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
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
                  placeholder="Mother Name"
                  value={mname}
                  onChange={(e) => setMname(e.target.value)}
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
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
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
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
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
                  placeholder="CE"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
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
                  value={roll}
                  onChange={(e) => setRoll(e.target.value)}
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
                  value={sem}
                  onChange={(e) => setSem(e.target.value)}
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
                  onChange={(e) => setElective(e.target.value)}
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
