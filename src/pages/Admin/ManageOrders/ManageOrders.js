import React, { useEffect, useState } from 'react';
import PageBanner from '../../../components/Shared/PageBanner/PageBanner';
import OrderCard from '../../MyOrders/OrderCard/OrderCard';
import './ManageOrders.css';

const ManageOrders = () => {
    const [render, setRender] = useState(true);
    const [orders, setOrders] = useState([]);

    // Sending GET request to the server to get all the orders
    useEffect(() => {
        fetch(`https://morning-tundra-59616.herokuapp.com/getorders`)
            .then((response) => response.json())
            .then((data) => setOrders(data));
    }, [render]);

    return (
        <div>
            <PageBanner title="Manage Orders" />

            {/* Order card */}
            {orders?.length ? (
                <div className="orders-grid max-width">
                    {orders?.map((order) => (
                        <OrderCard
                            order={order}
                            key={order._id}
                            setRender={setRender}
                            role="admin"
                        />
                    ))}
                </div>
            ) : (
                <h1 className="section-heading">
                    Aww! Looks like you don't have any order yet
                </h1>
            )}
        </div>
    );
};

export default ManageOrders;
