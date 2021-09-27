import React from 'react'
import Illustration from '../containers/home/StudentHome/Illustration'

const Protected = (props) => {

    const getLocalToken = ( ) => {
        let token = localStorage.getItem('Role')
// check role and make admin routes protected
        if(token){
           return token
        }
        
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

export default Protected
