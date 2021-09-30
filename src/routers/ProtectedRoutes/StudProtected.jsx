import React, { useContext } from 'react'
import { DataToken } from '../../App'

import Illustration from '../../containers/home/StudentHome/Illustration'

import { DecryptedToken } from '../../containers/login/HashedToken/Hash'


const StudProtected = (props) => {
    // const OriginalToken = useContext(DataToken)

    const getLocalToken = ( ) => {
        let encryptedToken = localStorage.getItem('student_token')
        let dtoken = DecryptedToken(encryptedToken)

        // console.log("token ",`${OriginalToken}`)

        if( encryptedToken ){
           return true
        }
        else return false
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

export default StudProtected
