import React from 'react'
import Filter from '../../components/filter/Filters'
import Layout from '../../components/layout/Navbar'
// import { BasicTable } from '../../components/table/Table'

export const GenerateHallTicket = (props) => {
  return(
    <div>
      <Layout>
        <h2 className="ml-3 mt-2">
          <b>Generate Hall Tickets</b>
        </h2>
        <Filter hallTicket={true}/>
        {/* <BasicTable/> */}
      </Layout>
    </div>
   )

 }