import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './LoginForm.css';
import axios from 'axios';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8080/api/users/login',{ email, password });
            navigate('/staffdash');
            setEmail('');
            setPassword('');
        } catch (error) {
            setError('An error occurred. Please try again.');
            console.error("Error fetching users: ", error); 
        }
    };

    return (


        <div className="video-background">
      <video autoPlay loop muted>
        <source src={"https://videos.pexels.com/video-files/4668338/4668338-hd_1920_1080_25fps.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="LoginContainer">
        <h1 id="LoginTitle">Staff Login</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <AccountCircleIcon/>
        
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            error={!!error}
            helperText={error}
          />
          <br /><br/>
          <HttpsIcon/>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            error={!!error}
            helperText={error}
          />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <h4>
            New User? <a onClick={() => navigate("/register")}>Register</a>
          </h4>
        </form>
      </div>
    </div>
  );
};


   
        


export default LoginForm;