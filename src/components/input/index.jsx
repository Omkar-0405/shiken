import React from 'react'
import { Form } from 'react-bootstrap'

/**
* @author
* @function Input
**/

const Input = (props) => {
  return(
    <div style={{display:"flex"}} >
    <Form.Label column lg={2} sm={12}>
                {props.label}
              </Form.Label>
              <Form.Control
                  type="props.type"
                  placeholder={props.placeholder}
                  name="props.name"
                  value={props.value}
                  onChange={props.onChange}
                />

    </div>
   )
  }


export default Input