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

function handleSaveEdit(name, brand, image, notes, toolid) {  //what is going on?
  console.log("handleSave", name, brand, image, notes, toolid)
  fetch(`/tools/${toolid.toString()}`, {
    method: 'patch',
    headers: { 'content-type': 'application/json'},
    body: JSON.stringify({ name: name, brand: brand, image: image, notes: notes })
  })
  .then(r => r.json())
  .then(data => console.log(data) ) 
 
}

function handleDeleteTool(setReload, id){
  fetch(`/tools/${id}`, {
    method: 'delete',
    headers: { 'content-type': 'application/json'}
  })
  .then(r => r.json())
  .then(data => console.log(data) ) 
  .then(setReload(Math.random())) 
}

const layout = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
}

function MyVerticallyCenteredModal(props) {
  const [name, setName] = useState( props.tool.name ? props.tool.name : "" )
  const [brand, setBrand] = useState( props.tool.brand ? props.tool.brand : "" )
  const [image, setImage] = useState( props.tool.image ? props.tool.image : "" )
  const [notes, setNotes] = useState( props.tool.notes ? props.tool.notes : "" )
  //console.log(props)

  function submit() {
    if (props.tool.id) {
      handleSaveEdit(name, brand, image, notes, props.tool.id )   //what is going on?
    } else {
      handleSaveTool(props.user, name, brand, image, notes, props.setReload ) 
    }
    props.onHide()
  }

  function deleteTool() {
    handleDeleteTool(props.setReload, props.tool.id) 
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
        <Modal.Title id="contained-modal-title-vcenter"> {props.tool.id ? "Edit tool" : "Add a Tool"} </Modal.Title>
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
        <Button onClick={submit}>&nbsp; Save tool &nbsp;</Button> 
        {props.tool.id ? <Button variant="outline-danger" onClick={deleteTool}> Delete tool</Button> : null}
        
        <Button variant="outline-secondary" onClick={props.onHide}>Close</Button> 
      </Modal.Footer>
    </Modal>
  );
}
  
function MyToolDetail({user, setReload, tool}) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Button variant="outline-primary" size="sm" onClick={() => setModalShow(true)}>
                { tool.id ? "Edit Tool" : "Add a Tool" }
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow} onHide={() => setModalShow(false)} 
                user={user} setReload={setReload} tool={tool}
            />
        </>
    );
}
export default MyToolDetail;