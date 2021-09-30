import React from 'react'
import Layout from '../../../components/layout/Navbar'
import Alerts from '../../../components/alert';
// import FileDownloader from '../../../components/FileDownloader';
// import FileUploader from '../../../components/FileUploader/FileUploader';

const FacHome = (props) => {

   return (
      <>
         <Layout>
            <div>

            
               <div className="box">
                  <h1 className="mt-1">Welcome Faculty</h1>
                  <h2 style={{ color: "#9b0909" }}>Updates!</h2>
                  <hr />
                  <Alerts variant="success" title="Exam form is out!" message=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" >   </Alerts>

                  <Alerts variant="danger" title="Last 2 days to fill form" message=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" />
                  <Alerts className="mb-5" variant="danger" title="Last 2 days to fill form" message=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" />
                  {/* <FileUploader />
                  <br /><br />
                  <FileDownloader /> */}
               </div>
            </div>
         </Layout>

      </>
   )

}



export default FacHome;

