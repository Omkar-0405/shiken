import React from 'react'
import { Link } from 'react-router-dom'
import img from './15.svg'
const Illustration = () => {
    const style = {
        width: "100%" , 
        textAlign: "center"
    }
    return (
        <div >
            <img src={img} height="500px" width="100%" alt="" />
            <h6 style={style} > <b> You are not Loginned.<Link to="/"> Back To Login</Link></b></h6>
        </div>
    )
}

export default Illustration
