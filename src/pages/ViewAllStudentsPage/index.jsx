import React from 'react'
import Filter from '../../components/filter/Filters'
import Layout from '../../components/layout/Layout'
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
        <Filter />
        <BasicTable/>
      </Layout>
    </div>
   )
  }


export default ViewAllStudents