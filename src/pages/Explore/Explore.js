import React from 'react';
import Header from '../../components/Shared/Header/Header';
import PageBanner from '../../components/Shared/PageBanner/PageBanner';
import ProductGrid from '../Home/Home/ProductGrid/ProductGrid';
import './Explore.css';

const Explore = () => {
    return (
        <div>
            <Header />
            <PageBanner title={'Explore our products'} />
            <ProductGrid />
        </div>
    );
};

export default Explore;
