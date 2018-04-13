import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Detail extends Component {
  state = {
    cxplace: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.getPlace();
  }

  getPlace = () => {
  API.getCxplace(this.props.match.params.id)
      .then(res => this.setState({ cxplace: res.data, buy: "", sell: "", comments: "" }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.buy && this.state.sell) {

      this.setState({
        cxplace: {
          buy: this.state.buy,
          sell: this.state.sell,
          comments: this.state.comments
        }
      })


      API.updateCxplace(this.props.match.params.id, {
        buy: this.state.buy,
        sell: this.state.sell,
        comments: this.state.comments
      })
        .then(res => this.getPlace())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <div>        
              <h1>
                {this.state.cxplace.name}
              </h1>
              <img src={this.state.cxplace.image} alt="logo"/>
              <p>
              <h3>
              {this.state.cxplace.buy}
              {this.state.cxplace.sell}
              {this.state.cxplace.address}
              {this.state.cxplace.phone}
              {this.state.cxplace.hours}
              {this.state.cxplace.comments}
              </h3>
              </p>
              <form>
              <Input
                // value={this.state.buy}
                onChange={this.handleInputChange}
                name="buy"
                placeholder="Buy Rate (required)"
              />
              <Input
                // value={this.state.sell}
                onChange={this.handleInputChange}
                name="sell"
                placeholder="Sell Rate (required)"
              />
              <TextArea
                // value={this.state.comments}
                onChange={this.handleInputChange}
                name="comments"
                placeholder="Comments (Optional)"
              />
              <FormBtn
                disabled={!(this.state.cxplace.buy && this.state.cxplace.sell)}
                onClick={this.handleFormSubmit}
              >
                Update
              </FormBtn>
            </form>

            <Link to="/">← Back to Home</Link>

      </div>
    );
  }
}

export default Detail;
