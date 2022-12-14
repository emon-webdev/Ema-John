import React, { useState } from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  //delete order item
  const handleRemoveItem = (id) => {
    console.log("delete", id);
    const remaining = cart.filter((product) => product._id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-area">
      <div className="products-area">
        <div className="orders-container mt-4 py-12">
          {cart.map((product) => (
            <ReviewItem
              key={product._id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
          {cart.length === 0 && (
            <h2>
              No Items for Review. Please <Link to="/shop">Shop more</Link>
            </h2>
          )}
        </div>
        <div className="cart-container min-w-[264px] min-h-screen sticky right-0  bg-[#FFE0B3] pl-4 pr-4 ">
          <Cart cart={cart} clearCart={clearCart}>
            <Link
              to="/shipping"
              className="w-[232px] h-[48px] leading-[48px] text-[18px] block text-center text-white rounded-md bg-[#FF9900]"
            >
              Proceed Checkout
              <BsFillBagCheckFill className="inline-flex ml-2" />
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
