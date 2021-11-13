import React from 'react';
import './Features.css';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Features = () => {
    return (
        <div className="max-width">
            <h1 className="section-heading">Features</h1>
            <p className="section-description">The values we provide</p>
            <div className="title-separator"></div>

            {/* Feature grid */}
            <div className="product-grid">
                {/* Feature card 1 */}
                <div className="feature-card">
                    <PriceChangeIcon
                        sx={{
                            fontSize: '100px',
                            color: 'var(--color-primary)',
                        }}
                    />
                    <h2>Extra 30% Cash Back</h2>
                    <p>
                        Enjoy the biggest sale ever. We are offering 30%
                        addtional discount on every product to celebrate the
                        grand opening of our company. So what are you waiting
                        for? Grab your deal right now.
                    </p>
                </div>

                {/* Feature card 2 */}
                <div className="feature-card">
                    <ControlPointIcon
                        sx={{
                            fontSize: '100px',
                            color: 'var(--color-primary)',
                        }}
                    />
                    <h2>50 points bonus</h2>
                    <p>
                        Enjoy the biggest sale ever. We are offering 30%
                        addtional discount on every product to celebrate the
                        grand opening of our company. So what are you waiting
                        for? Grab your deal right now.
                    </p>
                </div>

                {/* Feature card 3 */}
                <div className="feature-card">
                    <SupportAgentIcon
                        sx={{
                            fontSize: '100px',
                            color: 'var(--color-primary)',
                        }}
                    />
                    <h2>24/7 Support</h2>
                    <p>
                        Enjoy the biggest sale ever. We are offering 30%
                        addtional discount on every product to celebrate the
                        grand opening of our company. So what are you waiting
                        for? Grab your deal right now.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;
