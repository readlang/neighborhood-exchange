import {useState, useEffect} from "react"
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
import ListingDetail from "./ListingDetail"

const image = "https://media.istockphoto.com/photos/cordless-yellow-power-drill-isolated-on-a-white-background-picture-id184294297?b=1&k=20&m=184294297&s=170667a&w=0&h=0vSkHk1oHhoVez2poCNRo5dtg7c7W4ACgLxF-PoYiW8="


function ToolCard({tool}) {



    return(
        
        

        <Card style={{ width: '18rem'}}>
            
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title> {tool.name } </Card.Title>
                <Card.Text> {tool.brand} </Card.Text>
                
                
                <ListingDetail tool={tool} />
            </Card.Body>
        </Card>


        
    )
}
export default ToolCard;