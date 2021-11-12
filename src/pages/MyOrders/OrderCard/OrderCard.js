import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, AlertTitle } from '@mui/material';

export default function MediaCard({ order, setRender, role }) {
    const { productId, time, _id } = order;
    const [product, setProduct] = React.useState({});

    // Get product details
    React.useEffect(() => {
        fetch(`https://morning-tundra-59616.herokuapp.com/singleProduct/${productId}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, []);
    console.log(product);
    const { name, img, price } = product;

    // hanle Delete order
    const handleDeleteOrder = () => {
        fetch(`https://morning-tundra-59616.herokuapp.com/deleteorder/${_id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    setRender(Math.random());
                }
            });
    };

    // Handle approve order

    const handleApproveOrder = () => {
        fetch(`https://morning-tundra-59616.herokuapp.com/approveorder/${_id}`, {
            method: 'PUT',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    setRender(Math.random());
                }
            });
    };

    return (
        <Card sx={{ maxWidth: 365, p: '20px' }}>
            <CardMedia
                component="img"
                // width="100%"
                image={img}
                alt={name}
            />
            <CardContent
                sx={{
                    borderBottom: '1px solid var(--color-primary-light)',
                    marginBottom: '20px',
                }}
            >
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                    sx={{ fontWeight: 'bold' }}
                >
                    {name}
                </Typography>
                <h2>${price}</h2>
                <p>{time}</p>
                <Alert
                    severity={order.status === 'pending' ? 'error' : 'success'}
                >
                    <AlertTitle sx={{ marginBottom: 0 }}>
                        {order.status === 'pending' ? 'Pending' : 'Approved'}
                    </AlertTitle>
                </Alert>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    variant="contained"
                    color="error"
                    onClick={() =>
                        // Confirmation popup
                        window.confirm('Are you sure you want to delete this?')
                            ? handleDeleteOrder()
                            : null
                    }
                >
                    {role === 'admin' || order.status === 'approved'
                        ? 'Delete'
                        : 'Cancel Order'}
                </Button>
                {role === 'admin' && order?.status === 'pending' ? (
                    <Button
                        size="small"
                        variant="contained"
                        color="success"
                        onClick={() =>
                            // Confirmation popup
                            window.confirm(
                                'Are you sure you want approve this order?'
                            )
                                ? handleApproveOrder()
                                : null
                        }
                    >
                        Approve
                    </Button>
                ) : null}

                {/* <Button size="small">Learn More</Button> */}
            </CardActions>
        </Card>
    );
}
