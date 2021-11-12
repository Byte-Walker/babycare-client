import { Alert, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary/ButtonPrimary';
import PageBanner from '../../../components/Shared/PageBanner/PageBanner';
import './AddProduct.css';

const AddProduct = () => {
    const [alertVisibility, setAlertVisibility] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState('');
    const [rating, setRating] = useState('');

    // Handle add product
    const handleAddProduct = (e) => {
        e.preventDefault();

        const product = {
            name,
            description,
            ingredients,
            price,
            rating,
            img,
        };
        const productForm = document.getElementById('product-form');
        fetch('http://localhost:5000/addproduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        })
            .then((response) => response.json())
            .then((data) => {
                setAlertVisibility(true);
                if (data.insertedId) {
                    productForm.reset();
                    setSeverity('success');
                } else {
                    setSeverity('error');
                    console.error(
                        'Sorry, there was a problem inserting the product'
                    );
                }
            });
    };

    return (
        <div>
            <div className="login">
                {alertVisibility ? (
                    <Alert severity={severity}>
                        {severity === 'success'
                            ? 'Product Added successfully'
                            : 'Sorry! There was something wrong!'}
                    </Alert>
                ) : null}
                <form
                    className="login-form"
                    id="product-form"
                    onSubmit={handleAddProduct}
                >
                    <h1 className="login-heading">Add Product</h1>
                    <TextField
                        required
                        variant="outlined"
                        label="Name"
                        type="text"
                        sx={{ width: '100%', marginBottom: '30px' }}
                        onBlur={(e) => setName(e.target.value)}
                    />
                    <br />
                    <TextField
                        required
                        variant="outlined"
                        label="Description"
                        type="text"
                        sx={{ width: '100%', marginBottom: '30px' }}
                        multiline
                        onBlur={(e) => setDescription(e.target.value)}
                    />
                    <br />
                    <TextField
                        required
                        variant="outlined"
                        label="Ingredients"
                        type="text"
                        sx={{ width: '100%', marginBottom: '30px' }}
                        onBlur={(e) => setIngredients(e.target.value)}
                    />
                    <br />
                    <TextField
                        required
                        variant="outlined"
                        label="Price"
                        type="number"
                        sx={{ width: '100%', marginBottom: '30px' }}
                        onBlur={(e) => setPrice(e.target.value)}
                    />
                    <br />
                    <TextField
                        required
                        variant="outlined"
                        label="Rating"
                        type="number"
                        sx={{ width: '100%', marginBottom: '30px' }}
                        onBlur={(e) => setRating(e.target.value)}
                    />
                    <br />
                    <TextField
                        required
                        variant="outlined"
                        label="Image"
                        type="text"
                        sx={{ width: '100%', marginBottom: '30px' }}
                        onBlur={(e) => setImg(e.target.value)}
                    />
                    <br />
                    <button
                        type="submit"
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                        }}
                    >
                        <ButtonPrimary text="Add" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
