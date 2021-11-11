import React from 'react';
import './Banner.css';
import baby from '../../../media/Best-Baby-Skin-Care-Products.jpg';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary/ButtonPrimary';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner max-width">
                <div className="banner-content">
                    <h3>Baby care products</h3>
                    <h1>
                        Natural and safe
                        <br /> For your lovely baby{' '}
                    </h1>
                    <p>
                        Buy best Skin Care items and Everything You Need for
                        Your Baby at the Best Prices. Nationwide Delivery, Easy
                        Returns & Refunds. So what are you waiting for? Click
                        the button below to check out...
                    </p>
                    <ButtonPrimary text={'Explore'} />
                </div>
                <img src={baby} alt="cute baby" className="banner-img" />
            </div>
        </div>
    );
};

export default Banner;
