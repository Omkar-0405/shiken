import React from 'react'
import Layout from '../../components/layout/component/Navbar'
import Alerts from '../../components/alert';
import { CustumButton } from '../../components/button/Button';
import Tablee from '../../components/verifiedTable';

/**
* @author
* @function Home
**/

const Home = (props) => {
   return (
      <Layout>
         <div><h1>Welcome User</h1>
         <div className="sec">
            <h3>Updates!</h3>
         <Alerts variant ="success" title="Exam form is out!" message=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" >         
         </Alerts>
         <CustumButton variant="primary" name="Fill Form" />
         <Alerts variant ="danger" title="Last 2 days to fill form" message=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" />
 
         </div>  
         </div>
      </Layout>

   )

}

export default Home