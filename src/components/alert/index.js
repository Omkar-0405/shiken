import Alert from 'react-bootstrap/Alert'
import React from 'react'

const Alerts = (props) => {
  return (
    <>
      <Alert variant={props.variant} className="mx-5 my-3">
        <h1>
          {props.title}
        </h1>
        <p>
          {props.message}
        </p>
        {props.children}
      </Alert>
    </>
  )

}

export default Alerts