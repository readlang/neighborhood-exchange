import Card from 'react-bootstrap/Card'
import MyRentalDetail from "./MyRentalDetail"
import placeholderImage from '../assets/tool_silhouette.jpg'

const imageStyle = {
    maxHeight: "180px", 
    maxWidth: "278px",
    margin: "0 auto"
}

function MyRentalCard({rental, role}) {
    return(
        <Card style={{ width: '280px', margin: '10px' }}>
            {rental.returned ? <Card.Header>Returned </Card.Header> : <Card.Header as="h5">Active Rental </Card.Header> }

            <div style={{display: "flex"}}>
                <img src={ rental.tool.image ? rental.tool.image : placeholderImage} style={imageStyle} alt="toolImage" /> 
            </div>

            
            <Card.Body>
                <span> { rental.tool.brand } </span>
                <Card.Title> {rental.tool.name } </Card.Title>
                <Card.Text> {role === "borrower" ? `Owner: ${rental.tool.owner.username}` : `Borrower: ${rental.borrower.username}` } </Card.Text>
                <MyRentalDetail rental={rental} role={role} />
            </Card.Body>
        </Card>
    )
}
export default MyRentalCard;