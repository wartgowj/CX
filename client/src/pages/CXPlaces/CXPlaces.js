import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./CXPlaces.css";



class CXPlaces extends Component {
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
                      <div className="buyBox">
                        <div className="buy">
                          <span className="buySell">Buy</span>
                          <span className="buySell">{cxplace.buy}</span>
                        </div>
                        <div className="buy">
                          <span className="buySell">Sell</span>
                          <span className="buySell">{cxplace.sell}</span>
                        </div>
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



// handleInputChange = event => {
//   const { name, value } = event.target;
//   this.setState({
//     [name]: value
//   });
// };
// deleteBook = id => {
//   API.deleteBook(id)
//     .then(res => this.loadPlaces())
//     .catch(err => console.log(err));
// };

// handleFormSubmit = event => {
//   event.preventDefault();
//   if (this.state.name && this.state.buyRate && this.state.sellRate) {
//     API.saveBook({
//       name: this.state.name,
//       buyRate: this.state.buyRate,
//       sellRate: this.state.sellRate
//     })
//       .then(res => this.loadPlaces())
//       .catch(err => console.log(err));
//   }
// };