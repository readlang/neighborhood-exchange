import Card from 'react-bootstrap/Card'
import MyRentalDetail from "./MyRentalDetail"

function MyRentalCard({rental, user}) {
    return(
        <Card style={{ width: '280px', margin: '10px' }}>
            <Card.Img variant="top" src={rental.image} />
            <Card.Body>
                <Card.Title> Tool ID: {rental.tool_id } </Card.Title>
                <Card.Text> Renter: {rental.borrower_id} </Card.Text>
                <MyRentalDetail rental={rental} user={user}/>
            </Card.Body>
        </Card>
    )
}
export default MyRentalCard;