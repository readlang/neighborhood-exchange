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

function UserPage({user, setUser, setError}) {
  const [showLogIn, setShowLogIn] = useState(true);

  function handleLogIn(username, password) {
    console.log(username, password);
    fetch("/login", {
      method: 'post',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify({username: username, password: password})
    })
    .then(r => r.json())
    .then(data => {
      setError(data.errors)  
      setUser(data)
    } )  
  }

  function handleSignUp(username, password, passwordConfirm, image, location) {
    console.log(username, password, passwordConfirm, image, location);
    fetch("/signup", { 
      method: 'post',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify({username: username, password: password,
        password_confirmation: passwordConfirm //, image: image, location: location // these key names aren't the ones from the backend
      })
    })
    .then(r => r.json())
    .then(data => {
      setError(data.errors)
      setUser(data)
    } )  
  }

  return (
    <div style = {{height: "100vh"}}>
      <div style = {centerXY}> 
        <div style= {boxSize}>
          <div style= {centerXY}>
            <img src={logo} alt="logo" />
          </div> 
        </div>
        <div style = {boxSize} >
          { showLogIn ? <LogInForm setShowLogIn={setShowLogIn} handleLogIn={handleLogIn} user={user}/> : 
            <SignupForm setShowLogIn={setShowLogIn} handleSignUp={handleSignUp} /> }
        </div>
      </div>
    </div> 
  )
}

export default UserPage;