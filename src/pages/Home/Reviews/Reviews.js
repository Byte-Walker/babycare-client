import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://morning-tundra-59616.herokuapp.com/reviews')
            .then((response) => response.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div className="max-width">
            <h1 className="section-heading">Reviews</h1>
            <p className="section-description">See what our customers say</p>
            <div className="title-separator"></div>
            <div className="product-grid">
                {reviews.map((review) => (
                    <ReviewCard review={review} key={review._id} />
                ))}
            </div>
        </div>
    );
};

export default Reviews;
