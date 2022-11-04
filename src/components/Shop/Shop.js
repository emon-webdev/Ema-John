import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  getStoredCart
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  // const {products, count} = useLoaderData();

  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  //pagination
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    const url = `http://localhost:5000/products?page=${page}&size=${size}`;
    console.log(page, size);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setCount(data.count);
      });
  }, [page, size]);

  const pages = Math.ceil(count / size);
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  //get data from localStorage
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    const ids = Object.keys(storedCart);
    console.log(storedCart, ids);

    fetch("http://localhost:5000/productsByIds", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((data) => {
        for (const id in storedCart) {
          const addedProduct = data.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  return (
    <div className="shop-area">
      <div className="products-area ">
        <div className="products-container pb-12 relative">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}

          <div className="pagination text-center absolute bottom-0">
            <p>
              Currently Selected page: {page} and size: {size}
            </p>
            {[...Array(pages).keys()].map((number) => (
              <button
                className={page === number && "selected"}
                key={number}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
            <select
              onChange={(event) => setSize(event.target.value)}
              name=""
              id=""
            >
              <option value="5">5</option>
              <option value="10" selected>
                10
              </option>
              <option value="15">15</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div className="cart-container min-w-[264px] min-h-screen right-0  bg-[#FFE0B3] pl-4 pr-4 ">
          <Cart cart={cart} clearCart={clearCart}>
            <Link
              to="/orders"
              className="w-[232px] h-[48px] leading-[48px] text-[18px] block text-center text-white rounded-md bg-[#FF9900]"
            >
              Review Order
              <FontAwesomeIcon className="ml-2" icon={faTrash} />
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;

/* 
//Pagination
1. count (koi ta page ase)
2. per page (koi ta data thakbe 1 page a)
3. pages: count / per page (how many pages)
4. current page 




*/
