import {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'
import Form from "react-bootstrap/Form";    

const layout = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
}

function MyVerticallyCenteredModal({props, user, triggerUpdate, tool, setError }) {
  const [name, setName  ] = useState( tool.name ? tool.name : "" )
  const [brand, setBrand] = useState( tool.brand ? tool.brand : "" )
  const [image, setImage] = useState( tool.image ? tool.image : "" )
  const [notes, setNotes] = useState( tool.notes ? tool.notes : "" )

  function handleSaveTool() {
    fetch("/tools", {
      method: 'post',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify({ name: name, brand: brand, owner_id: user.id, image: image, notes: notes })
    })
    .then(r => r.json())
    .then(data => {
      console.log("data:", data)
      setError(data.errors)
      } ) 
    .then(triggerUpdate) 
    props.onHide()
  }
  
  function handleSaveEdit() {  
    fetch (`/tools/${tool.id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify({ name: name, brand: brand, image: image, notes: notes })
    })
    .then(response => response.json())
    .then(data => {
      console.log("data:", data)
      setError(data.errors)
    } ) 
    .then(triggerUpdate) 
    props.onHide()
  }

  function handleDelete() {
    fetch(`/tools/${tool.id}`, {
      method: 'delete',
      headers: { 'content-type': 'application/json'}
    })
    .then(r => r.json())
    .then(data => console.log(data) ) 
    .then(triggerUpdate) 
    props.onHide()
  }

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"> {tool.id ? "Edit tool" : "Add a Tool"} </Modal.Title>
      </Modal.Header>

      <Modal.Body style={layout}>
        <Form  style={{width: "400px"}}>
          <Form.Label >Tool details</Form.Label>

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

        <Image src={image} fluid={true} style={{width: "200px"}}/>
      </Modal.Body>

      <Modal.Footer>
        {tool.id ? 
        <Button onClick={handleSaveEdit}>&nbsp; Save edits &nbsp;</Button> :
        <Button onClick={handleSaveTool}>&nbsp; Save tool &nbsp;</Button> }
        {tool.id ? <Button variant="outline-danger" onClick={handleDelete}> Delete tool</Button> : null}
        <Button variant="outline-secondary" onClick={props.onHide}>Close</Button> 
      </Modal.Footer>
    </Modal>
  );
}
  
function MyToolDetail({user, triggerUpdate, tool, setError }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="outline-primary" size="sm" onClick={() => setModalShow(true)}>
        { tool.id ? "Edit Tool" : "Add a Tool" }
      </Button>

      <MyVerticallyCenteredModal
        props={ {show: modalShow, onHide: () => setModalShow(false) } }
        user={user} triggerUpdate={triggerUpdate} tool={tool} setError={setError}
      />
    </>
  );
}
export default MyToolDetail;