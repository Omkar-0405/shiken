import React from "react";
import "./filters.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CustumButton } from "../button/Button";
import {FiSearch} from "react-icons/fi";
function Filter() {
  return (
    <div className="filter">

      <Container flex fluid className="mg-3">
        <hr />
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
            </Col>
            <Col lg="4">
      <CustumButton variant="outline-danger" name="Load" icon={<FiSearch/>}/>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Filter;
