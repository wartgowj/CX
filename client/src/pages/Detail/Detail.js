import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Detail.css";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Modal from "../../components/Modal";
import ListContainer from "../../components/ListContainer";
import Moment from 'react-moment';
import moment from 'moment';
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
                         <p>Last updated:
                          <br />
                          <Moment format="HH:mm DD/MM/YY" date={this.state.cxplace.date} />
              </p>
                        </div>
            <ListContainer>
                <ul>
                {this.state.cxplace.comments.map(comment =>(
                  <li>
                    {comment}
                  </li>
                  ))}
                </ul>              
              </ListContainer>
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
