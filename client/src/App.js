import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Button from "./components/Button";
import Header from "./components/Header";



//import pages here: 
import Detail from "./pages/Detail";
import CXPlaces from "./pages/CXPlaces";
import Home from "./pages/Home"

//import components here: 

const App = () => (
  <Router>
    <div>
      <Nav></Nav>
      <Header></Header>
      <Button></Button>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cxplaces" component={CXPlaces}/>
        <Route exact path="/cxplaces/:id" component={Detail}/>
      </Switch>
    </div>
  </Router>
);

export default App;
