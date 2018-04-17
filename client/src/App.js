import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Map from "./components/Map"
// import { GoogleApiWrapper } from "google-maps-react";
import RatesDisplay from "./components/RatesDisplay";
import { Link } from "react-router-dom";
import "./utils/App.css"


class App extends Component {
  goTo(route) {
    this.props.history.replace(`/home`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <nav className="style__navbar___n7Lsv style__sticky___3fVnd style__transparent___1YBfK style__inverse___1SzHV">
        <div className="style__header___fS1Pf">
          <div className="ratesDisplay">
            <RatesDisplay />
          </div>
          <Link to="/home" /*onClick={this.goTo.bind(this, 'home')}*/>
            <img className="style__logo___p5nsH" src={require("./utils/logo.png")} alt="logo" />
          </Link>
        
          <span className="style__right___memgl">
            <span>
              <span className="spliter"></span>
            </span>
            <span>
              {/* the links/buttons go here */}
              {/* <button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'home')}
              >
                Home
            </button> */}
              {
                !isAuthenticated() && (
                  <button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </button>
                )
              }
              {
                isAuthenticated() && (
                  <button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </button>
                )
              }
            </span>
          </span>
        </div>
      </nav>
    );
  }
}

export default App;

// Hamburger Side Nav Commented out
// <div className="block" tabindex="0" role="button" className="style__icon___1NLH2 style__hamburger___regNk">
//       <span></span>
//       <span></span>
//       <span></span>
//     </div>








