import Card from 'react-bootstrap/Card'
import ListingDetail from "./ListingDetail"
import placeholderImage from '../assets/tool_silhouette.jpg'

function ToolCard({tool, user}) {
    return(
        <Card style={{ width: '280px', margin: '10px' }}>
            {tool.rented ? <Card.Header>Tool rented</Card.Header> : <Card.Header as="h5">Available</Card.Header> }
            <Card.Img variant="top" src={tool.image ? tool.image : placeholderImage} />
            <Card.Body>
                <span> {tool.brand} </span>
                <Card.Title> {tool.name } </Card.Title>
                <Card.Text> Owner: {tool.owner.username}</Card.Text>
                
                <ListingDetail tool={tool} user={user}/>
            </Card.Body>
        </Card>
    )
}
export default ToolCard;