import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import logo from "../../images/Logo.svg";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const menuItems = (
    <>
      <li>
        <NavLink
          to="/shop"
          className="text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]"
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className="text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]"
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/orders"
          className="text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]"
        >
          Orders
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/manageInventory"
          className="text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]"
          href="#"
        >
          Manage Inventory
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/orderReview"
          className="text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]"
        >
          Order Review
        </NavLink>
      </li>
      {/* <li><label htmlFor="my-drawer-4" className='text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]' href='#'>Cart</label></li> */}

      {user ? (
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]"
          >
            {user?.displayName || user?.email?.toUpperCase().split('@GMAIL.COM', ".com")}
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content p-2 bg-[#1C2B35] shadow  rounded-box w-52 mt-4"
          >
            <li>
              <label
                htmlFor="my-drawer-4"
                className="text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]"
                href="#"
              >
                Cart
              </label>
            </li>
            <li>
              <button
                onClick={logOut}
                className="text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <li>
            <NavLink
              to="/signup"
              className="text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]"
            >
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]"
            >
              Log In
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="header-area w-full bg-[#1C2B35]">
      <div className="container">
        <div className="navbar justify-between p-0 h-[80px]">
          <div className="navbar-start w-auto">
            <div className="dropdown">
              <label
                tabIndex="0"
                className="btn btn-ghost text-white lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu items-center menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <NavLink to="/home" className="btn btn-ghost normal-case text-xl">
              <img src={logo} alt="" srcSet="" />
            </NavLink>
          </div>
          <div className="navbar-end w-auto hidden lg:flex">
            <ul className="menu items-center menu-horizontal p-0">
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
