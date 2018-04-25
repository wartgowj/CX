import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Detail.css";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Modal from "../../components/Modal";
import ListContainer from "../../components/ListContainer";
import Moment from 'react-moment';
import "./Detail.css";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";




class Detail extends Component {
  login() {
    this.props.auth.login();
  }
  state = {
    cxplace: {
      comments: []  
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
          comments: this.state.cxplace.comments
        },
        isModalOpen: false
      })

      API.updateCxplace(this.props.match.params.id, {
        buy: this.state.buy,
        sell: this.state.sell,
        comments: this.state.comments
        // comments: this.state.comments
      })
        .then(res => this.getPlace())
        .catch(err => console.log(err));
    }
  };

  
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        
            
            <div>
              <li className="listBox" key={this.state.cxplace._id}>
              <div className="flex">   
                    <Link to="/cxplaces/">
                  <Button className="backButt">← Back to List</Button>
                </Link>             
                <img className="logoStyle" src={this.state.cxplace.image} alt="logo" />

              </div>
                <div className="nameContainer">
                  <h3 className="cxName">{this.state.cxplace.name}</h3>
                  <div className="info">{this.state.cxplace.hours}</div>
                  <div className="info">{this.state.cxplace.address}</div>
                  <div className="info">{this.state.cxplace.phone}</div>
                  {/* BUY AND SELL WITH TOOLTIP */}
                  <div className="buy">
                    <OverlayTrigger placement="left" overlay={
                      <Tooltip id="tooltip">
                        If exchanging to dollars, this is the amount of pesos you pay per dollar.
                    </Tooltip>
                    }>
                  <div> <span className="buyGreen">Buy: </span> <span className="info">${this.state.cxplace.buy}</span></div>
                 
                    </OverlayTrigger>
                    
                    <OverlayTrigger placement="left" overlay={
                      <Tooltip id="tooltip">
                        If exchanging to pesos, this is the amount of pesos you get per dollar you pay.
                            </Tooltip>
                    }>
                    <div>
                    <span className="sellRed">Sell: </span><span className="info">${this.state.cxplace.sell}</span>
                    </div>
                    </OverlayTrigger>
                  </div>
                  {/* BUY / SELL WITH TOOLTIP END */}
                  <div className="info lastUpdated">Last updated: <Moment format="HH:mm DD/MM/YY" date={this.state.cxplace.date}/>
                  </div>
                </div>

                {/* THIS IS THE UPDATE BUTTON/MODAL  */}

                {
                  isAuthenticated() && (
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
                      <ListContainer>
                        <ul>
                          {this.state.cxplace.comments.map(comment => (
                            <li>
                              {comment}
                            </li>
                          ))}
                        </ul>
                      </ListContainer>
                    </div>
                  )}
              {/* THIS IS THE END OF THE UPDATE BUTTON/MODAL */}

            </li>
            
            </div>
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
