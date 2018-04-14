import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Button from "./components/Button";
import Header from "./components/Header";
import { GoogleApiWrapper } from "google-maps-react";
//import pages here: 
import Detail from "./pages/Detail";
import CXPlaces from "./pages/CXPlaces";
import Home from "./pages/Home";
import Map from "./components/Map"
import RatesDisplay from "./components/RatesDisplay";


//import components here: 

class App extends Component {
  render(){
    return(
  <Router>
    <div>
      
      <Nav />
      <Header />
      <Button />
      <Switch>
        <Route exact path="/" component={Home}/>
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
