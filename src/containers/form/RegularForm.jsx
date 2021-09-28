import React,{ useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Submit_Examform } from "../../api/api";
import "./form.css";


let Electives = ["IP", "ADBMS", "EL"];
const baseURL = "http://localhost:2000/api";


export default function Veriform() {
  const [student, setStudent]=useState({
    Email:"",
    First_Name:"",
    Father_Name:"",
    Mother_Name:"",
    Last_Name:"",
    Mobile_No:"",
    Year:"",
    Department:"",
    Roll_No:"",
    Sem:"",
    Elective:Electives[0]
  });

  function handleChange(e){
    const{value, name}=e.target;
    setStudent(prevValue=>({...prevValue,[name]:value}))
    
  }

  const handleSubmit = (e) => {
    
    e.preventDefault();
    Submit_Examform(baseURL +`/examForm/submit`, student )
    console.log(student)
  };

  return (
    <div className="bg">
      <div className="mbody">
        <h2>
          <b>Exam Form </b>
        </h2>

        <Form onSubmit={handleSubmit}>
          <fieldset className="sec">
            {/* <legend className="w-auto p-1">
              <b>Students Details</b>
            </legend> */}
            <br />

            <Row>
              <Form.Label column lg={2} sm={12}>
                Email-ID:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="example@mail.com"
                  name="Email"
                  value={student.Email}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                First Name:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="First_Name"
                  value={student.First_Name}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Father Name:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="Father_Name"
                  value={student.Father_Name}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Last Name:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="Last_Name"
                  value={student.Last_Name}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Mother Name:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="Mother_Name"
                  value={student.Mother_Name}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Mobile Number:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="8888"
                  name="Mobile_No"
                  value={student.Mobile_No}
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
                  value={student.Year}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Department:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  name="Department"
                  value={student.Department}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Roll No.:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="1234"
                  name="Roll_No"
                  value={student.Roll_No}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Semester:
              </Form.Label>
              <Col lg={4} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="5"
                  name="Sem"
                  value={student.Sem}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>

            <Row>
              <Form.Label column lg={2} sm={12}>
                Elective
              </Form.Label>
              <Col lg={4} sm={12}>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="Elective"
                  onChange={handleChange}
                  required
                >
                  {Electives.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
            <Button className="m-3" variant="danger" type="submit">
              Submit
            </Button>
          </fieldset>
        </Form>
      </div>
      
    </div>
  );
}



// import { useState } from "react";
// import { Row, Col, Form, Button } from "react-bootstrap";
// import { Submit_Examform, baseURL } from "../../api/api";
// import "./form.css";


// let Electives = ["IP", "ADBMS", "EL"];

// export default function RegularForm() {
//   const [Email, setEmail] = useState("");
//   const [First_Name, setName] = useState("");
//   const [Father_Name, setFname] = useState("");
//   const [Mother_Name, setMname] = useState("");
//   const [Last_Name, setLname] = useState("");
//   const [Mobile_No, setMobile] = useState("");
//   const [Year, setYear] = useState("");
//   const [Department, setDepartment] = useState("");
//   const [Roll_No, setRoll] = useState("");
//   const [Sem, setSem] = useState(5);
//   const [Elective, setElective] = useState(Electives[0]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const exam_form = {
//       Email,
//       First_Name,
//       Father_Name,
//       Mother_Name,
//       Last_Name,
//       Mobile_No,
//       Year,
//       Department,
//       Roll_No,
//       Sem,
//       Elective
//     };
//     console.log(exam_form);
//     Submit_Examform(baseURL +`examForm/submit`, exam_form )
    
//   };

  

//   return (
//     <div className="bg">
//       <div className="mbody">
//         <h2>
//           <b>Exam Form </b>
//         </h2>

//         <Form onSubmit={handleSubmit}>
//           <fieldset className="sec">
//             {/* <legend className="w-auto p-1">
//               <b>Students Details</b>
//             </legend> */}
//             <br />

//             <Row>
//               <Form.Label column lg={2} sm={12}>
//                 Email-ID:
//               </Form.Label>
//               <Col lg={4} sm={12}>
//                 <Form.Control
//                   type="text"
//                   placeholder="example@mail.com"
//                   value={Email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </Col>
//             </Row>

//             <Row>
//               <Form.Label column lg={2} sm={12}>
//                 First Name:
//               </Form.Label>
//               <Col lg={4} sm={12}>
//                 <Form.Control
//                   type="text"
//                   placeholder="Name"
//                   value={First_Name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </Col>
//             </Row>

//             <Row>
//               <Form.Label column lg={2} sm={12}>
//                 Father Name:
//               </Form.Label>
//               <Col lg={4} sm={12}>
//                 <Form.Control
//                   type="text"
//                   placeholder="Father Name"
//                   value={Father_Name}
//                   onChange={(e) => setFname(e.target.value)}
//                 />
//               </Col>
//             </Row>

//             <Row>
//               <Form.Label column lg={2} sm={12}>
//                 Last Name:
//               </Form.Label>
//               <Col lg={4} sm={12}>
//                 <Form.Control
//                   type="text"
//                   placeholder="Last Name"
//                   value={Last_Name}
//                   onChange={(e) => setLname(e.target.value)}
//                 />
//               </Col>
//             </Row>

//             <Row>
//               <Form.Label column lg={2} sm={12}>
//                 Mother Name:
//               </Form.Label>
//               <Col lg={4} sm={12}>
//                 <Form.Control
//                   type="text"
//                   placeholder="Mother Name"
//                   value={Mother_Name}
//                   onChange={(e) => setMname(e.target.value)}
//                 />
//               </Col>
//             </Row>

//             <Row>
//               <Form.Label column lg={2} sm={12}>
//                 Mobile number:
//               </Form.Label>
//               <Col lg={4} sm={12}>
//                 <Form.Control
//                   type="text"
//                   placeholder="8888"
//                   value={Mobile_No}
//                   onChange={(e) => setMobile(e.target.value)}
//                 />
//               </Col>
//             </Row>

//             <Row>
//               <Form.Label column lg={2} sm={12}>
//                 Year:
//               </Form.Label>
//               <Col lg={4} sm={12}>
//                 <Form.Control
//                   type="text"
//                   placeholder="TE"
//                   value={Year}
//                   onChange={(e) => setYear(e.target.value)}
//                 />
//               </Col>
//             </Row>

//             <Row>
//               <Form.Label column lg={2} sm={12}>
//                 Department:
//               </Form.Label>
//               <Col lg={4} sm={12}>
//                 <Form.Control
//                   type="text"
//                   placeholder="CE"
//                   value={Department}
//                   onChange={(e) => setDepartment(e.target.value)}
//                 />
//               </Col>
//             </Row>

//             <Row>
//               <Form.Label column lg={2} sm={12}>
//                 Roll No.:
//               </Form.Label>
//               <Col lg={4} sm={12}>
//                 <Form.Control
//                   type="text"
//                   placeholder="1234"
//                   value={Roll_No}
//                   onChange={(e) => setRoll(e.target.value)}
//                 />
//               </Col>
//             </Row>

//             <Row>
//               <Form.Label column lg={2} sm={12}>
//                 Semester:
//               </Form.Label>
//               <Col lg={4} sm={12}>
//                 <Form.Control
//                   type="text"
//                   placeholder="5"
//                   value={Sem}
//                   onChange={(e) => setSem(e.target.value)}
//                 />
//               </Col>
//             </Row>

//             <Row>
//               <Form.Label column lg={2} sm={12}>
//                 Elective
//               </Form.Label>
//               <Col lg={4} sm={12}>
//                 <select
//                   className="form-select"
//                   aria-label="Default select example"
//                   onChange={(e) => setElective(e.target.value)}
//                 >
//                   {Electives.map((item) => (
//                     <option value={item} key={item}>
//                       {item}
//                     </option>
//                   ))}
//                 </select>
//               </Col>
//             </Row>
//             <Button className="m-3" variant="danger" type="submit">
//               Submit
//             </Button>
//           </fieldset>
//         </Form>
//       </div>
//     </div>
//   );
// }