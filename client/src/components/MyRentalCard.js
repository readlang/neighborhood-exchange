import Card from 'react-bootstrap/Card'
import MyRentalDetail from "./MyRentalDetail"
import placeholderImage from '../assets/tool_silhouette.jpg'

function MyRentalCard({rental, role}) {
    return(
        <Card style={{ width: '280px', margin: '10px' }}>
            
            <Card.Img variant="top" src={ rental.tool.image ? rental.tool.image : placeholderImage } />
            <Card.Body>
                <Card.Title> {rental.tool.name } </Card.Title>
                <h6>{ rental.tool.brand }</h6>
                <Card.Text> {role === "borrower" ? `Owner: ${rental.tool.owner.username}` : `Borrower: ${rental.borrower.username}` } </Card.Text>
                <h6>{ rental.returned ? "Status: Returned" : "Status: Active Rental"   }</h6>
                <MyRentalDetail rental={rental} role={role} />
            </Card.Body>
        </Card>
    )
}
export default MyRentalCard;