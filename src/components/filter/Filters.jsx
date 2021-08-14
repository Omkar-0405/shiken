import React from "react";
import "./filters.css";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

function Filter() {
  return (
    <div className="filter">
      <Container>
        <Row>
          <Col>
            {/* <h4>Department</h4> */}
            <Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
              Department
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Comps</Dropdown.Item>
                <Dropdown.Item href="#/action-2">IT</Dropdown.Item>
                <Dropdown.Item href="#/action-3">ENTC</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            {/* <h4>Sem</h4> */}
            <Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
                Sem
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            {/* <h4>text1</h4> */}
            <Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
              Other
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Filter;
