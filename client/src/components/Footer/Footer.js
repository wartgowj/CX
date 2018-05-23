import React from "react";
import "./Footer.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Footer = () => (
    <div className="footer">
        <div className="github">
            <a href ="https://github.com/wartgowj/CX">
                <img className="githubLogo" src={require("../../utils/github.png")} alt="github"/>
                </a>
        </div>
        <div className="copyright">{['Copyright',<span>&copy;</span>," CX 2018"]}</div>
        <div>
            <Button className="aboutButton">About</Button>
        </div>
    </div>

);


export default Footer;