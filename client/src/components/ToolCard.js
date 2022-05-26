import Card from 'react-bootstrap/Card'
import ListingDetail from "./ListingDetail"
import placeholderImage from '../assets/tool_silhouette.jpg'

const imageStyle = {
    maxHeight: "180px", 
    maxWidth: "278px",
    margin: "0 auto"
}


function ToolCard({tool, user}) {
    return(
        <Card style={{ width: '280px', margin: '10px' }}>
            {tool.rented ? <Card.Header>Not Available</Card.Header> : <Card.Header as="h5">Available</Card.Header> }
            <div style={{display: "flex"}}>
                <img src={ tool.image ? tool.image : placeholderImage} style={imageStyle} alt="toolImage" /> 
            </div>
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

//             <Card.Img variant="top" src={tool.image ? tool.image : placeholderImage} style={imageStyle} />