import { Alert, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Login.css';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary/ButtonPrimary';
import Header from '../../components/Shared/Header/Header';
import PageBanner from '../../components/Shared/PageBanner/PageBanner';
import { Link, useHistory, useParams, useLocation } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [fromMessage, setFromMessage] = useState('');
    const { from } = useParams();

    useEffect(() => {
        setFromMessage(from);
        console.log(fromMessage);
    }, []);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { signInEmail, user, error, setError } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from?.pathname || '/';
    console.log(url);

    const { uid } = user;
    const [role, setRole] = React.useState('');
    React.useEffect(() => {
        fetch(`https://morning-tundra-59616.herokuapp.com/user/${uid}`)
            .then((response) => response.json())
            .then((data) => {
                setRole(data.role);
            });
    }, [uid]);

    if (user.email && role === 'user') {
        history.push(url);
    } else if (user.email && role === 'admin') {
        history.push('/dashboard');
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        setFromMessage('');
        signInEmail(email, password);
    };

    return (
        <div>
            <Header />
            <PageBanner title="Account" />
            <div className="login">
                {fromMessage ? (
                    <Alert severity="success">
                        {
                            'Account created successfully. Please login to your account!'
                        }
                    </Alert>
                ) : null}
                {error ? <Alert severity="error">{error}</Alert> : null}
                <form className="login-form" onSubmit={handleLogin}>
                    <h1 className="login-heading">Login</h1>
                    <TextField
                        required
                        variant="outlined"
                        label="Email"
                        type="email"
                        sx={{ width: '100%', marginBottom: '30px' }}
                        onBlur={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <TextField
                        required
                        varian
                        t="outlined"
                        label="Password"
                        type="password"
                        sx={{ width: '100%', marginBottom: '40px' }}
                        onBlur={(e) => setPassword(e.target.value)}
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
                    <Link to={url ? '/register' + url : '/register'}>
                        Register Here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
