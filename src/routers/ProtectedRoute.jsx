import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Redirect, Route } from 'react-router-dom'
import { Context } from '../context/context'

const ProtectedRoute = ({component:Component, ...rest}) => {
    const {state , dispatch} = useContext(Context)
    const history = useHistory()
    console.log(state)
    return (
        <div>
            <Route render={(props)=>{
                 if(state?.auth?.isAuthenticated && state?.auth?.userType == "student") {
                    return < Component/>
                 }   
                  else if(state?.auth?.isAuthenticated && state?.auth?.userType == "Faculty" ){ 
                  return <Component  />}
                else if (!state?.auth?.isAuthenticated) {
                  history.push('/')
                 }
                   
                      
            }} />            
        </div>
    )
}

export default ProtectedRoute
