import {useState, useEffect} from "react"
import ToolCard from "./ToolCard"
import Button from "react-bootstrap/Button";

const list = {
    margin: "20px auto 0 auto", //auto = centered horizontally
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "900px"
}

const searchBox = {
    width: "222px" 
}

function Neighborhood({user, setError }) {
    const [tools, setTools] = useState([])
    const [filterTools, setFilterTools] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() =>{
        fetch("/tools")
        .then(r => r.json())
        .then(d => setTools(d))
    }, [])

    // This is demonstrating a backend search.  
    // Alternatively, it could have just filtered tools on frontend.
    function handleSubmit(event) {
        event.preventDefault();
        if ( searchTerm.replaceAll(" ", "") ) {
            fetch(`/tools/search/${searchTerm}`)
            .then(r => r.json())
            .then(data =>  setFilterTools(data))
        } else {
            setFilterTools([])
        }
    }

    const finalTools = filterTools.length ? filterTools : tools

    return(
        <>  
            <form style={list} onSubmit={handleSubmit}>
                <input style={searchBox} type="input" placeholder="tool name, brand, or owner" value={searchTerm} onChange={e => setSearchTerm(e.target.value )} />
                <Button variant="outline-secondary" size="sm" type="submit">search</Button>
            </form>
            <div style={list} > 
                {finalTools.map(tool => <ToolCard tool={tool} key={tool.id} user={user} setError={setError} /> ) }
            </div>
        </>
    )
}

export default Neighborhood;