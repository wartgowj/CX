import React from 'react';
import { Route, Router, Switch } from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import Callback from './components/Callback/Callback';
import Auth from './components/Auth/Auth';
import history from './utils/history';
import Map from "./pages/Map"




//import pages here: 
import Detail from "./pages/Detail";
import CXPlaces from "./pages/CXPlaces";
import Nav from './components/Nav'



const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const makeMainRoutes = ({ children }) => {
  return (
      <Router history={history}>
        <div>
          <Nav auth={auth} />
          {/* {children} */}
          <Switch>
            <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
            <Route exact path="/home" render={(props) => <Home auth={auth} {...props} />} />  
            <Route exact path="/cxplaces/:id" render={(props) => <Detail auth={auth} {...props} />} />
            <Route exact path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} /> 
            }}/>
            <Route exact path="/map" component={Map}/> 
            <Route exact path="/cxplaces" component={CXPlaces}/>
          </Switch>
        </div>
      </Router>
  );
}

export default makeMainRoutes;