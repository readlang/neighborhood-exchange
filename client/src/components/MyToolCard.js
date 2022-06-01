import Card from 'react-bootstrap/Card'
import MyToolDetail from "./MyToolDetail"
import placeholderImage from '../assets/tool_silhouette.jpg'

const imageStyle = {
    maxHeight: "180px", 
    maxWidth: "278px",
    margin: "0 auto"
}

function MyToolCard({ user, triggerUpdate, tool={}, setError }) {

    return(
        <Card style={{ width: '280px', margin: '10px' }}>
            { tool.name ? (tool.rented ? <Card.Header as="h5">Currently Rented </Card.Header> : <Card.Header as="h5"> Not Rented </Card.Header> ) : <Card.Header as="h5"> Add Tool </Card.Header> }

            <div style={{display: "flex"}}>
                <img src={ tool.image ? tool.image : placeholderImage} style={imageStyle} alt="toolImage" /> 
            </div>

            <Card.Body>
                {tool.brand ? <span> {tool.brand} </span> : <span> &nbsp; </span>} 
                <Card.Title> {tool.name ? tool.name : "Add a New Tool"} </Card.Title>
                
                <MyToolDetail user={user} triggerUpdate={triggerUpdate} tool= {tool} setError={setError} /> 
            </Card.Body>
        </Card>
    )
}
export default MyToolCard;