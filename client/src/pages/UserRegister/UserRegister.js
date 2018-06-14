import React, { Component } from "react";
import API from "../../utils/API";
import Register from "../../components/Register";


class UserRegister extends Component {
  state = {
    name: "",
    password: "",
    passwordConf: "",
    email: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleUserRegister = id => {
    let userData = {
      email: this.state.email,
      username: this.state.name,
      password: this.state.password,
      passwordConf: this.state.passwordConf,
    };
    API.registerUser(userData).then(res => {
      console.log("POST REQUEST");
      
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.handleUserRegister();
  };

  render() {
    return (
      <Register
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      />
    );
  }
}

export default UserRegister;
