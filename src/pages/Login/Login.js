import { TextField } from '@mui/material';
import React, { useState } from 'react';
import './Login.css';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary/ButtonPrimary';
import Header from '../../components/Shared/Header/Header';
import PageBanner from '../../components/Shared/PageBanner/PageBanner';
import { Link, useHistory } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { signInEmail, user } = useAuth();

    const history = useHistory();
    const url = history.location.state?.from.pathname;

    if (user.email) {
        if(url) {
          history.push(url);  
        }
    }

    console.log(history);

    const handleLogin = (e) => {
        e.preventDefault();
        signInEmail(email, password);
    };

    return (
        <div>
            <Header />
            <PageBanner title="Account" />
            <div className="login">
                <form className="login-form" onSubmit={handleLogin}>
                    <h1 className="login-heading">Login</h1>
                    <TextField
                        required
                        variant="outlined"
                        label="Email"
                        type="email"
                        sx={{ width: '100%', marginBottom: '30px' }}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <TextField
                        required
                        varian
                        t="outlined"
                        label="Password"
                        type="password"
                        sx={{ width: '100%', marginBottom: '40px' }}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                        }}
                    >
                        <ButtonPrimary text="Login" />
                    </button>
                </form>
                <p className="register-link">
                    Don't have an account?{' '}
                    <Link to={url ? ('/register' + url) : '/register'}>Register Here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
