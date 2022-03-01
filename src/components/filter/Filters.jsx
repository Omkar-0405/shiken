import React, { useState, useContext } from "react";
import "./filters.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { CustumButton } from "../button/Button";
import { FiSearch } from "react-icons/fi";
import { Context } from "../../context/context";
import { applyFilter } from "../../context/actions";

function Filter(props) {
  // know from where it is sent! using props
  const { state, dispatch } = useContext(Context);
  const [semester, setSemester] = useState(state.filter?.semester ?? null);
  const [department, setDepartment] = useState(
    state.filter?.department ?? null
  );

  React.useEffect(() => {
    if (semester || department) {
      handleFilter();
    }
  }, [semester, department]);

  const handleFilter = () => {
    let filter = {
      semester: semester,
      department: department,
    };
    console.log("filter", filter);
    if (semester && department) {
      dispatch(applyFilter(filter));
    }
  };

  return (
    <div className="filter">
      <Container flex fluid className="mg-3">
        <hr />
        <Form onSubmit={props.onLoadClick}>
          <Row>
            <Col lg="4">
              <Form.Group>
                <Form.Label>Department</Form.Label>
                <Form.Control
                  required
                  as="select"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value={null}>Select Department</option>
                  <option value="comps">Computer</option>
                  <option value="IT">Information Technology</option>
                  <option value="EXTC">EXTC</option>
                  <option value="ELE">Electronics</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col lg="4">
              <Form.Group>
                <Form.Label>Semester</Form.Label>
                <Form.Control
                  required
                  as="select"
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                >
                  <option value={null}>Select Semester</option>
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
            {/* can create more filter options here */}
            <Col lg="4">
              <Button
                variant="outline-danger"
                name="Load"
                icon={<FiSearch />}
                style={{ marginTop: "2rem" }}
                onClick={props.onLoadClick}
              >
                Load <FiSearch />
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Filter;
