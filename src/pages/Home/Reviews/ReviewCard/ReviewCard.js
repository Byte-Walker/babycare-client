import React from 'react';
import './ReviewCard.css';

import Avatar from '@mui/material/Avatar';
import { Rating } from '@mui/material';

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const ReviewCard = ({ review }) => {
    const { name, rating, img, description } = review;

    return (
        <div className="review-card">
            <div className="avatar-name">
                {img ? (
                    <Avatar alt={name} src={img} />
                ) : (
                    <Avatar {...stringAvatar(name)} />
                )}
                <div className="name-rating">
                    <h4 className="review-card-name">{name}</h4>
                    <Rating
                        name="read-only"
                        value={rating}
                        readOnly
                        precision={0.5}
                        sx={{fontSize: '18px'}}
                    />
                </div>
            </div>
            <p className="review-card-description">{description}</p>
        </div>
    );
};

export default ReviewCard;
