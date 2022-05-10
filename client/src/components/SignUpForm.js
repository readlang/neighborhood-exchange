import {useState} from "react"

import Button from "react-bootstrap/Button";    
import Form from "react-bootstrap/Form";    

function SignUpForm() {
  return(
    <Form >
      <Form.Label >Sign up for account</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Profile image link" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Location" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign up
      </Button>
      
    </Form>
  )
}

export default SignUpForm;