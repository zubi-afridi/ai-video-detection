import React from "react";
import logo from "../../assets/images/AI-Monitor.png";
import { Link } from "react-router-dom";
const ForgotPasswordForm = () => {
  return (
    <>
      <img src={logo} alt="AI Monitor Logo" className="text-center" />

      <div className="w-full max-w-115.5 rounded-xl py-7.5 px-5 bg-cards-bg backdrop-blur-xl border border-Cards-border shadow-xl text-primary-txt">
        <h2 className="font-semibold text-[28px] mb-1 text-center">
          Forgot Password
        </h2>

        <p className="text-center text-sm text-secondary-txt  mb-6  ">
          Enter your email to reset your account access.
        </p>

        <form className="space-y-9">
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
          <Link to="/otpverification">
            <button
              type="submit"
              className="w-full rounded-lg bg-Primary-btn py-2 text-sm font-semibold hover:bg-blue-700 transition"
            >
              Send OTP
            </button>
          </Link>
        </form>

        <p className="mt-7 text-center text-sm text-slate-400">
          Back to
          <Link to="/" className="ml-1 text-blue-500 ">
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
