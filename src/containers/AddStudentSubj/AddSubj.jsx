import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { AddSubjApi } from '../../api/api';
import Navbar from '../../components/layout/Navbar'



const AddSubj = () => {
    const baseURL = "http://localhost:2000/api/";
    const [AddSubj, setAddSubj] = useState({
        
        Department:" ",
        Sem: 5 ,
        Subject_code:" ",
        Subject_name:" ",
        Subject_shortname:" ",
        Year : 3 ,
        Elective:false,
        
      });


      function handleChange(e){
        const{value, name}=e.target;
        setAddSubj(prevValue=>({...prevValue,[name]:value}))
        
      }
      
      const handleSubmit = (e) => {
    
        e.preventDefault();
        AddSubjApi(baseURL +`/subject/addSubject`, AddSubj )
        console.log(AddSubj)
      };



    return (
       <Navbar> 
        <div className="bg">
        <div className="mbody">
          <h2>
            <b>Exam Form </b>
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
                    placeholder="example@mail.com"
                    name="Department"
                    value={AddSubj.Department}
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
                    placeholder= "5"
                    name="Sem"
                    value={AddSubj.Sem}
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
                    value={AddSubj.Subject_code}
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
                    value={AddSubj.Subject_name}
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
                    value={AddSubj.Subject_shortname}
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
                    placeholder="TE"
                    name="Year"
                    value={AddSubj.Year}
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
                    value={AddSubj.Elective}
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
      </Navbar>  
    )
}

export default AddSubj
