import { Alert, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary/ButtonPrimary';

const MakeAdmin = () => {
    const [alertVisibility, setAlertVisibility] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [email, setEmail] = useState();

    // Handle Make admin
    const handleMakeAdmin = (e) => {
        setAlertVisibility(false);
        e.preventDefault();

        const reviewForm = document.getElementById('review-form');

        // Sending update(PUT) request to the server
        fetch(`https://morning-tundra-59616.herokuapp.com/makeadmin/${email}`, {
            method: 'PUT',
        })
            .then((response) => response.json())
            .then((data) => {
                // Checking if the update was sccessful
                console.log(data);
                setAlertVisibility(true);
                if (data.modifiedCount) {
                    reviewForm.reset();
                    setSeverity('success');
                } else {
                    setSeverity('error');
                    console.error('Sorry, there was a problem creating admin');
                }
            });
    };
    return (
        <div>
            <div className="login">
                {/* Showing response message */}
                {alertVisibility ? (
                    <Alert severity={severity}>
                        {severity === 'success'
                            ? 'Admin added successfully'
                            : 'There was something wrong!'}
                    </Alert>
                ) : null}

                {/* email taking form */}
                <form
                    className="login-form"
                    id="review-form"
                    onSubmit={handleMakeAdmin}
                >
                    <h1 className="login-heading">Make an Admin</h1>

                    <TextField
                        required
                        variant="outlined"
                        label="Email"
                        type="email"
                        sx={{ width: '100%', marginBottom: '40px' }}
                        onBlur={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                        }}
                    >
                        <ButtonPrimary text="Submit" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;
