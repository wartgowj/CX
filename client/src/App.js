import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

//import pages here: 
//import components here: 

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        {/* write all the page paths here  */}
        {/* <Route exact path="/" component={Page} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
