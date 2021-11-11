import React from 'react';
import Header from '../../../components/Shared/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Products limit={6}/>
        </div>
    );
};

export default Home;