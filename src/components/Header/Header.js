import React from 'react';
import logo from '../../images/Logo.svg';


const Header = () => {

    const menuItems = <>
        <li><a className='text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]' href='#'>Home</a></li>
        <li><a className='text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]' href='#'>Order</a></li>
        <li><a className='text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]' href='#'>Manage Inventory</a></li>
        <li><a className='text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]' href='#'>Order Review</a></li>
        <li><label for="my-drawer-4" className='text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]' href='#'>Cart</label></li>
        <li><a className='text-white ml-2 hover:text-[#FF9900] text-[17px] font-medium tracking-[0.005em]' href='#'>Login</a></li>
    </>;




    return (
        <div className='header-area  bg-[#1C2B35]'>
            <div className="container">
                <div class="navbar justify-between p-0 h-[80px]">
                    <div class="navbar-start w-auto">
                        <div class="dropdown">
                            <label tabIndex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                        <a href='#' className="btn btn-ghost normal-case text-xl">
                            <img src={logo} alt="" srcset="" />
                        </a>
                    </div>
                    <div class="navbar-end w-auto hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            {menuItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;