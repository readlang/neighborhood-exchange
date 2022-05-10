import {useState} from "react"
import Button from "react-bootstrap/Button";    
import Form from "react-bootstrap/Form";    

function SignUpForm({handleSignUp}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [image, setImage] = useState("")
  const [location, setLocation] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    handleSignUp(username, password, passwordConfirm, image, location )
  }

  return(
    <Form onSubmit={handleSubmit} >
      <Form.Label >Sign up for account</Form.Label>

      <Form.Group className="mb-3" controlId="formBasicInput">
        <Form.Control type="input" placeholder="Username"
        value={username} onChange={e=> setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" 
        value={password} onChange={e=> setPassword(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
        <Form.Control type="input" placeholder="Confirm Password" 
        value={passwordConfirm} onChange={e=> setPasswordConfirm(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImageLink">
        <Form.Control type="input" placeholder="Profile image link" 
        value={image} onChange={e=> setImage(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLocation">
        <Form.Control type="input" placeholder="Location" 
        value={location} onChange={e=> setLocation(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign up
      </Button>
    </Form>
  )
}

export default SignUpForm;