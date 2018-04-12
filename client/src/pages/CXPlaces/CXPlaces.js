import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";


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
        <ul>
          {
            this.state.cxplaces.map(function(cxplace){
              return <li key={cxplace._id}>
                      <Link to={"/cxplaces/" + cxplace._id}>
                      {cxplace.name} {cxplace.buy} {cxplace.sell}
                      </Link>
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
