import {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom";  // uses react-router-dom@5 (version 5) to use switch

import UserPage from "./UserPage";

import Button from "react-bootstrap/Button";    // prefered way to import react bootstrap components


function App() {
  const [logIn, setLogIn ] = useState( false );

  // useEffect(() =>{
  //   fetch("http://localhost:9292/rooms")
  //   .then(r => r.json())
  //   .then(d => setRoomListData(d))
  // }, [])


  if (logIn === false) {
    return (
      <UserPage />
    )  
  } else {
     
  return (
    <div className="App">




      <header>
      This is the Header.
      </header>
      
      <Switch>

        <Route exact path="/">
          <p> Welcome.  Here is the logged in landing. </p>
        </Route>

        <Route exact path="/my_tools">
          <p> Here are my tools</p>

          <button>This is an unstyled button</button>
          <Button>This is a Button</Button>

        </Route>
      </Switch>  

    </div>
  );
  }
}

export default App;
