import Card from 'react-bootstrap/Card'
import MyToolDetail from "./MyToolDetail"

const image = "https://previews.123rf.com/images/ylivdesign/ylivdesign1710/ylivdesign171015715/88672210-%E4%B8%B8%E9%8B%B8%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E3%80%82web-%E3%81%AE%E4%B8%B8%E9%8B%B8%E3%83%99%E3%82%AF%E3%83%88%E3%83%AB-%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E3%81%AE%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%81%AA%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88.jpg"

function MyToolCard({ user, triggerUpdate, tool={} }) {
    return(
        <Card style={{ width: '280px', margin: '10px' }}>
            { tool.image ?
            <Card.Img variant="top" src={tool.image}/> :
            <Card.Img variant="top" src={image}   /> 
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