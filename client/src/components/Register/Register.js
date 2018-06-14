import React from "react";
import "./Register.css";

const Register = props => (
  <form>
    <div className="form-group">
      <label htmlFor="Email">
        <strong>Email</strong>
      </label>
      <input
        className="form-control"
        type="text"
        placeholder="example@gmail.com"
        name="email"
        required=""
        onChange={props.handleInputChange}
      />
      <label htmlFor="Name">
        <strong>Name</strong>
      </label>
      <input
        className="form-control"
        type="text"
        placeholder="Username"
        name="name"
        required=""
        onChange={props.handleInputChange}
      />
      <label htmlFor="Password">
        <strong>Password</strong>
      </label>
      <input
        className="form-control"
        type="password"
        placeholder="Password"
        name="password"
        required=""
        onChange={props.handleInputChange}
      />
      <label htmlFor="PasswordConfirm">
        <strong>Comfirm Password</strong>
      </label>
      <input
        className="form-control"
        type="password"
        placeholder="Confirm Password"
        name="passwordConf"
        required=""
        onChange={props.handleInputChange}
      />
    </div>
    <input 
      type="submit" 
      value="REGISTER"
      className="btn btn-lg btn-danger"
      onClick={props.handleFormSubmit}
    />
  </form>
);

export default Register;
