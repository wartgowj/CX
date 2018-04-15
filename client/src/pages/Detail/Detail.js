import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Modal from "../../components/Modal";

class Detail extends Component {
  state = {
    cxplace: {},
    isModalOpen: false
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
          sell: this.state.sell
          // comments: this.state.comments,
        },
        isModalOpen: false
      })

      API.updateCxplace(this.props.match.params.id, {
        buy: this.state.buy,
        sell: this.state.sell
        // comments: this.state.comments
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
              {this.state.cxplace.buy}
              </p>
              <p>
              {this.state.cxplace.sell}
              </p>
              <p>
              {this.state.cxplace.address}
              </p>
              <p>
              {this.state.cxplace.phone}
              </p>
              <p>
              {this.state.cxplace.hours}
              </p>
              <p>
              {this.state.cxplace.comments}
              </p>
              <div>
                <button onClick={() => this.openModal()}>Update Rates</button>
                  <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <h1>Update Rates</h1>
                      <form>
                          <Input
                            onChange={this.handleInputChange}
                            name="buy"
                            placeholder="Buy Rate (required)"
                          />
                          <Input
                            onChange={this.handleInputChange}
                            name="sell"
                            placeholder="Sell Rate (required)"
                          />
                          <FormBtn
                            disabled={!(this.state.buy && this.state.sell)}
                            onClick={this.handleFormSubmit}
                          > Update                            
                          </FormBtn>
                      </form>                        
                  </Modal>
              </div>
              <br />
              <div>
                <button>Add Comments</button>
              </div>
        
            <Link to="/">← Back to Home</Link>
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


export default Detail;
