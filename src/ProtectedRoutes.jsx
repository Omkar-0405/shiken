import React from 'react'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import Illustration from './assets/Illustration'
import { Context } from './context/context'

const ProtectedRoutes = ({userType : user , isAuth : isAuthenticated , component:Component, ...rest}) => {

    const {state,dispatch} = useContext(Context)
    
    console.log("state after reload",state)
    return (
        <Route {...rest} exact render={(props)=> {
            if(isAuthenticated && user == "student"){
                return <Component />
            } 
            if( isAuthenticated && user == "Faculty" ){
                return <Component />
            } 
            if(!isAuthenticated){
                return <Redirect to="/"/>
            }
           
            
        }}  />
        
    )
}

export default ProtectedRoutes
