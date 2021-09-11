import React from 'react'
import Filter from '../../components/filter/Filters'
import Layout from '../../components/layout/Navbar'
import { BasicTable } from '../../components/table/Table'
import TableHeading from '../../components/table/TableHeading'

/**
* @author
* @function ViewAllStudents
**/

const ViewAllStudents = (props) => {
  return(
    <div>
      <Layout>
        <TableHeading />
        <h2 className="ml-3">
          <b>Verification</b>
        </h2>
        <Filter />
        <BasicTable/>
      </Layout>
    </div>
   )
  }


export default ViewAllStudents