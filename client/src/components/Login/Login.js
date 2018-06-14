import React from "react";
import "./Login.css";

const Login = props => (
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
    </div>
    <input 
      type="submit" 
      value="REGISTER"
      className="btn btn-lg btn-danger"
      onClick={props.handleFormSubmit}
    />
  </form>
);

export default Login;
