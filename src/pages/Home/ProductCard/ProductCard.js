import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary/ButtonPrimary';
import './ProductCard.css';

const ProductCard = ({ product, admin }) => {
    const { name, description, rating, price, img, _id } = product;

    // Handle delete product
    const handleDeleteProduct = () => {
        fetch(`https://morning-tundra-59616.herokuapp.com/deleteproduct/${_id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    window.location.reload();
                }
            });
    };

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
                {admin ? (
                    <Button
                        color="error"
                        variant="contained"
                        onClick={() =>
                            // Confirmation popup
                            window.confirm(
                                'Are you sure you want to delete this?'
                            )
                                ? handleDeleteProduct()
                                : null
                        }
                    >
                        Delete
                    </Button>
                ) : (
                    <Link to={'/placeorder/' + _id}>
                        <ButtonPrimary text="Buy Now" />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
