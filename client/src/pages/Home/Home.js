import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";

export const Home = props => (
    <div>
    <Header />
    
    <Link to={"/cxplaces/"}>
            <Button />
    </Link>
    </div>
    
);

export default Home;

