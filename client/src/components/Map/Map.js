import React, { Component } from "react";
import API from "../../utils/API";
import MAP from "../../services/Map";
import ReactDOM from 'react-dom';

export default class Map extends Component {
    state = {
        cxplaces: [],
        userLat: "",
        userLng: "",
    };

    componentDidMount() {
        this.getUserLocation();
        this.loadCxplaces();
    }

    componentDidUpdate(){
        this.loadMap();
        console.log(this.state.cxplaces)
    }

    getUserLocation = () => {
        MAP.getLocation((position) => {
            this.setState({ userLat: position.coords.latitude });
            this.setState({ userLng: position.coords.longitude });
            console.log(this.state.userLat, this.state.userLng);
        })
    }

    loadCxplaces = () => {
        API.getCxplaces()
            .then(res =>
                this.setState({ cxplaces: res.data })
            )
            .catch(err => console.log(err));
    };

    loadMap = () => {
        if (this.props && this.props.google) {
            const { google } = this.props;
            const maps = google.maps; 

            const mapRef = this.refs.map; 
            const node = ReactDOM.findDOMNode(mapRef);

            const mapConfig = Object.assign({}, {
                center: { lat: this.state.userLat, lng: this.state.userLng },
                zoom: 10
            })

            this.map = new maps.Map(node, mapConfig)

            // Creates a marker at the users location
            const userMarker = new google.maps.Marker({
                position:  {lat: this.state.userLat, lng: this.state.userLng},
                map: this.map,
                title: "You are here",
                animation: google.maps.Animation.BOUNCE,
            })

            // Creates a marker for each cxplace
            this.state.cxplaces.forEach(cxplace => {
                const marker = new google.maps.Marker({
                    position: { lat: parseFloat(cxplace.lat), lng: parseFloat(cxplace.lng) },
                    map: this.map, 
                    title: cxplace.name 
                });
            })

        }
    }


    render() {
        const style = { //sets size of map//
            width: '90vw', 
            height: '75vh',
            margin: 'auto' 
        }

        return ( 
            <div ref="map" style={style}></div>
        )
    }
}
