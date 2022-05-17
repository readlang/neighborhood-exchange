import {useState, useEffect} from "react"
import ToolCard from "./ToolCard"
import AddToolCard from "./AddToolCard"

const list = {
    margin: "20px 0 0 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
}

function MyTools({user}) {
    const [myTools, setMyTools] = useState([])

    useEffect(() =>{
        fetch(`/users/${user.id}/tools`)
        .then(r => r.json())
        .then(d => setMyTools(d))
    }, [])

    return(
        <div style={list} > 
            <AddToolCard/>
            {myTools.map(rental => <ToolCard tool={rental} key={rental.id} /> ) }
        </div>
    )
}
export default MyTools;