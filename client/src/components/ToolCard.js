import Card from 'react-bootstrap/Card'
import ListingDetail from "./ListingDetail"

function ToolCard({tool, user}) {
    return(
        <Card style={{ width: '280px', margin: '10px' }}>
            <Card.Img variant="top" src={tool.image} />
            <Card.Body>
                <Card.Title> {tool.name } </Card.Title>
                <Card.Text> {tool.brand} </Card.Text>
                <ListingDetail tool={tool} user={user}/>
            </Card.Body>
        </Card>
    )
}
export default ToolCard;