import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://morning-tundra-59616.herokuapp.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return products;
};

export default useProducts;
