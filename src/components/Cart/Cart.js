import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cart = ({ cart, clearCart, children }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  //Tax (string to number convert)
  const tax = parseFloat(((total * 10) / 100).toFixed(2));
  // Grand price
  const grandTotal = (total + shipping + tax).toFixed(2);

  return (
    <div className="cart sticky top-0 pt-[28px]">
      <h3 className="text-center font-semibold text-2xl mb-[40px]">
        Order Summary
      </h3>
      <p className="text-[20px] mb-[25px] font-medium tracking-[0.005em]">
        Selected Items:
        <span className="fot-bold"> {quantity}</span>
      </p>
      <p className="text-[20px] mb-[25px] font-medium tracking-[0.005em]">
        Total Price: $<span className="fot-bold"> {total}</span>
      </p>
      <p className="text-[20px] mb-[25px] font-medium tracking-[0.005em]">
        Shipping Charge: $<span className="fot-bold"> {shipping}</span>
      </p>
      <p className="text-[20px] mb-[25px] font-medium tracking-[0.005em]">
        Total Tax: $<span className="fot-bold"> {tax}</span>
      </p>

      <h2 className="text-[24px] mb-[50px] font-bold tracking-[0.005em]">
        Grand Total:
        <span className="fot-bold"> {grandTotal}</span>
      </h2>
      <div className="">
        <div>
          <button
            onClick={clearCart}
            className="w-[232px] h-[48px] text-[18px] mb-4 text-center text-white rounded-md bg-[#FF3030]"
          >
            Clear Cart
            <FontAwesomeIcon className=" ml-2" icon={faTrash} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Cart;
