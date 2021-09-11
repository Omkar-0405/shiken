import { React, useContext } from 'react'
import Layout from '../../components/layout/Navbar'
import Alerts from '../../components/alert';
// import { CustumButton } from '../../components/button/Button';
// import Tablee from '../../components/verifiedTable';
import "./Home.css";
import FileDownloader from '../../components/FileDownloader';
import FileUploader from '../../components/FileUploader/FileUploader';
import { Store } from '../../context/context';

/**
* @author
* @function Home
**/



const Home = (props) => {
   const User = useContext(Store);
   console.log(User);
   return (
      <>
         <Layout>
            <div className="box">

               <h1 className="mt-1">Welcome {User[1].role}</h1>
               <h2 style={{ color: "#9b0909" }}>Updates!</h2>
               <hr />
               <Alerts variant="success" title="Exam form is out!" message=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" >
                  {/* <CustumButton variant="primary" name="Fill Form" />
        */}
               </Alerts>

               <Alerts variant="danger" title="Last 2 days to fill form" message=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" />
               <Alerts className="mb-5" variant="danger" title="Last 2 days to fill form" message=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" />
               <FileUploader />
               <br /><br />
               <FileDownloader />

            </div>


         </Layout>
      </>
   )

}

export default Home