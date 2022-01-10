import React from "react";
import { useContext } from "react";
import Filter from "../../components/filter/Filters";
import Layout from "../../components/layout/Navbar";
import { generateHallTicket } from "../../context/actions";
import { Context } from "../../context/context";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
export const GenerateHallTicket = (props) => {
  const { state, dispatch } = useContext(Context);
  const [seqNo, setSeqNo] = React.useState("100");
  return (
    <div>
      <Layout>
        <ToastContainer />
        <h2 className="ml-1 mt-2">
          <b>Generate Hall Tickets</b>
        </h2>
        <Filter
          onLoadClick={() => {
            generateHallTicket({ state, seqNo, dispatch });
          }}
          hallTicket={true}
        />
        <Row className="ml-2 mt-2">
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
        </Row>
      </Layout>
    </div>
  );
};
