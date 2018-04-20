import React, { Component } from 'react';
import Router from './routes'
import Moment from 'react-moment';



class App extends Component {
  goTo(route) {
    this.props.history.replace(`/`)
  }

  render() {

    return (
      <Router>

      </Router>

    )
  }

}

export default App;







