import React, { Component } from 'react';
import Router from './routes'


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







