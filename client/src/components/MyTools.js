import {useState, useEffect} from "react"
import MyToolCard from "./MyToolCard"

const list = {
    margin: "20px auto 0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "900px"
}

function MyTools({user}) {
    const [myTools, setMyTools] = useState([]);
    const [reload, setReload] = useState({});

    function triggerUpdate() {
        setReload({...reload})
    }

    useEffect(() =>{
        fetch(`/users/${user.id}/tools`)
        .then(r => r.json())
        .then(d => setMyTools(d))
    }, [user.id, reload])

    return(
        <div style={list} > 
            <MyToolCard user={user} triggerUpdate={triggerUpdate}/>
            {myTools.map(tool => <MyToolCard tool={tool} key={tool.id} triggerUpdate={triggerUpdate} /> ) }
        </div>
    )
}
export default MyTools;