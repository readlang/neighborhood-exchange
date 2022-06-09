import {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'

import placeholderImage from '../assets/tool_silhouette.jpg'

function handleReturn(rental, onHide, updateState, role) {
  console.log("return this rental", rental)

  fetch (`/rentals/${rental.id}`, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json'},
    body: JSON.stringify({ returned: true })
  })
  .then(r => r.json())
  .then(data => {
    console.log(data)
    updateState(role, rental.id)
    } 
  )  
  onHide()

}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...{show: props.show, onHide: props.onHide }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {props.rental.returned ? "Returned Rental" : "Active Rental" }
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>{props.rental.tool.name}</h4>
      <h5>{props.rental.tool.brand}</h5>
      <p>
          {props.role === "borrower" ? `Owner: ${props.rental.tool.owner.username}` : `Borrower: ${props.rental.borrower.username}`}
      </p>
      <Image src={ props.rental.tool.image ? props.rental.tool.image : placeholderImage } fluid={true}/>
      
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={()=>handleReturn(props.rental, props.onHide, props.updateState, props.role ) }>&nbsp; Return this rental &nbsp;</Button> 
      <Button variant="outline-secondary" onClick={props.onHide}>Close</Button> 
    </Modal.Footer>
  </Modal>
  );
}
  
function MyRentalDetail({rental, role, updateState}) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button variant="outline-primary" size="sm" onClick={() => setModalShow(true)}>
        Rental Details
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow} onHide={() => setModalShow(false)}
        rental={rental} role={role} updateState={updateState}
      />
    </>
  );
}
export default MyRentalDetail;