import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./CXPlaces.css";
import { Button } from "react-bootstrap";
import Moment from 'react-moment';
import moment from 'moment';





class CXPlaces extends Component {
  login() {
    this.props.auth.login();
  }
  state = {
    cxplaces: []
  };

  componentDidMount() {
    this.loadCxplaces();
  }

  loadCxplaces = () => {
    API.getCxplaces()
      .then(res =>
        this.setState({ cxplaces: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      
      <div>
        <ul className="fullList">
          {
            this.state.cxplaces.map(function(cxplace){
              return <li className="listBox" key={cxplace._id}>
                      <Link to={"/cxplaces/" + cxplace._id}>
                        <div className="nameContainer">
                          <h3 className="cxName">{cxplace.name}</h3>
                          <div className="address">{cxplace.address}</div>
                        </div>
                      </Link>
                      <span class="vertical_dotted_line"></span>

                      {isAuthenticated() && (
                        <div className="buyBox">
                          <div className="buy">
                            <span className="buyGreen">Buy</span>
                            <Button className="buyButton"> {cxplace.buy}</Button>
                          </div>
                          <div className="buy">
                            <span className="sellRed">Sell</span>
                            <Button className="sellButton"> {cxplace.sell}</Button>
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
                        <div>
                      Log in to update rates.
                        </div>
                        </div>
                        
                      )}
                      
                <div>Last updated:
                  <br/>
                  <Moment format="HH:mm DD/MM/YY" date={cxplace.date}/>
                </div>

                    </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default CXPlaces;
