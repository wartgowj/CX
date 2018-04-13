import React, { Component } from "react";
import API from "../../utils/API";
import MAP from "../../services/Map"

class Map extends Component {
    state = {
        cxplaces: [],
        userLat:"12",
        userLng: "13"
    };

    componentDidMount() {
        this.loadCxplaces();
        this.loadMap();
    }

    loadCxplaces = () => {
        API.getCxplaces()
            .then(res =>
                this.setState({ cxplaces: res.data })
            )
            .catch(err => console.log(err));
    };

    loadMap = () => {
        MAP.getLocation((position) => {
            this.setState({userLat: position.coords.latitude});
            this.setState({userLng: position.coords.longitude});
        })
    }


    render() {
        return (
            <div class="gmaps">
                <h1>MAP PAGE</h1>
                <h2>{this.state.userLat}</h2>
                <h2>{this.state.userLng}</h2>
                <div class="map" id="map"></div>
            </div>
        );
    }
}

export default Map;