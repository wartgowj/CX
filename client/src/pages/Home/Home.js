import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Home = props => (

    <Link to={"/cxplaces/"}>
        <button>
            "Near Me"
        </button>
    </Link>
    
);

export default Home;

