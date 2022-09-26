import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = ({ product, handleAddToCart }) => {
    const { name, img, ratings, seller, price } = product;

    return (
        <div className='single-product'>
            <div className="card relative rounded-[8px] border-solid border-[1px] border-[#95A0A7] w-[300px] h-[500px]">
                <figure className='w-full mx-auto '>
                    <img className='w-full h-[286px] p-[8px] rounded-[8px]' src={img} alt="Shoes" />
                </figure>
                <div className="card-body flex-none p-[14px]">
                    <h2 className="card-title text-[22px] tracking-[0.0015em] text-[#0E161A]">
                        {name.slice(0, 20)}
                    </h2>
                    <h2 className="card-title text-[20px] tracking-[0.0015em] text-[#0E161A]">
                        Price: $ {price}
                    </h2>
                    <p className='text-[15px] tracking-[0.005em] text-[#2A414F]'>Manufacturer: {seller}</p>
                    <p className='text-[15px] tracking-[0.005em] text-[#2A414F]'>Rating: {ratings}</p>

                    <button onClick={() => handleAddToCart(product)} className="border-t-[1px] border-[#95A0A7] bg-[#FFE0B3] hover:bg-[#FF9900] absolute bottom-0 w-full h-[48px] left-0">
                        Add to Cart
                        <FontAwesomeIcon className='ml-[8px]' icon={faShoppingCart} />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Product;