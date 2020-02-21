import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
              <MainPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
