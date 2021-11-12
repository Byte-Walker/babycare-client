import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary/ButtonPrimary';
import Header from '../../components/Shared/Header/Header';
import PageBanner from '../../components/Shared/PageBanner/PageBanner';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState(0);
    const [product, setProduct] = useState({});
    const { name, description, price, rating, img, ingredients, _id } = product;
    const { user } = useAuth();
    const { displayName, email, uid } = user;
    const { productId } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`https://morning-tundra-59616.herokuapp.com/singleProduct/${productId}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, []);

    // Handling form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const orderDetails = {
            productId: _id,
            orderedBy: uid,
            phone: phone,
            address: address,
            time: new Date().toLocaleString(),
            status: 'pending',
        };

        fetch('https://morning-tundra-59616.herokuapp.com/postorder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.insertedId) {
                    history.push('/dashboard/myorders');
                }
            });
    };

    return (
        <div>
            <Header />
            <PageBanner title="Place your order"></PageBanner>

            {/* Product details */}
            <div className="place-order-product-details max-width">
                <h1 className="section-heading">Product details</h1>
                <div className="title-separator"></div>
                <div className="place-order-product-grid">
                    <img src={img} alt={name} />
                    <div>
                        <div className="place-order-product-name">
                            <p>{name}</p>
                        </div>
                        <div className="place-order-product-price">
                            <p>${price}</p>
                        </div>
                        <div className="place-order-product-description">
                            <p>{description}</p>
                        </div>
                        <div className="place-order-product-ingredients">
                            <h3 className="place-order-product-title">
                                Ingredients:{' '}
                            </h3>
                            <p>{ingredients}</p>
                        </div>

                        <div className="place-order-product-rating">
                            <h3 className="place-order-product-title">
                                Rating:{' '}
                            </h3>
                            <p>{rating}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Information collecting form */}
            <div className="max-width">
                <form className="login-form" onSubmit={handleFormSubmit}>
                    <div>
                        <h1 className="login-heading">Order Now</h1>
                        <TextField
                            disabled
                            required
                            variant="outlined"
                            label="Name"
                            type="text"
                            sx={{ width: '100%', marginBottom: '30px' }}
                            defaultValue={displayName}
                        />

                        <TextField
                            disabled
                            required
                            variant="outlined"
                            label="Email"
                            type="email"
                            sx={{ width: '100%', marginBottom: '30px' }}
                            defaultValue={email}
                        />
                        <br />
                        <TextField
                            required
                            variant="outlined"
                            label="Phone"
                            type="number"
                            sx={{ width: '100%', marginBottom: '30px' }}
                            onBlur={(e) => setPhone(e.target.value)}
                        />
                        <br />
                        <TextField
                            required
                            varian
                            t="outlined"
                            label="Full Address"
                            type="text"
                            sx={{ width: '100%', marginBottom: '40px' }}
                            multiline
                            onBlur={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                            }}
                        >
                            <ButtonPrimary text="Place Order" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;
