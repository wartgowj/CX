import React, {Component} from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Signup.css"
import API from "../../utils/API.js"

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      local: {
        username: "",
        password: "",
        passwordCheck: "",
        pic: {
          type: ""
        }
      }
    };
  }

  componentDidMount() {
    console.log(this.state);
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
      API.postUser({ 
        local: {
          username: this.state.username, password: this.state.password
        }  
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));

  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            />
          </FormGroup>
          <FormGroup controlId="passwordCheck" bsSize="large">
            <ControlLabel>Re-enter Password</ControlLabel>
            <FormControl
              value={this.state.passwordCheck}
              onChange={this.handleChange}
              name="passwordCheck"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm}
            type="submit">
            Signup
          </Button>
        </form>
      </div>
    );
  }
}