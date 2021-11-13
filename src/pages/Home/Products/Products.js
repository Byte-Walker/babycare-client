import React from 'react';
import ProductGrid from '../Home/ProductGrid/ProductGrid';
import './Products.css';

const Products = () => {
    return (
        <div className="max-width">
            <h1 className="section-heading">Products</h1>
            <p className="section-description">
                Explore the best products for your baby
            </p>
            <div className="title-separator"></div>
            <ProductGrid limit={6} />
        </div>
    );
};

export default Products;


// Image list
/*
https://i.ibb.co/2tGGC2H/p1.jpg
https://i.ibb.co/kKPBn3m/p2.jpg
https://i.ibb.co/jgyk0qn/p3.jpg
https://i.ibb.co/s2sVrNM/p4.jpg
https://i.ibb.co/QM0xHqL/p5.jpg
https://i.ibb.co/QrypMK2/p6.jpg
https://i.ibb.co/566QCBy/p7.jpg
https://i.ibb.co/5BqVNS2/p8.jpg
https://i.ibb.co/5kQ2NdV/p9.jpg
https://i.ibb.co/YpqtRCP/p10.jpg
*/
