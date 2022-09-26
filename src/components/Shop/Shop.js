import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Shop;