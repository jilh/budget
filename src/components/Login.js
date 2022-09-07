import React, { useState } from 'react';
import { baseURL } from '../requests'
import axios from 'axios'
import { Button, Paper, TextField, Divider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";


const Login = () => {
    const [email, setEmail] = useState('john@app.com');
    const [password, setPassword] = useState('123');
    const navigate = useNavigate();

    const submitForm = () => {
        if(email && password){
            axios({
                method: 'POST',
                url: baseURL+'login', 
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: { email: email, password: password }
                
            }).then((response) => {
                sessionStorage.setItem('is-authenticated', 'true');
                sessionStorage.setItem('jwt', response.data.jwt);
                sessionStorage.setItem('accessType', response.data.accessType)
                navigate('/app/dashboard')
            })
        }else{
            alert("Unable to process your request")
        }
    }
    
    return(
        <div className="login-wrapper">
            <div className="form-wrapper">
                <Paper variant="outlined" elevation={0} className="login-paper">
                    <p><b>john@app.com</b> - Owner role</p>
                    <p><b>mike@app.com</b> - reader role</p>
                    <p>password: 123</p>
                </Paper>

                <form className="login-form" action="#" method="POST">
                    <b>Login to your account</b>
                    <TextField label="Email *" onChange={ (e) => setEmail(e.target.value) } type={"text"} variant="standard" color="error" fullWidth margin="normal" defaultValue={email}/>
                    <TextField label="Password *" onChange={ (e) => setPassword(e.target.value) } type={"password"} variant="standard" color="error" fullWidth margin="normal" defaultValue={password}/>
                    <Button variant="contained" onClick={ () => submitForm() } disabled={ !email || !password } disableElevation color="primary" className={"login-button"} fullWidth>Login</Button>
                    <Divider className="login-divider">OR</Divider>
                    <Link to="/signup"><Button className="other-button" variant="outlined" disableElevation fullWidth>Signup</Button></Link>
                    <Link to="/recover"><Button className="other-button" variant="outlined" disableElevation fullWidth>Recover</Button></Link>
                </form>
            </div>
        </div>
    )
}

export default Login;