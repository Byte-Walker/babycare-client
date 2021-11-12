import React, { useEffect, useState } from 'react';
import Header from '../../components/Shared/Header/Header';
import PageBanner from '../../components/Shared/PageBanner/PageBanner';
import useAuth from '../../hooks/useAuth';
import OrderCard from './OrderCard/OrderCard';
import './MyOrders.css';

const MyOrders = () => {
    const [render, setRender] = useState(true);
    const [orders, setOrders] = useState(null);
    const { user } = useAuth();
    const { uid } = user;

    useEffect(() => {      
        fetch(`https://morning-tundra-59616.herokuapp.com/getorders/${uid}`)
            .then((response) => response.json())
            .then((data) => setOrders(data));
    }, [render]);

    return (
        <div>
            <div>
                <PageBanner title="My Orders" />
                {orders?.length ? (
                    <div className="orders-grid max-width">
                        {orders?.map((order) => (
                            <OrderCard
                                order={order}
                                key={order._id}
                                setRender={setRender}
                            />
                        ))}
                    </div>
                ) : (
                    <h1 className="section-heading">
                        Aww! Looks like you don't have any order yet
                    </h1>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
