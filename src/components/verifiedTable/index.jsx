import React from 'react'
import Table from 'react-bootstrap/Table'
import MOCK_DATA from "../../assets/MOCK_DATA.json";

const Tablee = (props) => {
  return(
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
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>

  </tbody>
</Table>


    </div>
   )
  }


export default Tablee