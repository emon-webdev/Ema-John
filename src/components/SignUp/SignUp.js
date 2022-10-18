import { default as React, useContext, useState } from "react";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const SignUp = () => {
  //receive data from UserContext(AuthContext)
  const { createUser } = useContext(AuthContext);
  //set error
  const [error, setError] = useState(null);

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();

    //catch input field
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    //password validate
    if (password.length < 6) {
      setError("Password should be 6 characters or more.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Your Password did not match");
      return;
    }

    //create user for Sign up
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));


      
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content  flex-col w-full md:w-[500px] p-10 rounded-lg border border-[#95A0A7]">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Sign Up</h1>
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
                  name="email"
                  required
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
                  name="password"
                  required
                  placeholder="Password"
                  className="input input-bordered border border-[#95A0A7] rounded-[5px] h-14"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-[17px] text-[#2A414F] tracking-[0.0015em]">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="text"
                  name="confirmPassword"
                  required
                  placeholder="Confirm Password"
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
                  to="/login"
                  className="text-[15px] text-[#2A414F] tracking-[0.0025em]"
                >
                  Already have an account?
                  <span className="text-[#FF9900]">Login</span>
                </Link>
              </label>
              {error && (
                <label className="label mx-auto">
                  <span className="text-red-600">{error}</span>
                </label>
              )}
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

export default SignUp;
