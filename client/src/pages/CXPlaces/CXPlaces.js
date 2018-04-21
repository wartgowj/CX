import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./CXPlaces.css";

import { Button } from "react-bootstrap";
import Modal from "../../components/Modal";
import { Input, FormBtn } from "../../components/Form";
import CXPlace from "../../components/CXPlace";
import Moment from 'react-moment';

class CXPlaces extends Component {
  constructor(props) {
    super(props);
    login() {
    this.props.auth.login();
  }
    this.state = {
      cxplaces: [],
      buy: "",
      sell: "",
      isModalOpen: false
    };

  }
  
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
    const { isAuthenticated } = this.props.auth;
    return (
      
      <div>
      <div>
      <Link to={"/map/"}>
        <Button className="mapButton">
          <img className="mapIcon" src={require("../../utils/mapIcon.png")} alt="logo" />
          <span className="mapFont">Map</span>
        </Button>
      </Link>
      </div>
        <ul className="fullList">
          {

            this.state.cxplaces.map((cxplace) => {
              return (
                <CXPlace
                  key={cxplace._id}
                  cxplaceId={cxplace._id}
                  cxplaceName={cxplace.name}
                  cxplaceAddress={cxplace.address}
                  cxplaceBuy={cxplace.buy}
                  cxplaceSell={cxplace.sell}
                  loadCxplaces={this.loadCxplaces}
                />
              )

                          <div className="lastUpdated">Last updated: <Moment format="HH:mm DD/MM/YY" date={cxplace.date}/>
                          </div>
                        </div>
                      )}

                      {!isAuthenticated() && (
                        <div className="buyBox">
                          <div className="buy">
                            <span className="buyGreen">Buy</span>
                          <p>{cxplace.buy}</p>
                           
                          </div>
                          <div className="buy">
                            <span className="sellRed">Sell</span>
                            <p>{cxplace.sell}</p>
                          </div>
                          <div className="lastUpdated">Last updated: <Moment format="HH:mm DD/MM/YY" date={cxplace.date}/>
                          </div>
                        </div>
                        
                      )}  
            })
          }
        </ul>
      </div>
    );
  }
  
}

export default CXPlaces;
