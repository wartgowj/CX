import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import { GoogleApiWrapper } from "google-maps-react";
//import pages here: 
import Detail from "./pages/Detail";
import CXPlaces from "./pages/CXPlaces";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Map from "./components/Map"



//import components here: 

class App extends Component {
  render(){
    return(
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/cxplaces" component={CXPlaces}/>
        <Route exact path="/cxplaces/:id" component={Detail}/>
        <Route exact path="/map" render={(props) => ( <Map google={this.props.google}/> )} /> 
      </Switch>
    </div>
   </Router>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDhfzmSj6hqBiwdJnAt8YULNNePbhflg4Y',
})(App);
