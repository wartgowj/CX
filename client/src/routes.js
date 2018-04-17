import React from 'react';
import { Route, Router } from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import Callback from './components/Callback/Callback';
import Auth from './components/Auth/Auth';
import history from './utils/history';


//import pages here: 
import Detail from "./pages/Detail";
import CXPlaces from "./pages/CXPlaces";
// import Map from "./componenta/Map"


const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          {/* <Route path="/home" render={(props) => <Home auth={auth} {...props} />} /> */}
          <Route path="/cxplaces/:id" render={(props) => <Detail auth={auth} {...props} />} />
          
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>

        <Route exact path="/cxplaces" component={CXPlaces} />
        {/* <Route exact path="/map" component={Map} /> */}

        </div>
      </Router>
  );
}



