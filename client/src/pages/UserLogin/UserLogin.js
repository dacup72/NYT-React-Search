import React, { Component } from "react";
import API from "../../utils/API";
import Login from "../../components/Login";



class UserLogin extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleUserLogin = id => {
    let userData = {
      name: this.state.name,
      password: this.state.password
    };
    API.loginUser(userData).then(res => res.redirect("/home"));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.handleUserLogin();
  };

  render() {
    return (
      <Login
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      />
    );
  }
}

export default UserLogin;
