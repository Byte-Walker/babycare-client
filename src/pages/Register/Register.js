import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary/ButtonPrimary';
import Header from '../../components/Shared/Header/Header';
import PageBanner from '../../components/Shared/PageBanner/PageBanner';
import useFirebase from '../../hooks/useFirebase';
import './Register.css';

const Register = () => {
    const { signUpEmail, user } = useFirebase();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { redirectTo } = useParams();
    const history = useHistory();
    console.log(redirectTo);

    if (user.email) {
        if (redirectTo) {
            history.push(`/${redirectTo}`);
        } else {
            history.push('/');
        }
    }
    const handleSignIn = (e) => {
        e.preventDefault();
        signUpEmail(name, email, password);
    };

    return (
        <div>
            <Header />
            <PageBanner title="Account" />
            <div className="login">
                <form className="login-form" onSubmit={handleSignIn}>
                    <h1 className="login-heading">Register</h1>
                    <TextField
                        required
                        variant="outlined"
                        label="Name"
                        type="text"
                        sx={{ width: '100%', marginBottom: '30px' }}
                        onChange={(e) => setName(e.target.value)}
                    />

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
                        <ButtonPrimary text="Register" />
                    </button>
                </form>
                <p className="register-link">
                    Already have an account? <Link to="/login">Login Here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
