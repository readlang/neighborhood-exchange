import {useState} from "react"

import LogInForm from "./LogInForm"
import SignupForm from "./SignUpForm"

import logo from "../NEX logo.svg"

const centerXY = {
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center", // left right center
  alignContent: "center", // vertical center
}

const boxSize = {
  height: "400px",
  width: "400px",
  backgroundColor: "rgb(255, 255, 255)",
  padding: "30px"
}

function UserPage() {
  const [showLogIn, setShowLogIn] = useState(true);

  function handleLogIn(username, password) {
    fetch("http://localhost:3000/login", {
      method: 'POST',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify({username: username, password: password})
    })
    .then(r => r.json())
    .then(d => console.log(d) )
  }



  return (
    <div style = {centerXY}> 
      <div style= {boxSize}>
        <div style= {centerXY}>
          <img src={logo} alt="logo" />
        </div> 
      </div>
      <div style = {boxSize} >
        { showLogIn ? <LogInForm setShowLogIn={setShowLogIn} handleLogIn={handleLogIn} /> : <SignupForm/> }
      </div>
    </div> 
  )
}

export default UserPage;