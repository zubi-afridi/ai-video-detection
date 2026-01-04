import React from "react";
import AiMonitor from "../../assets/icons/ai-monitor-logo.svg?react";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
  return (
    <>
      <div className="mx-auto flex justify-center animate-fade-in-up opacity-0 max-w-37.5 md:max-w-none">
        <AiMonitor className="w-full h-auto" />
      </div>
      <div className="w-[92%] mx-auto max-w-115.5 rounded-xl py-6 px-4 md:py-7.5 md:px-5 bg-cards-bg backdrop-blur-xl border border-Cards-border shadow-xl text-primary-txt animate-fade-in-up delay-100 opacity-0">
        <h2 className="font-semibold text-2xl md:text-[28px] mb-3 -mt-2 text-center">
          Forgot Password
        </h2>

        <p className="text-center text-xs md:text-sm text-secondary-txt mb-6">
          Enter your email to reset your account access.
        </p>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-primary-txt mb-2 cursor-pointer"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-Cards-border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white placeholder:text-muted-txt transition-all duration-200"
            />
          </div>
          <Link to="/otpverification" className="block pt-2">
            <button
              type="submit"
              className="w-full rounded-lg bg-Primary-btn py-2.5 hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 text-[14px] leading-none tracking-normal text-center shadow-md hover:shadow-lg cursor-pointer"
            >
              Send OTP
            </button>
          </Link>
        </form>

        {/* Footer Link */}
        <p className="mt-7 text-center text-xs md:text-sm text-slate-400">
          Back to
          <Link
            to="/"
            className="ml-1 text-blue-500 hover:brightness-125 transition-all"
          >
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
