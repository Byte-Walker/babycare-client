import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    // Common style for icons
    const iconStyle = {
        marginRight: '10px',
        display: 'inline-block',
        fontSize: '30px',
    };

    return (
        <footer className="footer">
            <div className="footer-grid max-width">
                {/* Left side content of the footer */}
                <div className="footer-left">
                    <h1>BabyCare</h1>
                    <p className="footer-left-tagline">
                        The best place for caring your baby
                    </p>
                    <p className="footer-left-location">
                        {' '}
                        <h3 style={{ marginBottom: '10px' }}>Address:</h3> Block
                        #F, Lalmatia <br /> Dhaka, Bangladesh
                    </p>
                </div>

                {/* Right side content of the footer */}
                <div className="footer-right">
                    <p>Follow us on social media</p>
                    <a
                        href="https://www.facebook.com/profile.php?id=100008215602384"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FacebookIcon sx={iconStyle} />
                    </a>
                    <a
                        href="https://twitter.com/search?q=babycare&src=typed_query&f=top"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <TwitterIcon sx={iconStyle} />
                    </a>
                    <a
                        href="https://www.instagram.com/?hl=en"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <InstagramIcon sx={iconStyle} />
                    </a>
                </div>
            </div>

            {/* Copyright text of the fotoer */}
            <p
                style={{
                    margin: '0 auto',
                    textAlign: 'center',
                    paddingBottom: '10px',
                    color: 'white',
                }}
            >
                &copy; 2021 | All rights reserved
            </p>
        </footer>
    );
};

export default Footer;
