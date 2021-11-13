import { Alert, AlertTitle, Rating, TextField } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary/ButtonPrimary';
import PageBanner from '../../components/Shared/PageBanner/PageBanner';
import './AddReview.css';
import useAuth from '../../hooks/useAuth';

// Giving names to each possible ratings
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const AddReview = () => {
    const { user } = useAuth();

    // Necessary states
    const [alertVisibility, setAlertVisibility] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [description, setDescription] = useState();
    const [value, setValue] = React.useState(3);
    const [hover, setHover] = React.useState(-1);

    // Handle review submit
    const handleReviewSubmit = (e) => {
        setAlertVisibility(false);
        e.preventDefault();

        // Build the review object
        const reviewDetails = {
            uid: user.uid,
            name: user.displayName,
            img: user.img,
            rating: value,
            description: description,
        };
        const reviewForm = document.getElementById('review-form');

        // Post the review to database
        fetch('https://morning-tundra-59616.herokuapp.com/addreview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewDetails),
        })
            .then((response) => response.json())
            .then((data) => {
                setAlertVisibility(true);
                // Checking if the response is positive or negative
                if (data.insertedId) {
                    reviewForm.reset();
                    setSeverity('success');
                } else {
                    setSeverity('error');
                    console.error(
                        'Sorry, there was a problem inserting the review'
                    );
                }
            });
    };

    return (
        <div>
            {/* Top page banner */}
            <PageBanner title="Review" />

            {/* Review taking card */}
            <div className="login">
                {alertVisibility ? (
                    <Alert severity={severity}>
                        {severity === 'success'
                            ? 'Review added successfully'
                            : 'There was something wrong!'}
                    </Alert>
                ) : null}

                <form
                    className="login-form"
                    id="review-form"
                    onSubmit={handleReviewSubmit}
                >
                    {/* Form title */}
                    <h1 className="login-heading">Add a review</h1>
                    <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {/* Rating input field */}
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={
                                <StarIcon
                                    style={{ opacity: 0.55 }}
                                    fontSize="inherit"
                                />
                            }
                        />

                        {value !== null && (
                            <Box sx={{ ml: 2 }}>
                                {labels[hover !== -1 ? hover : value]}
                            </Box>
                        )}
                    </Box>
                    <br />
                    {/* description input field */}
                    <TextField
                        required
                        variant="outlined"
                        label="Description"
                        type="text"
                        multiline
                        sx={{ width: '100%', marginBottom: '40px' }}
                        onBlur={(e) => setDescription(e.target.value)}
                    />

                    {/* SUBMIT button */}
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

export default AddReview;
