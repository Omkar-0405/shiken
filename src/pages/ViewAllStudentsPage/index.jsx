import React from "react";
import { ToastContainer } from "react-toastify";
import Filter from "../../components/filter/Filters";
import Layout from "../../components/layout/Navbar";
import { StudentTable } from "../../components/table/Table";
import TableHeading from "../../components/table/TableHeading";
import { getStudentsBySem } from "../../context/actions";
import { Context } from "../../context/context";
//import { Row, Col, Form, Button } from "react-bootstrap";
/**
 * @author
 * @function ViewAllStudents
 **/

const ViewAllStudents = () => {
  const { state, dispatch } = React.useContext(Context);
  //  const [seqNo, setSeqNo] = React.useState("100");
  return (
    <div>
      <Layout>
        <ToastContainer />
        <TableHeading />
        <h2 className="ml-3">
          <b>Verification</b>
        </h2>
        <Filter
          onLoadClick={() => {
            getStudentsBySem(state, dispatch);
          }}
        />
        {/* <Row className="ml-2 mt-2">
          <Form.Label column lg={3} sm={6}>
            Seat Sequence Number :
          </Form.Label>
          <Col lg={2} sm={6}>
            <Form.Control
              type="number"
              placeholder="Sequence Number"
              name="First_Name"
              value={seqNo}
              onChange={(e) => setSeqNo(e.target.value)}
              required
            />
          </Col>
        </Row> */}
        <StudentTable />
      </Layout>
    </div>
  );
};

export default ViewAllStudents;
