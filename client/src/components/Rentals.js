import {useState, useEffect} from "react"
import ToolCard from "./ToolCard"

const list = {
    margin: "20px 0 0 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
}

function Rentals() {
    const [rentals, setRentals] = useState([])

    useEffect(() =>{
        fetch("/rentals")
        .then(r => r.json())
        .then(d => setRentals(d))
    }, [])

    return(
        <div style={list} > 
            {rentals.map(rental => <ToolCard tool={rental} key={rental.id} /> ) }
        </div>
    )
}
export default Rentals;