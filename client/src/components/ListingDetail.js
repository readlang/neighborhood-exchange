import {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'
const image = "https://media.istockphoto.com/photos/cordless-yellow-power-drill-isolated-on-a-white-background-picture-id184294297?b=1&k=20&m=184294297&s=170667a&w=0&h=0vSkHk1oHhoVez2poCNRo5dtg7c7W4ACgLxF-PoYiW8="

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
            {props.tool.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.tool.brand}</h4>
          <p>
              {props.tool.notes}
          </p>
          <Image src={image} fluid={true}/>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>&nbsp; Rent this tool &nbsp;</Button> {/*update this*/}
          <Button variant="outline-secondary" onClick={props.onHide}>Close</Button> 
        </Modal.Footer>
      </Modal>
    );
}
  
function ListingDetail({tool}) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Button variant="outline-primary" size="sm" onClick={() => setModalShow(true)}>
                Details
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow} onHide={() => setModalShow(false)}
                tool={tool}
            />
        </>
    );
}
export default ListingDetail;