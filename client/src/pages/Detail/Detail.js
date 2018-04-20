import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Detail.css";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Modal from "../../components/Modal";
import ListContainer from "../../components/ListContainer";
import "./Detail.css";


class Detail extends Component {
  login() {
    this.props.auth.login();
  }
  state = {
    cxplace: {
      comments: [],  
    },
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

    if (this.state.buy || this.state.sell) {

      this.setState({
        cxplace: {
          buy: this.state.buy,
          sell: this.state.sell,
          comments: this.state.comments
        },
        isModalOpen: false
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
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated() && (
            <div>
            <li className="listBox" key={this.state.cxplace._id}>
                        <img className="logoStyle" src={this.state.cxplace.image} alt="logo" />

                        <div className="nameContainer">
                          <h3 className="cxName">{this.state.cxplace.name}</h3>
                          <div className="info">{this.state.cxplace.hours}</div>

                          <div className="info">{this.state.cxplace.address}</div>
                          <div className="info">{this.state.cxplace.phone}</div>
                        </div>
                         </li>

              <div>
                <button onClick={() => this.openModal()}>Update Rates</button>
                  <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <h1>Update Rates</h1>
                      <form>
                          <Input
                            onChange={this.handleInputChange}
                            name="buy"
                            placeholder="Buy Rate (optional)"
                          />
                          <Input
                            onChange={this.handleInputChange}
                            name="sell"
                            placeholder="Sell Rate (optional)"
                          />
                          <TextArea
                            onChange={this.handleInputChange}
                            name="comments"
                            placeholder="Add Comments (optional)"
                            />
                          <FormBtn
                            disabled={!(this.state.buy && this.state.sell)}
                            onClick={this.handleFormSubmit}
                          > Update                            
                          </FormBtn>
                      </form>                        
                  </Modal>
              </div>
              
             
        
            <Link to="/">← Back to Home</Link>

           
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
  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }  
}


export default Detail;
