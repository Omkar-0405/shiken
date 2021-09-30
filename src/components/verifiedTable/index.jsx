import React from 'react'
import Table from 'react-bootstrap/Table'
import MOCK_DATA from "../../assets/MOCK_DATA.json";

const Tablee = (props) => {

  return (
    <div>Table
      <Table striped bordered hover responsive variant="">

        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {
          console.log(MOCK_DATA),
            MOCK_DATA.map(student => {
             return (<tr key={student.sr_no}>
                <td>{student.sr_no}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.status}</td>
              </tr>)
            })

          }


        </tbody>
      </Table>


    </div>
  )
}


export default Tablee