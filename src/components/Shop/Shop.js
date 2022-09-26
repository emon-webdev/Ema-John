import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart)
    };

    return (
        <div className='shop-area'>
            <div className="products-area">
                <div className="products-container ">
                    {
                        products.map(product =>
                            <Product
                             key={product.id} product={product}
                             handleAddToCart={handleAddToCart}
                             />
                        )
                    }
                </div>
                <div className="cart-container sticky top-0 min-w-[264px]  bg-[#FFE0B3] pt-[28px] pl-4 pr-4 ">
                    <h3 className='text-center font-medium text-2xl'>Order Summary</h3>
                    <p>Selected Items: {cart.length}</p>
                </div>
            </div>


        </div>
    );
};

export default Shop;