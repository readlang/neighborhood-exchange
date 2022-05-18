import {useState, useEffect} from "react"
import ToolCard from "./ToolCard"
import AddToolCard from "./AddToolCard"

const list = {
    margin: "20px auto 0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "900px"
}

function MyTools({user}) {
    const [myTools, setMyTools] = useState([]);
    const [reload, setReload] = useState(0);

    useEffect(() =>{
        fetch(`/users/${user.id}/tools`)
        .then(r => r.json())
        .then(d => setMyTools(d))
    }, [user.id, reload])

    return(
        <div style={list} > 
            <AddToolCard user={user} setReload={setReload}/>
            {myTools.map(rental => <ToolCard tool={rental} key={rental.id} /> ) }
        </div>
    )
}
export default MyTools;