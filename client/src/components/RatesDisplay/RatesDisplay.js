import React, { Component } from "react";
import "./RatesDisplay.css";
import ExchangeRates from '../../services/ExchangeRates.js'

class RatesDisplay extends Component {
    state = {
        pesoRate: ''
    };

    componentDidMount() {
        this.loadRates();
        console.log(this.state.pesoRate)
    }

    loadRates = () => {
        ExchangeRates.getRates()
            .then(results => {
                return results.json();
            }).then(data => {
                console.log(data)
                this.setState({ pesoRate: data.rates.MXN})
            })
    };

    render() {
        return (
            <div>
                USD: $1
                MXN: ${this.state.pesoRate}
            </div>
        )
        
    }
}  

export default RatesDisplay;