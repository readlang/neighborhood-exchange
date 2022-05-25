import Card from 'react-bootstrap/Card'
import MyToolDetail from "./MyToolDetail"
import placeholderImage from '../assets/tool_silhouette.jpg'

function MyToolCard({ user, triggerUpdate, tool={} }) {
    return(
        <Card style={{ width: '280px', margin: '10px' }}>
            { tool.image ?
            <Card.Img variant="top" src={tool.image}/> :
            <Card.Img variant="top" src={placeholderImage}   /> 
            }
            
            <Card.Body>
                <Card.Title> {tool.name ? tool.name : "Add a New Tool"} </Card.Title>
                <Card.Text>  {tool.brand ? tool.brand : " " } </Card.Text>
                <MyToolDetail user={user} triggerUpdate={triggerUpdate} tool= {tool} /> 
            </Card.Body>
        </Card>
    )
}
export default MyToolCard;