import React from 'react'
import Layout from '../../components/layout/component/Navbar'
import Alerts from '../../components/alert';
// import { CustumButton } from '../../components/button/Button';
// import Tablee from '../../components/verifiedTable';
import "./Home.css";

/**
* @author
* @function Home
**/

const Home = (props) => {
   return (
      <Layout>
         <div>
            
         <div className="box">
         <h1 className="mt-1">Welcome User</h1>
            <h2 style={{color:"#9b0909"}}>Updates!</h2>
            <hr />
         <Alerts variant ="success" title="Exam form is out!" message=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" >         
         {/* <CustumButton variant="primary" name="Fill Form" />
        */}
         </Alerts>
         
         <Alerts variant ="danger" title="Last 2 days to fill form" message=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" />
         <Alerts variant ="danger" title="Last 2 days to fill form" message=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" />
         </div>  
         </div>
      </Layout>

   )

}

export default Home