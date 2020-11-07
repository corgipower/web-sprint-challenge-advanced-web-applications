import React, { useState } from 'react';
import Axios from 'axios';

const Login = (props) => {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

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
                localStorage.setItem('token', res.data.payload)
                props.history.push('/protected')
            })
            .catch(err => console.log(err));
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Name</label>
            <input type='text' name='username' placeholder='username' value={user.username} onChange={handleChange} />
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' value={user.password} onChange={handleChange} />
            <button type='submit'>Log In</button>
        </form>
    )
}

export default Login;