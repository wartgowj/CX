import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { GoogleApiWrapper } from "google-maps-react";
import RatesDisplay from "./components/RatesDisplay";

import Auth from './components/Auth/Auth';
import Callback from './components/Callback/Callback';


import history from './utils/history';
import "./utils/App.css"

//import pages here: 
import Detail from "./pages/Detail";
import CXPlaces from "./pages/CXPlaces";
import Home from './pages/Home';
// import Map from "./componenta/Map"
import Router from './routes'


class App extends Component {
  goTo(route) {
    this.props.history.replace(`/home`)
  }

  render() {

    return (
      <Router>

      </Router>
    )
  }

}

export default App;







