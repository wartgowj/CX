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
        // ExchangeRates.getRates()
        //     .then(results => {
        //         return results.json();
        //     }).then(data => {
        //         console.log(data)
        //         this.setState({ pesoRate: data.rates.MXN})
        //     })

        this.setState({pesoRate: 18.00})
    };

    render() {
        return (
            <div>
                USD: <span className="dollar">$1</span>
                MXN: <span className="dollar">${this.state.pesoRate}</span>
            </div>
        )
        
    }
}  

export default RatesDisplay;