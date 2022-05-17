import Card from 'react-bootstrap/Card'
import AddToolDetail from "./AddToolDetail"

const image = "https://previews.123rf.com/images/ylivdesign/ylivdesign1710/ylivdesign171015715/88672210-%E4%B8%B8%E9%8B%B8%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E3%80%82web-%E3%81%AE%E4%B8%B8%E9%8B%B8%E3%83%99%E3%82%AF%E3%83%88%E3%83%AB-%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E3%81%AE%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%81%AA%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88.jpg"

function AddToolCard({ user}) {

    return(
        <div  >
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title> {"Add a New Tool"} </Card.Title>
                    <Card.Text> {" "} </Card.Text>
                    {<AddToolDetail user={user}/> }
                </Card.Body>
            </Card>
        </div>    
    )
}
export default AddToolCard;