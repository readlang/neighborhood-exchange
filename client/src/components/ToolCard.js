import Card from 'react-bootstrap/Card'
import ListingDetail from "./ListingDetail"
import placeholderImage from '../assets/tool_silhouette.jpg'

function ToolCard({tool, user}) {
    return(
        <Card style={{ width: '280px', margin: '10px' }}>
            <Card.Img variant="top" src={tool.image ? tool.image : placeholderImage} />
            <Card.Body>
                <Card.Title> {tool.name } </Card.Title>
                <Card.Text> {tool.brand} </Card.Text>
                <ListingDetail tool={tool} user={user}/>
            </Card.Body>
        </Card>
    )
}
export default ToolCard;