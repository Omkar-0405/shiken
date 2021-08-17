import React from "react";
import "./filters.css";
import { Container, Row, Col,Form } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

function Filter() {
  return (
    <div className="filter">
      
  <Container flex fluid className="mg-3">
  <hr/>
  <Form>
        <Row>
        
          <Col lg="4">
 <Form.Group >
 <Form.Label>Department</Form.Label>
  <Form.Control as="select" >
    <option>Department</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Form.Control>
  </Form.Group>
          
            {/* <Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
              Department
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Comps</Dropdown.Item>
                <Dropdown.Item href="#/action-2">IT</Dropdown.Item>
                <Dropdown.Item href="#/action-3">ENTC</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </Col>
          <Col lg="4">
            <Form.Group >
            <Form.Label>Semester</Form.Label>
              <Form.Control as="select" >
              <option>Semester</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Control>
                </Form.Group>
            {/* <Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
                Sem
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </Col>
          <Col>
            okk?
          </Col>
        </Row>
        </Form>
        </Container>
    </div>
  );
}

export default Filter;
