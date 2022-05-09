import { Switch, Route } from "react-router-dom";
// uses react-router-dom@5 (version 5) to use switch

function App() {
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
        </Route>

      </Switch>  

    </div>
  );
}

export default App;
