import {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom";  // uses react-router-dom@5 (version 5) to use switch

import UserPage from "./UserPage";
import NavBar from "./NavBar";
import Neighborhood from "./Neighborhood";
import MyRentals from "./MyRentals";
import MyTools from "./MyTools"

function App() {
  const [user, setUser] = useState({});

  //  Session LogIn - for return visits
  useEffect(() =>{
    fetch("/me")
    .then(r => r.json())
    .then(d => setUser(d)) //this will return user
  }, [])

  function logOut() {
    console.log("logout")
    fetch("/logout", {
      method: 'delete',
      headers: { 'content-type': 'application/json'},
    })
    .then(setUser({})) 
  }

  if ( !user.id ) {
    return (<UserPage user={user} setUser={setUser} />)  
  } else {
    return (
      <div className="App">
        <NavBar user={user} logOut={logOut}  />
        <Switch>
          <Route exact path="/">
            <Neighborhood user={user} />
          </Route>

          <Route exact path="/rentals">
            <MyRentals user={user} />
          </Route>

          <Route exact path="/tools">
            < MyTools user={user} />
          </Route>
        </Switch>  
      </div>
    );
  }
}

export default App;