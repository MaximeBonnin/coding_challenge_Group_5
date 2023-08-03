import React from "react";
import PropTypes from 'prop-types';
import './Login.css';
import { useState } from "react";
import { saveLogin as loginUser } from '../../services/loginService'

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token)
    };

    return(
    <div className="login-wrapper">
    <h1>Please Log In</h1>      
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>      
        </form>   
    </div>  
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};