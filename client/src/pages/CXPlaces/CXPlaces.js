import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./CXPlaces.css";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Modal from "../../components/Modal";
import { Input, FormBtn } from "../../components/Form";
import CXPlace from "../../components/CXPlace";


class CXPlaces extends Component {

  constructor(props) {
    super(props);

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

  // handleRateUpdate = event => {

  //   event.preventDefault();

  //   if (this.state.sell) {

  //     console.log ('updating sell rate')

  //     API.updateCxplaceRate(this.props.match.params.id, {
  //       sell: this.state.sell
  //     })
  //     .then(res => this.loadCxplaces())
  //     .catch(err => console.log(err));

  //   } else if (this.state.buy){

  //     console.log ('updating buy rate')

  //     API.updateCxplaceRate(this.props.match.params.id, {
  //       buy: this.state.buy
  //     })
  //     .then(res => this.loadCxplaces())
  //     .catch(err => console.log(err));

  //   }
      
  // }


  render() {
    return (
      <div>
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
            })
          }
        </ul>
      </div>
    );
  }
  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
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