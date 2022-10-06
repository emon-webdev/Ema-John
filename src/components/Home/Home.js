import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../../images/home.png';
const Home = () => {
    return (
        <div className='py-[130px]'>
            <div className="container">
                <div className="hero-wrap flex items-center justify-between">
                    <div className="hero-info mr-[70px] flex flex-col justify-evenly">
                        <h5 className='text-[17px] font-[400] tracking-widest'>Sale up to 7 0% off</h5>
                        <h2 className='text-[60px] font-bold text-[#1C2B35]'>New Collection For Fall</h2>
                        <p>Discover all the new arri vals of ready-to-wear collection.</p>
                        <Link to='/shop' className='text-[#0E161A] w-[200px] h-[56px] leading-[56px] text-center bg-[#FF9900] inline'>SHOP NOW</Link>
                    </div>
                    <div className="hero-img">
                        <img className='rounded-lg' src={HeroImg} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;