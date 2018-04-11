import React from "react";
import "./Nav.css";

const Nav = () => (
<nav class="style__navbar___n7Lsv style__sticky___3fVnd style__transparent___1YBfK style__inverse___1SzHV">
  <div class="style__header___fS1Pf">
    <div class="block" tabindex="0" role="button" class="style__icon___1NLH2 style__hamburger___regNk">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <a href="/">
      <img class="style__logo___p5nsH" src="../images/logo.png" alt="logo"/>
    </a>
    <span class="style__right___memgl">
      <span>
        <span class="spliter"></span>
      </span>
      <span>
        <a tabindex="0" href="" class="signup">Sign Up</a>
        <a role="link" class="style__button___2D0xv style__loginButton___2o20s style__buttonBordered___39qfp style__buttonInverse___211ps style__buttonRounded___16YQP" href="/login" tabindex="0">Log in</a>
      </span>
    </span>
  </div>
  </nav>
);


export default Nav;
