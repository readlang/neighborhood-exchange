import {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'
import Alert from 'react-bootstrap/Alert'
import placeholderImage from '../assets/tool_silhouette.jpg'

function handleRental(tool, user, onHide) {
  console.log("rent this tool", tool)

  fetch("/rentals", {
    method: 'post',
    headers: { 'content-type': 'application/json'},
    body: JSON.stringify({ tool_id: tool.id, borrower_id: user.id, returned: false })
  })
  .then(r => r.json())
  .then(data => console.log(data) )  
  onHide()
}

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
        
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Rental Details 

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <span>{props.tool.brand}</span>
          <h4>{props.tool.name}</h4>
          <span>Owner: {props.tool.owner.username}</span>
          <Image src={ props.tool.image ? props.tool.image : placeholderImage } fluid={true}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}> Tool unavailable - currently borrowed </Button>
          <Button onClick={()=>handleRental(props.tool, props.user, props.onHide ) }>&nbsp; Rent this tool &nbsp;</Button> 
          <Button variant="outline-secondary" onClick={props.onHide}>Close</Button> 
        </Modal.Footer>
      </Modal>
    );
}
  
function ListingDetail({tool, user}) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Button variant="outline-primary" size="sm" onClick={() => setModalShow(true)}>
                Rental Details
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow} onHide={() => setModalShow(false)}
                tool={tool} user={user}
            />
        </>
    );
}
export default ListingDetail;