import React, { useContext } from 'react'
import { DataToken } from '../../App';
import Illustration from '../../containers/home/StudentHome/Illustration'

import { DecryptedToken } from '../../containers/login/HashedToken/Hash';




const AdminProtected = (props) => {
    // const OriginalToken = useContext(DataToken)
        const getLocalToken = ( ) => {
            // let token = localStorage.getItem('Role')
            let encryptedToken = localStorage.getItem('faculty_token')
            // let dtoken = DecryptedToken(encryptedToken)
            // console.log("token bhai", DataToken )
            // if(OriginalToken === dtoken ){
            //    return true
            // }
            // else return false

            if(encryptedToken){
                   return true
                }else return false
            
         }

         if(getLocalToken())
     {
        return (
            <div>
                {props.children}
            </div>
        )
    }else return <Illustration/>
    
}

export default AdminProtected
