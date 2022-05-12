import {useState, useEffect} from "react"

import Row from "react-bootstrap/Row";
import ToolCard from "./ToolCard"

const list = {
    margin: "20px 0 0 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
}

function Neighborhood() {
    const [tools, setTools] = useState([])

    useEffect(() =>{
        fetch("/tools")
        .then(r => r.json())
        .then(d => setTools(d))
    }, [])

    return(
        // <div> {/*style={list}*/} 
        //     <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="g-4">
        //     {tools.map(tool => <ToolCard tool={tool} key={tool.id} /> ) }
        //     </Row>
        // </div>

        <div style={list} > 
            {tools.map(tool => <ToolCard tool={tool} key={tool.id} /> ) }
        </div>
    )
}
export default Neighborhood;