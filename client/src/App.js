import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";


//import pages here: 
import Detail from "./pages/Detail";
import CXPlaces from "./pages/CXPlaces";
import Home from "./pages/Home";
import Map from "./components/Map"

//import components here: 

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cxplaces" component={CXPlaces}/>
        <Route exact path="/cxplaces/:id" component={Detail}/>
        <Route exact path="/map" component={Map}/>
      </Switch>
    </div>
  </Router>
);

export default App;
