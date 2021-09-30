import React ,{useState} from "react";
import "./filters.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { CustumButton } from "../button/Button";
import {FiSearch} from "react-icons/fi";

function Filter() {
  const [filter,setFilter] = useState({})
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
                  <option value="1">Computer</option>
                  <option value="2">Electronics</option>
                  <option value="3">E&Tc</option>
                </Form.Control>
              </Form.Group>


            </Col>
            <Col lg="4">
              <Form.Group >
                <Form.Label>Semester</Form.Label>
                <Form.Control as="select" >
                  <option>Semester</option>
                  <option value="1">I</option>
                  <option value="2">II</option>
                  <option value="3">III</option>
                  <option value="3">IV</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col lg="4">
      <Button variant="outline-danger" name="Load" icon={<FiSearch/>} style={{marginTop:"2rem"}} >
    Load <FiSearch/>
      </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Filter;
