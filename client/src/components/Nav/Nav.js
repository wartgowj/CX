import React from "react";
import "./Nav.css";

const Nav = () => (
<nav className="style__navbar___n7Lsv style__sticky___3fVnd style__transparent___1YBfK style__inverse___1SzHV">
  <div className="style__header___fS1Pf">
    
    <a href="/">
      <img className="style__logo___p5nsH" src={require("./logo.png")} alt="logo"/>
    </a>
    <span className="style__right___memgl">
      <span>
        <span className="spliter"></span>
      </span>
      <span>
        <a tabindex="0" href="" className="signup">Sign Up</a>
        <a role="link" className="style__button___2D0xv style__loginButton___2o20s style__buttonBordered___39qfp style__buttonInverse___211ps style__buttonRounded___16YQP" href="/login" tabindex="0">Log in</a>
      </span>
    </span>
  </div>
  </nav>
);


export default Nav;
// Hamburger Side Nav Commented out
// <div className="block" tabindex="0" role="button" className="style__icon___1NLH2 style__hamburger___regNk">
      // <span></span>
      // <span></span>
      // <span></span>
    // </div>