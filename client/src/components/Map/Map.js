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
                center: { lat: 32.7102, lng: -117.10593 },
                zoom: 11
            })

            this.map = new maps.Map(node, mapConfig)

            // Creates a marker at the users location
            const usericon = {
                url: "https://www.shareicon.net/data/2015/11/26/678308_man_512x512.png",
                scaledSize: new google.maps.Size(60, 60),
            };
            const userMarker = new google.maps.Marker({
                position: { lat: this.state.userLat, lng: this.state.userLng},
                map: this.map,
                title: "You are here",
                animation: google.maps.Animation.BOUNCE,
                icon: usericon
            })

            // Creates a marker for each cxplace
            this.state.cxplaces.forEach(cxplace => {
                let icon = {
                    url: cxplace.icon, // url
                    scaledSize: new google.maps.Size(50, 50), // scaled size
                    // origin: new google.maps.Point(0, 0), // origin
                    // anchor: new google.maps.Point(0, 0) // anchor
                };
                const marker = new google.maps.Marker({
                    position: { lat: parseFloat(cxplace.lat), lng: parseFloat(cxplace.lng) },
                    map: this.map, 
                    title: cxplace.name,
                    icon: icon,
                    url: "/cxplaces/"+ cxplace._id
                });
                google.maps.event.addListener(marker, 'click', function () {
                    window.location.href = this.url;
                });
            })

        }
    }


    render() {
        const style = { //sets size of map//
            width: '80vw', 
            height: '90vh',
            margin: 'auto' 
        }

        return ( 
            <div ref="map" style={style}></div>
        )
    }
}
