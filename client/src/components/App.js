import {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom";  // uses react-router-dom@5 (version 5) to use switch

import UserPage from "./UserPage";
import NavBar from "./NavBar";
import Neighborhood from "./Neighborhood";
import MyRentals from "./MyRentals";
import MyTools from "./MyTools"
import ErrorAlert from "./ErrorAlert";

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  //  Session LogIn - for return visits
  useEffect(() =>{
    fetch("/me")
    .then(r => r.json())
    .then(d => setUser(d)) //this will return user
  }, [])


  console.log("App error:", error)

  function logOut() {
    console.log("logout")
    fetch("/logout", {
      method: 'delete',
      headers: { 'content-type': 'application/json'},
    })
    .then(setUser({})) 
  }

  if ( !user.id ) {
    return (
      <>
        <ErrorAlert error={error} />
        <UserPage user={user} setUser={setUser} setError={setError} />
      </>
    )  
  } else {
    return (
      <div className="App">
        <NavBar user={user} logOut={logOut}  />
        <ErrorAlert error={error} />
        <Switch>
          <Route exact path="/">
            <Neighborhood user={user} setError={setError} />
          </Route>

          <Route exact path="/rentals">
            <MyRentals user={user} />
          </Route>

          <Route exact path="/tools">
            < MyTools user={user} setError={setError} />
          </Route>
        </Switch>  
      </div>
    );
  }
}

export default App;