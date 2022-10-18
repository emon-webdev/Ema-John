import React from "react";
import { Link } from "react-router-dom";
import Line from "../../images/line.png";
const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="">
        <div className="flex justify-center items-center">
          <h2 className="text-[62px]">404</h2>
          <img src={Line} className="w-[3px] h-[57px] mx-9" alt="" srcSet="" />
          <p className="text-[62px]">Nothing here to see</p>
        </div>
        <div className="text-center mt-2">
          <Link
            className="text-[#0E161A] w-[200px] h-[56px] block leading-[56px] mx-auto font-semibold bg-[#FF9900]"
            to="/home"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
