import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const {push} = useHistory();

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    Axios
      .post('http://localhost:5000/api/login', user)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        push('/bubbles')
      })
      .catch(err => console.log(err));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Name</label>
      <input type='text' name='username' value={user.username} onChange={handleChange} />
      <label htmlFor='password'>Name</label>
      <input type='text' name='password' value={user.password} onChange={handleChange} />
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
