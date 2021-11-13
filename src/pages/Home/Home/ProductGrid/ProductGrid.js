import React from 'react';
import './ProductGrid.css';
import useProducts from '../../../../hooks/useProducts';
import ProductCard from '../../ProductCard/ProductCard';

const ProductGrid = ({ limit, admin }) => {
    const products = useProducts();
    return (
        <div className="max-width">
            <div className="product-grid ">
                {products?.map((product, index) =>
                    limit ? (
                        index < limit ? (
                            <ProductCard product={product} key={product._id} />
                        ) : null
                    ) : (
                        <ProductCard
                            product={product}
                            key={product._id}
                            admin={admin}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default ProductGrid;
