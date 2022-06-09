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

    function updateState(role, id) {
        if (role === "borrower") {
            setBorrowed(borrowed.map(rental => ( rental.id === id ? {...rental, returned: true} : rental ) ) )
        } else {
            setLentOut(lentOut.map(rental => (rental.id === id ? {...rental, returned: true} : rental ) ) )
        }
    }

    useEffect(() =>{
        fetch(`/users/${user.id}/borrowed`)
        .then(r => r.json())
        .then(d => setBorrowed(d))
    }, [user.id])

    useEffect(() =>{
        fetch(`/users/${user.id}/lent`)
        .then(r => r.json())
        .then(d => setLentOut(d))
    }, [user.id])

    console.log(borrowed)
    console.log(lentOut)

    return(
        <>
            <h2 style={title}>Borrowed from Neighbors</h2>
            <div style={list} > 
                {borrowed.map(rental => <MyRentalCard key={rental.id} rental={rental} role="borrower" updateState={updateState} /> ) }
            </div>

            <h2 style={title}>Lent out to Neighbors</h2>
            <div style={list} > 
                {lentOut.map(rental => <MyRentalCard key={rental.id} rental={rental} role="lender" updateState={updateState} /> ) }
            </div>
        </>
    )
}
export default MyRentals;