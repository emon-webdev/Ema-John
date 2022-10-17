import React from "react";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content  flex-col w-full md:w-[500px] p-10 rounded-lg border border-[#95A0A7]">
          <div class="text-center lg:text-left">
            <h1 class="text-4xl font-bold">Login</h1>
          </div>
          <form class="card flex-shrink-0 w-full">
            <div class="card-body p-0">
              <div class="form-control">
                <label class="label">
                  <span class="text-[17px] text-[#2A414F] tracking-[0.0015em]">
                    Email
                  </span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Email"
                  class="input input-bordered border border-[#95A0A7] rounded-[5px] h-14"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="text-[17px] text-[#2A414F] tracking-[0.0015em]">
                    Password
                  </span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Password"
                  class="input input-bordered border border-[#95A0A7] rounded-[5px] h-14"
                />
              </div>
              <div class="form-control mt-6">
                  <button class="btn capitalize rounded-[5px] h-14 bg-[#FFE0B3] hover:bg-[#FF9900] text-xl text-[#0E161A] border-none">
                    Login
                  </button>
                </div>
                <label class="label mx-auto">
                  <Link
                    to="/signup"
                    class="text-[15px] text-[#2A414F] tracking-[0.0025em]"
                  >
                    New to Ema-john?{" "}
                    <span className="text-[#FF9900]">Create New Account</span>
                  </Link>
                </label>
              <div class="divider">OR</div>
              <div class="flex items-center justify-evenly">
                <button class="p-3 rounded-full border hover:border-[#FF9900] cursor-pointer">
                  <FcGoogle className="h-6 w-6 text-[#2A414F]" />
                </button>
                <button class="p-3 rounded-full border hover:border-[#FF9900] cursor-pointer">
                  <FaFacebookF className="h-6 w-6 text-[#2A414F]"/>
                </button>
                <button class="p-3 rounded-full border hover:border-[#FF9900] cursor-pointer">
                  <BsTwitter className="h-6 w-6 text-[#2A414F]"/>
                </button>
                <button className="p-3 rounded-full border hover:border-[#FF9900] cursor-pointer" >
                  <BsGithub className="h-6 w-6 text-[#2A414F]"  />
                </button>
                <button className="p-3 rounded-full border hover:border-[#FF9900] cursor-pointer" >
                  <BsInstagram className="h-6 w-6 text-[#2A414F]"  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
