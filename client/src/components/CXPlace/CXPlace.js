import React, { Component } from "react";
import Modal from "../../components/Modal";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

//cxplaceId
//cxplaceName
//cxplaceAddress
//cxplaceBuy
//cxplaceSell

class CXPlace extends Component {
	constructor(props) {
		super(props)

		this.state = {
	      buy: "",
	      sell: "",
	      isSellModalOpen: false,
	      isBuyModalOpen: false,
	    };
	}

	handleInputChange = event => {
	    const { name, value } = event.target;
	    this.setState({
	    	[name]: value
	    });
	}

	handleRateUpdate = event => {

    event.preventDefault();

    this.closeModal();

    if (this.state.sell > 0) {

      console.log ('updating sell rate to ' + this.state.sell)

      API.updateCxplaceRate(this.props.cxplaceId, {
        sell: this.state.sell
      })
      .then(res => this.props.loadCxplaces())
      .catch(err => console.log(err));

    } else if (this.state.buy > 0){

      console.log ('updating buy rate to ' + this.state.buy)

      API.updateCxplaceRate(this.props.cxplaceId, {
        buy: this.state.buy
      })
      .then(res => this.props.loadCxplaces())
      .catch(err => console.log(err));

    }
      
  }

  openModal(which) {
  	if (which === 'buy') {
  		this.setState({ isBuyModalOpen: true })
  	} else if (which === 'sell') {
  		this.setState({ isSellModalOpen: true })
  	}
    
  }

  closeModal() {
    this.setState({ 
    	isBuyModalOpen: false,
    	isSellModalOpen: false,
    })
  }

	render() {
		return (
	        <li className="listBox" key={this.props.cxplaceId}>
	            <Link to={"/cxplaces/" + this.props.cxplaceId}>
	                <div className="nameContainer">
	                    <h3 className="cxName">{this.props.cxplaceName}</h3>
	                    <div className="address">{this.props.cxplaceAddress}</div>
	                </div>
	            </Link>
	            <span class="vertical_dotted_line"></span>
	            <div className="buyBox">
	                <div className="buy">
	                    <span className="buyGreen">Buy</span>
	                    <Button className="buyButton" onClick={() => this.openModal('buy')}> {this.props.cxplaceBuy}</Button>
	                    <Modal isOpen={this.state.isBuyModalOpen} onClose={() => this.closeModal()}>
	                        <h1>Update Rate</h1>
	                        <form>
	                            <Input
	                                onChange={this.handleInputChange}
	                                name="buy"
	                                placeholder="Buy Rate (required)"
	                            />
	                            <FormBtn
	                                disabled={!this.state.buy}
	                                onClick={this.handleRateUpdate}> 
	                               	Update                            
	                            </FormBtn>
	                        </form>                        
	                    </Modal>
	                </div>
	                <div className="buy">
	                    <span className="sellRed">Sell</span>
	                    <Button className="sellButton" onClick={() => this.openModal('sell')}> {this.props.cxplaceSell}</Button>
	                    <Modal isOpen={this.state.isSellModalOpen} onClose={() => this.closeModal()}>
	                       	<h1>Update Rate</h1>
	                        <form>
	                            <Input
	                              onChange={this.handleInputChange}
	                              name="sell"
	                              placeholder="Sell Rate (required)"
	                            />
	                            <FormBtn
	                              disabled={!this.state.sell}
	                              onClick={this.handleRateUpdate}>
	                            Update
	                            </FormBtn>
	                        </form>           
	                    </Modal>
	                </div>
	            </div>
	        </li>
		)
	}

}

export default CXPlace;