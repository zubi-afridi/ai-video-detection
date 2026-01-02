import React from "react";
import logo from "../../assets/images/AI-Monitor.png";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <>
      <img src={logo} alt="AI Monitor Logo" className="text-center" />

      <div className="w-full max-w-115.5 rounded-xl py-7.5 px-5 bg-cards-bg backdrop-blur-xl border border-Cards-border shadow-xl text-primary-txt">
        <h2 className="font-semibold text-[28px] mb-1 text-center">
          Welcome Back
        </h2>

        <p className="text-center text-sm text-secondary-txt  mb-6  ">
          Sign in to monitor activity, track counts, and <br /> view reports.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm  text-primary-txt  mb-1 font-normal">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg  border border-Cards-border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white placeholder:text-muted-txt "
            />
          </div>

          <div>
            <label className="block text-sm text-primary-txt mb-1 font-normal">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg  border border-Cards-border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white placeholder:text-muted-txt"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-primary-txt">
              <input type="checkbox" className="bg-black" />
              Remember me
            </label>

            <Link to="/forgotpassword" className="text-Primary-btn ">
              Forgot Password?
            </Link>
          </div>
          <Link to="/livemonitoring">
            <button
              type="submit"
              className="w-full rounded-lg bg-Primary-btn py-2 text-sm font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
