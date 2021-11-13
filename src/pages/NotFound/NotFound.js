import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary/ButtonPrimary';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found max-width">
                <h1 className="not-found-number">404</h1>
                <h1 className="not-found-text">
                    Oww god! Looks like you have chosen the wrong path. Don't
                    worry. I am here to take you home. So,
                </h1>
                <p> </p>
                <Link to="/">
                    {' '}
                    <ButtonPrimary text="Wanna go home? Just click me!" />{' '}
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
