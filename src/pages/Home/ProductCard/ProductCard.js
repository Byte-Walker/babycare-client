import React from 'react';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary/ButtonPrimary';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { name, description, rating, price, img } = product;
    return (
        <div className="product-card">
            <img className="product-card-img" src={img} alt={name} />
            <div className="product-card-info">
                <h3 className="product-card-title">{name.slice(0, 20)}</h3>
                <p className="product-card-rating">Rating: {rating}</p>
                <p className="product-card-description">
                    {description.slice(0, 80) + '...'}
                </p>
                <h2 className="product-card-price">${price}</h2>
                <ButtonPrimary text="Buy Now" />
            </div>
        </div>
    );
};

export default ProductCard;
