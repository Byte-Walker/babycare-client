import { Alert, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary/ButtonPrimary';
import './AddProduct.css';

const AddProduct = () => {
    // Necessary states
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

        // Building the product object
        const product = {
            name,
            description,
            ingredients,
            price,
            rating,
            img,
        };
        const productForm = document.getElementById('product-form');

        // Sending POST request to the server
        fetch('https://morning-tundra-59616.herokuapp.com/addproduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        })
            .then((response) => response.json())
            .then((data) => {
                // Checking if the insertion was usccessful in the server
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
            {/* Add product card container */}
            <div className="login">
                {alertVisibility ? (
                    <Alert severity={severity}>
                        {severity === 'success'
                            ? 'Product Added successfully'
                            : 'Sorry! There was something wrong!'}
                    </Alert>
                ) : null}

                {/* Product information collecting form */}
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
