import {useState, useEffect} from "react"
import MyRentalCard from "./MyRentalCard"

const list = {
    margin: "20px auto 0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "900px"
}

const title = {
    margin: "20px auto 0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "900px"
}

function MyRentals({user}) { 
    const [borrowed, setBorrowed] = useState([])
    const [lentOut, setLentOut] = useState([])

    useEffect(() =>{
        fetch(`/users/${user.id}/borrowed`)
        .then(r => r.json())
        .then(d => setBorrowed(d))
    }, [])

    useEffect(() =>{
        fetch(`/users/${user.id}/lent`)
        .then(r => r.json())
        .then(d => setLentOut(d))
    }, [])

    return(
        <>
            <h2 style={title}>Borrowed from Neighbors</h2>
            <div style={list} > 
                {borrowed.map(rental => <MyRentalCard rental={rental} key={rental.id} /> ) }
            </div>
            <h2 style={title}>Lent out to Neighbors</h2>
            <div style={list} > 
                {lentOut.map(rental => <MyRentalCard rental={rental} key={rental.id} /> ) }
            </div>
        </>
        
    )
}
export default MyRentals;