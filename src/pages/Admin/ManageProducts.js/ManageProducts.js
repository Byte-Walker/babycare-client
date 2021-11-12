import React from 'react';
import PageBanner from '../../../components/Shared/PageBanner/PageBanner';
import ProductGrid from '../../Home/Home/ProductGrid/ProductGrid';
import './ManageProducts.css';

const ManageProducts = () => {
    return (
        <div>
            <PageBanner title="Manage Products"/>
            <ProductGrid admin={true}/>
        </div>
    );
};

export default ManageProducts;
