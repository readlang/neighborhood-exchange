import {useState, useEffect} from "react"
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
        <div style={list} > 
            {tools.map(tool => <ToolCard tool={tool} key={tool.id} /> ) }
        </div>
    )
}
export default Neighborhood;