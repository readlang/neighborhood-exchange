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

function UserEdit({ props, user }) {
  const [image, setImage] = useState( user.profile_image ? user.profile_image : "" )
  const [location, setLocation] = useState( user.location ? user.location : "" )

  function handleSaveEdit() {  
    fetch (`/users/${user.id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify({ profile_image: image, location: location })
    })
    .then(response => response.json())
    .then(data => console.log(data) ) 
    props.onHide()
  }

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"> {"Edit user profile"} </Modal.Title>
      </Modal.Header>

      <Modal.Body style={layout}>
        <Form  style={{width: "400px"}}>
          <Form.Label >User Details</Form.Label>

          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Control type="input" placeholder="image"
            value={image} onChange={e=> setImage(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLocation">
            <Form.Control type="input" placeholder="Location" 
            value={location} onChange={e=> setLocation(e.target.value)} />
          </Form.Group>
        </Form>

        <Image src={image} fluid={true} style={{width: "200px"}}/>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleSaveEdit}>&nbsp; Save edits &nbsp;</Button> 
        <Button variant="outline-secondary" onClick={props.onHide}>Close</Button> 
      </Modal.Footer>
    </Modal>
  );
}

export default UserEdit;