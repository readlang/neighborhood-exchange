import {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'
import Form from "react-bootstrap/Form";    

function handleSaveTool(user, name, brand, image, notes, setReload) {
  console.log("handleSave", user, name, brand, image, notes)
  fetch("/tools", {
    method: 'post',
    headers: { 'content-type': 'application/json'},
    body: JSON.stringify({ name: name, brand: brand, owner_id: user.id, image: image, notes: notes })
  })
  .then(r => r.json())
  .then(data => console.log(data) ) 
  .then(setReload(Math.random())) 
}

function MyVerticallyCenteredModal(props) {
  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [image, setImage] = useState("")
  const [notes, setNotes] = useState("")
  console.log(props)

  function submit() {
    handleSaveTool(props.user, name, brand, image, notes, props.setReload ) 
    props.onHide()
  }

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
        
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"> Add a Tool </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form  >
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
          </Form>

          <Image src={image} fluid={true}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={submit}>
            &nbsp; Save this tool &nbsp;</Button> 
          <Button variant="outline-secondary" onClick={props.onHide}>Close</Button> 
        </Modal.Footer>
      </Modal>
    );
}
  
function AddToolDetail({user, setReload}) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Button variant="outline-primary" size="sm" onClick={() => setModalShow(true)}>
                Add a Tool
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow} onHide={() => setModalShow(false)} user={user} setReload={setReload}
            />
        </>
    );
}
export default AddToolDetail;