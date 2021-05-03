import React, { useState } from 'react';
import fire from '../../fire.js';
import { Button, Segment, Form } from 'semantic-ui-react'
import {Header} from '../Header'
import {Link} from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState("practvp@gmail.com");
    const [password, setPassword] = useState("123456");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            console.error('Incorrect username or password');
        });
    }
    const handleSubmitSignup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
            console.error('Incorrect username or password');
        });
    }

    return (
<div classname="formalign">
    <Header/>
<Segment inverted>
        <h2>Login</h2>
            <Form>
         
            <Form.Field>
                <input
                    type="text"
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder="Email"
                />
            </Form.Field>
                <br />
                <Form.Field>
                <input
                    type="password"
                    onChange={({ target}) => setPassword(target.value)}
                    placeholder="Password"
                />
              </Form.Field>
                <br />
                <div>
  
      <Button onClick={handleSubmit} inverted color="teal">
        Login
      </Button>
    <Link to="/home">
    <Button onClick={handleSubmitSignup}  inverted color="teal">
    Sign Up!
    </Button>
    </Link>
  
  </div>

            </Form>
            </Segment>
        </div>



        
    )
};

export default Login