import { Row, Col, Form } from "react-bootstrap";
import "./ViewForm.css";

export const ViewForm = () => {
  return (
    <div className="bg">
      <div className="mbody">
        <h2>
          <b>Verification </b>
        </h2>

        <Form>
          <fieldset className="sec">
            <legend className="w-auto p-1">Students Details</legend>
            <br />
            <Row>
              <Form.Label column lg={2} sm={12}>
                Student Name:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control type="text" placeholder="xyz xyz xyz" />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Roll No.:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control type="text" placeholder="xyz xyz xyz" />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Branch:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control type="text" placeholder="xyz xyz xyz" />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Academic Year:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control type="text" placeholder="xyz xyz xyz" />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Semester:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control type="text" placeholder="xyz xyz xyz" />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Email-ID:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control type="text" placeholder="xyz xyz xyz" />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Mobile number:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control type="text" placeholder="xyz xyz xyz" />
              </Col>
            </Row>
          </fieldset>
        </Form>

        <Form>
          <fieldset className="sec">
            <legend className="w-auto p-1">Examination Details</legend>
            <br />
            <Row>
              <Form.Label column lg={2} sm={12}>
                Student Name:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="Not Filled"
                  value="xyz xyz xyz"
                />
              </Col>
            </Row>
            <Row>
              <Form.Label column lg={2} sm={12}>
                Normal Text :
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control type="text" placeholder="Normal text" />
              </Col>
            </Row>
          </fieldset>
        </Form>
      </div>
    </div>
  );
}
