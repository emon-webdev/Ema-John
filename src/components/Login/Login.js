import React, { useContext } from "react";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
const Login = () => {
  //receive data from UserContext
  const { signIn } = useContext(AuthContext);
  //navigate after login
  const navigate = useNavigate();
  // call location
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    //catch input field
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    //sign in user in firebase
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        //navigate
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content  flex-col w-full md:w-[500px] p-10 rounded-lg border border-[#95A0A7]">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Login</h1>
          </div>
          <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full">
            <div className="card-body p-0">
              <div className="form-control">
                <label className="label">
                  <span className="text-[17px] text-[#2A414F] tracking-[0.0015em]">
                    Email
                  </span>
                </label>
                <input
                  type="text"
                  required
                  name="email"
                  placeholder="Email"
                  className="input input-bordered border border-[#95A0A7] rounded-[5px] h-14"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-[17px] text-[#2A414F] tracking-[0.0015em]">
                    Password
                  </span>
                </label>
                <input
                  type="text"
                  required
                  name="password"
                  placeholder="Password"
                  className="input input-bordered border border-[#95A0A7] rounded-[5px] h-14"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn capitalize rounded-[5px] h-14 bg-[#FFE0B3] hover:bg-[#FF9900] text-xl text-[#0E161A] border-none">
                  Login
                </button>
              </div>
              <label className="label mx-auto">
                <Link
                  to="/signup"
                  className="text-[15px] text-[#2A414F] tracking-[0.0025em]"
                >
                  New to Ema-john?{" "}
                  <span className="text-[#FF9900]">Create New Account</span>
                </Link>
              </label>
              <div className="divider">OR</div>
              <div className="flex items-center justify-evenly">
                <button className="p-3 rounded-full border hover:border-[#FF9900] cursor-pointer">
                  <FcGoogle className="h-6 w-6 text-[#2A414F]" />
                </button>
                <button className="p-3 rounded-full border hover:border-[#FF9900] cursor-pointer">
                  <FaFacebookF className="h-6 w-6 text-[#2A414F]" />
                </button>
                <button className="p-3 rounded-full border hover:border-[#FF9900] cursor-pointer">
                  <BsTwitter className="h-6 w-6 text-[#2A414F]" />
                </button>
                <button className="p-3 rounded-full border hover:border-[#FF9900] cursor-pointer">
                  <BsGithub className="h-6 w-6 text-[#2A414F]" />
                </button>
                <button className="p-3 rounded-full border hover:border-[#FF9900] cursor-pointer">
                  <BsInstagram className="h-6 w-6 text-[#2A414F]" />
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
