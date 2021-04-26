import React, { useState } from 'react';
import fire from '../../fire.js';
import Button from 'react-bootstrap/Button'
const Login = () => {
    const [email, setEmail] = useState("practvp@gmail.com");
    const [password, setPassword] = useState("123456");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            console.error('Incorrect username or password');
        });
    }
    return (
<div>
        <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder="Email"
                />
                <br />
                <input
                    type="password"
                    onChange={({ target}) => setPassword(target.value)}
                    placeholder="Password"
                />
                <br />
                <button type="submit">
                    Sign in
                </button>
            </form>
        </div>



        
    )
};

export default Login