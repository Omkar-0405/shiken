import React from 'react'
import { EditButton, VerificationButton } from '../../components/button/Button'
import Layout from '../../components/layout/Navbar'
import { ViewForm } from '../../containers/viewForm/ViewForm'
import { useLocation } from "react-router-dom";

/**
* @author
* @function ViewStudent
**/

const ViewStudentPage = (props) => {
  const location = useLocation()
  console.log("loc",location.state)
  let student 
  if(location.state !== undefined){
     student = location.state.student
  }
  else {
    student = {}
  }
 

  return (
    <>
      <Layout>
        {/* pass student obj as props and make editable student={student} */}
        <ViewForm 
        student={student} 
        >
      
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