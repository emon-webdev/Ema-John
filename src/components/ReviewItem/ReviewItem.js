import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewItem = ({ product, handleRemoveItem }) => {
  const {id, name, img, price, shipping, quantity } = product;

  return (
    <div className="review-item  p-[8px] rounded-md border border-[#95A0A7] w-[570px] mx-auto mb-[25px] flex justify-between items-center">
      <div className="flex items-center justify-center">
        <img
          className="w-[90px] h-full mr-[18px] rounded-md"
          src={img}
          alt=""
          srcSet=""
        />
        <div>
          <h2>{name.length < 25 ? name : name.slice(0, 25) + "  . . ."}</h2>
          <h3>
            Price: <span className="text-[#FF9900]">$ {price}</span>
          </h3>
          <h3>
            Shipping Charge: <span className="text-[#FF9900]">${shipping}</span>
          </h3>
          <h3 className="flex items-center mt-2">
            <span>Quantity: {quantity}</span>
            <button className="py-[2px] px-[8px] bg-[#F9CDCD] text-[#a50a0a] mx-4 rounded-sm text-center">
              <FontAwesomeIcon className="" icon={faMinus} />
            </button>

            <button className="py-[2px] px-[8px] bg-[#F9CDCD] text-[#a50a0a] rounded-sm text-center">
              <FontAwesomeIcon className="" icon={faPlus} />
            </button>
          </h3>
        </div>
      </div>
      <div>
        <button onClick={() => {handleRemoveItem(id)}} className="w-[55px] h-[55px] bg-[#F9CDCD] mr-4 rounded-full text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[27px] h-[31px] mx-auto text-[#EB5757] "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
