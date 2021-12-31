import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { AddSubjApi } from '../../api/api';
import Navbar from '../../components/layout/Navbar'



const AddSubj = () => {
    const baseURL = "http://localhost:2000/api/";
    const [Add, setAdd] = useState({
        
        Department:" ",
        Sem: [] ,
        Subject_code:" ",
        Subject_name:" ",
        Subject_shortname:" ",
        Year : [] ,
        Elective:false,
        
      });


      function handleChange(e){
        const{value, name}=e.target;
        setAdd(prevValue=>({...prevValue,[name]:value}))
        
      }
      
      const handleSubmit = (e) => {
    
        e.preventDefault();
        AddSubjApi(baseURL +`subject/addSubject`, Add )
        console.log(Add)

      };



    return (
       <Navbar> 
        <div className="bg">
        <div className="mbody">
          <h2>
            <b>Add Subject </b>
          </h2>
  
          <Form onSubmit={handleSubmit}>
            <fieldset className="sec">
              {/* <legend className="w-auto p-1">
                <b>Student Details</b>
              </legend> */}
              <br />
  
              <Row>
                <Form.Label column lg={2} sm={12}>
                 Department:
                </Form.Label>
                <Col lg={4} sm={12}>
                  <Form.Control
                    type="text"
                    placeholder= " eg. CE, EXTC"
                    name="Department"
                    value={Add.Department}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
  
              <Row>
                <Form.Label column lg={2} sm={12}>
                  Sem:
                </Form.Label>
                <Col lg={4} sm={12}>
                  <Form.Control
                    type="text"
                    placeholder= "eg. 5 "
                    name="Sem"
                    value={Add.Sem}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
  
              <Row>
                <Form.Label column lg={2} sm={12}>
                 Subject code:
                </Form.Label>
                <Col lg={4} sm={12}>
                  <Form.Control
                    type="text"
                    placeholder="Subject code"
                    name="Subject_code"
                    value={Add.Subject_code}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
  
              <Row>
                <Form.Label column lg={2} sm={12}>
                Subject name:
                </Form.Label>
                <Col lg={4} sm={12}>
                  <Form.Control
                    type="text"
                    placeholder="Subject_name"
                    name="Subject_name"
                    value={Add.Subject_name}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
  
              <Row>
                <Form.Label column lg={2} sm={12}>
                Subject shortname:
                </Form.Label>
                <Col lg={4} sm={12}>
                  <Form.Control
                    type="text"
                    placeholder="Subject_shortname"
                    name="Subject_shortname"
                    value={Add.Subject_shortname}
                    onChange={handleChange}
                    required
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
                    placeholder="eg. TE"
                    name="Year"
                    value={Add.Year}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              
              <Row>
                <Form.Label column lg={2} sm={12}>
                Elective:
                </Form.Label>
                <Col lg={4} sm={12}>
                  <Form.Control
                    type="text"
                    placeholder="Elective"
                    name="Elective"
                    value={Add.Elective}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
             
              <Button className="m-3" variant="danger" type="submit">
                Submit
              </Button>
            </fieldset>
          </Form>
        </div>
        
      </div>
      <ToastContainer/>
      </Navbar>  
    )
}

export default AddSubj
