import {useState} from "react"
import Button from "react-bootstrap/Button";    
import Form from "react-bootstrap/Form";    

const style = {
    margin: "20px auto 0 auto", //auto = centered horizontally
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "900px"
}

function NeighborhoodSearch({setTools}) {
    const [searchTerm, setSearchTerm] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        if (searchTerm.replace(/\s+/g, '') === "" ) {  // if the search is an empty string
            fetch("/tools")                            // fetch all the tools
            .then(r => r.json())
            .then(d => setTools(d))

        } else {
            fetch(`/tools/search/${searchTerm}`)
            .then(r => r.json())
            .then(data => {
                console.log(data)
                if (data) {
                    setTools([data])    
                } else {
                    setTools([])
                }
                
            })
        }
    }

    return(
        <div style={style} > 
            <Form onSubmit={ handleSubmit } >

                <Form.Group className="mb-3" controlId="formBasicInput">
                    <Form.Control type="input" placeholder="Tool Name Search"
                    value={searchTerm} onChange={e=> setSearchTerm(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit"> Search </Button>

            </Form>
        </div>
    )
}
export default NeighborhoodSearch;