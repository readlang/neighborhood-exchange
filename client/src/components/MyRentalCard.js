import Card from 'react-bootstrap/Card'
import MyRentalDetail from "./MyRentalDetail"

function MyRentalCard({rental, user}) {
    return(
        <Card style={{ width: '280px', margin: '10px' }}>
            <Card.Img variant="top" src={rental.tool.image} />
            <Card.Body>
                <Card.Title> Tool: {rental.tool.name } </Card.Title>
                <Card.Text> Borrower: {rental.borrower.username} </Card.Text>
                <Card.Text> Lender: {rental.tool.owner.username} </Card.Text>
                <MyRentalDetail rental={rental} user={user}/>
            </Card.Body>
        </Card>
    )
}
export default MyRentalCard;