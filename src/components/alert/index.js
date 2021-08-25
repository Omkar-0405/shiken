import Alert from 'react-bootstrap/Alert'
import React from 'react'


const Alerts = (props) => {
  return (
    <>
      <Alert variant={props.variant} style={{ borderStyle:"solid" , borderWidth:"thin" ,wordWrap:"break-word"}} >
        
      <div  style={{}}>
        <h2>
          {props.title}
        </h2>
        <hr />
       
        <p>
          {props.message}
        </p>
        {props.children}
        </div>
      </Alert>
    </>
  )

}

export default Alerts