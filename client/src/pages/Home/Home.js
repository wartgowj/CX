import React, { Component } from 'react';
import Button from "../../components/Button";
import Header from "../../components/Header";



class Home extends Component {
    login() {
        this.props.auth.login();
    }
    render() {
        // const { isAuthenticated } = this.props.auth;
        return (
            <div className="container">
                <Header />
                    <Button/>
            </div>
        );
    }
}

export default Home;


