import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import RatesDisplay from "../RatesDisplay";
import NavAccountButton from "../NavAccountButton"

const Nav = ({ auth }) => {

  const login = () =>  {
    auth.login();
  }

  const logout = () => {
    auth.logout();
  }


  

  return (
  <div>
    <nav className="style__navbar___n7Lsv style__sticky___3fVnd style__transparent___1YBfK style__inverse___1SzHV">
      <div className="style__header___fS1Pf">
        <div className="ratesDisplay">
          <RatesDisplay />
        </div>
        <Link to="/">
          <img className="style__logo___p5nsH" src={require("../../utils/logo.png")} alt="logo" />
        </Link>
        <span className="style__right___memgl">
          <span>
            <span className="spliter"></span>
          </span>
          <span>
            {
              !auth.isAuthenticated() && (
                <button
                  id="qsLoginBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={login}
                >
                  Log In
                  </button>
              )
            }
            {
              auth.isAuthenticated() && (
                  <NavAccountButton userProfile={auth.userProfile} getProfile={auth.getProfile} logOut={logout}/>
              )
            }
          </span>
        </span>
      </div>
    </nav>
  </div>
)};


export default Nav;