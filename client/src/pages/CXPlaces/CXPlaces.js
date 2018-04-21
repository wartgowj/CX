import React, { Component } from "react";
import API from "../../utils/API";
import "./CXPlaces.css";
import CXPlace from "../../components/CXPlace";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class CXPlaces extends Component {


  login() {
    this.props.auth.login();
  }

   state = {
      cxplaces: [],
      buy: "",
      sell: "",
      isModalOpen: false
    };


 

  componentDidMount() {
    this.loadCxplaces();
  }


  loadCxplaces = () => {
    API.getCxplaces()
      .then(res => {
        this.setState({ cxplaces: res.data })
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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