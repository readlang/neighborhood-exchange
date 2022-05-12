import {useState, useEffect} from "react"

import Row from "react-bootstrap/Row";
import ToolCard from "./ToolCard"

const list = {
    
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    
}

function Neighborhood() {
    const [tools, setTools] = useState([])

    useEffect(() =>{
        fetch("/tools")
        .then(r => r.json())
        .then(d => setTools(d))
    }, [])

    console.log(tools)

    // this is not working yet
    return(
        <div style={list} >
            <Row xs={1} md={2} className="g-4">
            {tools.map(tool => <ToolCard tool={tool} key={tool.id} /> ) }
            </Row>
        </div>
    )
}
export default Neighborhood;