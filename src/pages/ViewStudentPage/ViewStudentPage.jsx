import React from 'react'
import { EditButton, VerificationButton } from '../../components/button/Button'
import Layout from '../../components/layout/Navbar'
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
      {/* pass student obj as props and make editable student={student} */}
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