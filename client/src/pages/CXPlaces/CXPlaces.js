import React, { Component } from "react";
import API from "../../utils/API";
import "./CXPlaces.css";
import CXPlace from "../../components/CXPlace";
import { Link } from "react-router-dom";
import {
  Button,
  DropdownButton,
  MenuItem,
  ButtonToolbar
} from "react-bootstrap";

class CXPlaces extends Component {
    state = {
      cxplaces: []
    };



  login() {
    this.props.auth.login();
  }

  componentWillMount() {
    this.loadCxplacesBuy();
  }

  loadCxplacesBuy = () => {
    API.getCxplacesBuy()
      .then(res => {
        this.setState({ cxplaces: res.data })
      })
      .catch(err => console.log(err));
  }

  loadCxplacesSell = () => {
    API.getCxplacesSell()
      .then(res => {
        this.setState({cxplaces: res.data})
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="buttons">

            <ButtonToolbar>
              <DropdownButton
                bsStyle = "default"
                title="Sort by"
                key="1"
                id="dropdown-size-medium"
              >
                <MenuItem onClick={this.loadCxplacesBuy} eventKey="1">Buy</MenuItem>
                <MenuItem onClick={this.loadCxplacesSell} eventKey="2">Sell</MenuItem>
                <MenuItem eventKey="3">
                  Distance
                </MenuItem>
              </DropdownButton>
            </ButtonToolbar >


            <Link to={"/map/"}>
              <Button className="mapButton">
                <img className="mapIcon" src={require("../../utils/mapIcon.png")} alt="logo" />
                <span className="mapFont">Map</span>
              </Button>
            </Link>

          </div>
        <ul>
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
                  loadCxplacesBuy={this.loadCxplacesBuy}
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