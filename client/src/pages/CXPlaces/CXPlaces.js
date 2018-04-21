import React, { Component } from "react";
import API from "../../utils/API";
import "./CXPlaces.css";
import CXPlace from "../../components/CXPlace";

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