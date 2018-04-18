import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Detail extends Component {
  login() {
    this.props.auth.login();
  }
  state = {
    cxplace: {}
  };



  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getCxplace(this.props.match.params.id)
      .then(res => this.setState({ cxplace: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated() && (
            <div>
            <h1>
              {this.state.cxplace.name}
            </h1>
            <img src={this.state.cxplace.image} alt="logo" />
            <p>
              {this.state.cxplace.buy}
              {this.state.cxplace.sell}
              {this.state.cxplace.address}
              {this.state.cxplace.phone}
              {this.state.cxplace.hours}
              {this.state.cxplace.comments}

            </p>
            </div>

          )
        }
        {
          !isAuthenticated() && (
            <div>
              <p> You are not logged in. </p>
            </div>
          )
        }
            <Link to="/home">← Back to Home</Link>

      </div>
    );
  }
}

export default Detail;
