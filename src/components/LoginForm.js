import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { NavLink } from "react-router-dom";
import { login } from "../store/actions/authentication";
import './stylesheets/LoginForm.css'

const LoginForm = (props) => {
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("password");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="loginForm">
      <h2 className='loginForm__header'>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="loginForm__input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={updateUsername}
        />
        <input
          className="loginForm__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button className="loginForm__button" type="submit">Log In</button>
      </form>
      {/* <NavLink to="/landing" className="loginForm__signupLink">No Account? Sign Up Here!</NavLink> */}
    </div>
  );
};

export default LoginForm;
