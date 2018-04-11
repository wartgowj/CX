import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Detail from "./pages/Detail";
import List from "./components/List";
import Home from "./pages/Home"
//import components here: 

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cxplaces" component={List}/>
        <Route exact path="/cxplaces/:id" component={Detail}/>
      </Switch>
    </div>
  </Router>
);

export default App;
