import {useState} from "react"

function New(){
    const [owner, setOwner] = useState("")
    const [borrower, setBorrower] = useState("")
    const [results, setResults] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        console.log(owner, borrower)
        fetch(`/rentals/search/${owner}-${borrower}`)
        .then(r => r.json())
        .then(d => setResults(d))
    }

    return(
        <>
            <form onSubmit={handleSubmit} >
                <input type="input" placeholder="owner" value={owner} onChange={e => setOwner(e.target.value)} />
                <input type="input" placeholder="borrower" value={borrower} onChange={e => setBorrower(e.target.value)} />
                <button type="submit">search</button>
            </form>
            {results.map(rental => <div key={rental.id}> {rental.tool.name} - {rental.tool.brand} </div> )}


        </>

    )
}

export default New;