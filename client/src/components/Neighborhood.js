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
    const [pastBorrowedTools, setPastBorrowedTools] = useState([])
    const [mostPopular, setMostPopular] = useState({})

    useEffect(() =>{
        fetch("/tools")
        .then(r => r.json())
        .then(d => setTools(d))
    }, [])

    // added after review
    useEffect(() =>{
        fetch(`/users/${user.id}/borrowed_tools`)
        .then(r => r.json())
        .then(d => setPastBorrowedTools(d))
    }, [user.id])

    useEffect(() =>{
        fetch("/tools/most_popular")
        .then(r => r.json())
        .then(d => setMostPopular(d))
    }, [])

    return(
        <>
            <div style={list} > 
                {tools.map(tool => <ToolCard tool={tool} key={tool.id} user={user} setError={setError} /> ) }
            </div>
            <h4 style={list}>Past borrowed Tools</h4>
            <ul>
            {pastBorrowedTools.map(tool => <li key={tool.id} >{tool.name}</li>)}
            </ul>
            <h4>Most Popular Tool</h4>
            <h4>{mostPopular.name}</h4>
        </>
    )
}
export default Neighborhood;