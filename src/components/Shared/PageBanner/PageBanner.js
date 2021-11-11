import React from 'react';
import './PageBanner.css';

const PageBanner = ({title}) => {
    return (
        <div className="page-banner">
            <h1 className="page-banner-heading">{title}</h1>
        </div>
    );
};

export default PageBanner;