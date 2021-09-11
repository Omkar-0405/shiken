import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AdminHome from '../pages/AdminHome/AdminHome'
import StudentHome from '../pages/StudentHome/StudentHome'

const Routers = (props) => {
  return(
    <>
      <Route path="/" exact component={AdminHome} />
    </>
   )
  }


export default Routers