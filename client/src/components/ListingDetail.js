import {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'
import placeholderImage from '../assets/tool_silhouette.jpg'

function handleRental(tool, user, onHide, setError) {
  console.log("rent this tool", tool)

  if (tool.owner.id === user.id ) {
    
    setError(`Current user (${user.username}) is tool owner (${tool.owner.username}).`)
  } else {
  fetch("/rentals", {
    method: 'post',
    headers: { 'content-type': 'application/json'},
    body: JSON.stringify({ tool_id: tool.id, borrower_id: user.id, returned: false })
  })
  .then(r => r.json())
  .then(data => console.log(data) )  
  onHide()
  window.location.href = "/rentals";
  }
}

function MyVerticallyCenteredModal(props) {
  
  return (
    <Modal
      {...{show: props.show, onHide: props.onHide}}
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
        { props.tool.rented ? 
        <Button variant="danger" onClick={props.onHide}> Tool currently out on loan </Button> :
        <Button onClick={()=>handleRental(props.tool, props.user, props.onHide, props.setError ) }>&nbsp; Rent this tool &nbsp;</Button>  }
        <Button variant="outline-secondary" onClick={props.onHide}>Close</Button> 
      </Modal.Footer>
    </Modal>
  );
}
  
function ListingDetail({tool, user, setError}) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Button variant="outline-primary" size="sm" onClick={() => setModalShow(true)}>
                Rental Details
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow} onHide={() => setModalShow(false)}
                tool={tool} user={user} setError={setError}
            />
        </>
    );
}
export default ListingDetail;