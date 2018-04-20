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
        console.log("this needs to be enabled to display correct rates!")
        // ExchangeRates.getRates()
        //     .then(results => {
        //         return results.json();
        //     }).then(data => {
        //         console.log(data)
        //         this.setState({ pesoRate: data.rates.MXN})
        //     })
    };

    render() {
        return (
            <div>
                <div className="live">Live Exchange Rates :</div>
                USD: <span className="dollar">$1</span>
                MXN: <span className="dollar">$17</span>
                {/* The $17 above needs to be changed to {this.state.pesoRate} for it to display the correct rates.  */}
            </div>
        )
        
    }
}  

export default RatesDisplay;