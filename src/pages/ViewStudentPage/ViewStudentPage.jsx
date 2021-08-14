import React from 'react'
import { EditButton, VerificationButton } from '../../components/button/Button'
import Layout from '../../components/layout/Layout'
import { ViewForm } from '../../containers/viewForm/ViewForm'
/**
* @author
* @function ViewStudent
**/

const ViewStudentPage = (props) => {
  return (
    <>
      <Layout>
        <ViewForm >
          <div className="btn-sec" style={{ display: "flex", justifyContent: "right" }}>
            <EditButton />
            <VerificationButton />

          </div>
        </ViewForm>

      </Layout>
    </>
  )
}


export default ViewStudentPage