import {useState} from "react"
import Button from "react-bootstrap/Button";    
import Form from "react-bootstrap/Form";    

function NewToolForm({ handleSignUp}) {
  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [image, setImage] = useState("")
  const [notes, setNotes] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    handleSignUp(name, brand, image, notes )
  }

  return(
    <Form onSubmit={handleSubmit} >
      <Form.Label >Enter tool details</Form.Label>

      <Form.Group className="mb-3" controlId="formBasicInput">
        <Form.Control type="input" placeholder="Name"
        value={name} onChange={e=> setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBrand">
        <Form.Control type="input" placeholder="Brand" 
        value={brand} onChange={e=> setBrand(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImageLink">
        <Form.Control type="input" placeholder="Tool image link" 
        value={image} onChange={e=> setImage(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNotes">
        <Form.Control type="input" placeholder="Notes" 
        value={notes} onChange={e=> setNotes(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Tool
      </Button>
      &emsp; 
      <Button variant="outline-secondary"   type="input">
        Back to Log in
      </Button>

    </Form>
  )
}

export default NewToolForm;