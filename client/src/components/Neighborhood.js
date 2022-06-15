import {useState, useEffect} from "react"
import ToolCard from "./ToolCard"

const list = {
    margin: "20px auto 0 auto", //auto = centered horizontally
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "900px"
}

function Neighborhood({user, setError }) {
    const [tools, setTools] = useState([])

    useEffect(() =>{
        fetch("/tools")
        .then(r => r.json())
        .then(d => setTools(d))
    }, [])

    return(
        <>
            <div style={list} > 
                {tools.map(tool => <ToolCard tool={tool} key={tool.id} user={user} setError={setError} /> ) }
            </div>
        </>
    )
}
export default Neighborhood;