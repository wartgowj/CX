import React, { Component } from "react";
import API from "../../utils/API";
import "./CXPlaces.css";
import CXPlace from "../../components/CXPlace";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class CXPlaces extends Component {
    state = {
      cxplaces: []
    };



  login() {
    this.props.auth.login();
  }

  componentWillMount() {
    this.loadCxplaces();
  }

  


  loadCxplaces = () => {
    API.getCxplaces()
      .then(res => {
        this.setState({ cxplaces: res.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Link to={"/map/"}>
          <Button className="mapButton">
            <img className="mapIcon" src={require("../../utils/mapIcon.png")} alt="logo" />
            <span className="mapFont">Map</span>
          </Button>
        </Link>
        <ul className="fullList">
          {
            this.state.cxplaces.map((cxplace) => {
              return (
                <CXPlace
                  auth={this.props.auth}
                  key={cxplace._id}
                  cxplaceId={cxplace._id}
                  cxplaceName={cxplace.name}
                  cxplaceAddress={cxplace.address}
                  cxplaceBuy={cxplace.buy}
                  cxplaceSell={cxplace.sell}
                  loadCxplaces={this.loadCxplaces}
                  cxplaceDate={cxplace.date}
                  cxplaceUser={cxplace.user}
                />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default CXPlaces;