import React ,{useState} from "react";
import "./filters.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { CustumButton } from "../button/Button";
import {FiSearch} from "react-icons/fi";

function Filter(props) {
  // know from where it is sent! using props
  const [semester,setSemester] = useState("")
  const [department,setDepartment] = useState("")

  // call actions here and update context as per that response ! 

const handleFilter = () =>{
  let filter = {
    semester,
    department
  }
  if( semester && department){
    //dispatch actions!
  }
  console.log("filter",filter)
}

  return (
    <div className="filter">

      <Container flex fluid className="mg-3">
        <hr />
        <Form onSubmit={handleFilter()}>
          <Row>

            <Col lg="4">
              <Form.Group >
                <Form.Label>Department</Form.Label>
                <Form.Control as="select" 
                value = {department} 
                onChange ={(e) => setDepartment(e.target.value)}
                >
                  <option>Department</option>
                  <option value="CE">Computer</option>
                  <option value="EXTC">EXTC</option>
                  <option value="ELE">Electronics</option>
                </Form.Control>
              </Form.Group>


            </Col>
            <Col lg="4">
              <Form.Group >
                <Form.Label>Semester</Form.Label>
                <Form.Control as="select"  
                value = {semester}
                onChange ={(e) => setSemester(e.target.value)}
                >
                  <option>Semester</option>
                  <option value="1">I</option>
                  <option value="2">II</option>
                  <option value="3">III</option>
                  <option value="4">IV</option>
                  <option value="5">V</option>
                  <option value="6">VI</option>
                  <option value="7">VII</option>
                  <option value="8">VIII</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col lg="4">
      <Button variant="outline-danger" name="Load" icon={<FiSearch/>} style={{marginTop:"2rem"}} onClick={handleFilter()}>
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
