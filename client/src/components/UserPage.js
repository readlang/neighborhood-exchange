import {useState} from "react"

import logo from "../NEX logo.svg"
import Button from "react-bootstrap/Button";    
import Form from "react-bootstrap/Form";    

const centerXY = {
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center", // left right center
  alignContent: "center", // vertical center
}

const boxSize = {
  height: "400px",
  width: "400px",
  backgroundColor: "rgb(255, 255, 255)",
}

function UserPage() {
  const [showSignup, setShowSignup] = useState(false);

  function logInForm() {
    return(
      <Form style = {{padding: "30px"}}>
        <Form.Label >Please log in</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log in
        </Button>
        <br/> <hr/> <br/>
        <Button variant="success" onClick={() => setShowSignup(true)} >
          Sign up for account
        </Button>
      </Form>
    )
  }

  function signupForm() {
    return(
      <Form style = {{padding: "30px"}}>
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

  return (
    <div style = {centerXY}>
      <div style= {boxSize}>
        <div style= {centerXY}>
          <img src={logo} alt="logo" />
        </div> 
      </div>
      <div style = {boxSize} >
        { showSignup ? signupForm() : logInForm() }
        
      </div>
    </div> 
  )
}

export default UserPage;