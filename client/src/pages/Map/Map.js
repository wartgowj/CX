import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import Map from "../../components/Map"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class MapContainer extends Component {

    render() {
        return (
            <Map google={this.props.google} />
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDhfzmSj6hqBiwdJnAt8YULNNePbhflg4Y',
})(MapContainer);