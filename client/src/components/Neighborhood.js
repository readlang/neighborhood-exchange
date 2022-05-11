import {useState, useEffect} from "react"
import Button from "react-bootstrap/Button";


function Neighborhood() {
    const [tools, setTools] = useState()

    useEffect(() =>{
        fetch("/tools")
        .then(r => r.json())
        .then(d => setTools(d))
    }, [])

    console.log(tools)

    return(
        <div  >
            neighborhood
        </div>
    )
}
export default Neighborhood;