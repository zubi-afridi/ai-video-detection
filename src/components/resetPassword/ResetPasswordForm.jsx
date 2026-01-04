import React, { useState } from "react";
import EyeIcon from "../../assets/icons/eye-close.svg?react";
import EyeIconOpen from "../../assets/icons/eye-open.svg?react";
import AiMonitor from "../../assets/icons/ai-monitor-logo.svg?react";
import { Link } from "react-router-dom";

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <>
      <div className="mx-auto flex justify-center animate-fade-in-up opacity-0 max-w-37.5 md:max-w-none">
        <AiMonitor className="w-full h-auto" />
      </div>

      <div className="w-[92%] mx-auto max-w-115.5 rounded-xl py-6 px-4 md:py-7.5 md:px-5 bg-cards-bg backdrop-blur-xl border border-Cards-border shadow-xl text-primary-txt animate-fade-in-up delay-100 opacity-0">
        <h2 className="font-semibold text-2xl md:text-[28px] mb-3 -mt-3 text-center">
          Set New Password
        </h2>

        <p className="text-center text-xs md:text-sm text-secondary-txt mb-6">
          Choose a strong password to secure your account.
        </p>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="new-password"
              className="block text-sm text-primary-txt mb-2 cursor-pointer"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="new-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-Cards-border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white placeholder:text-muted-txt transition-all duration-200"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer active:scale-90 transition-transform duration-150"
              >
                {showPassword ? (
                  <EyeIconOpen className="w-4 h-4 text-gray-600" />
                ) : (
                  <EyeIcon className="w-4 h-4 text-gray-600" />
                )}
              </div>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm text-primary-txt mb-2 cursor-pointer"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Reenter Your Password"
                className="w-full rounded-lg border border-Cards-border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white placeholder:text-muted-txt transition-all duration-200"
              />
              <div
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer active:scale-90 transition-transform duration-150"
              >
                {showConfirmPassword ? (
                  <EyeIconOpen className="w-4 h-4 text-gray-600" />
                ) : (
                  <EyeIcon className="w-4 h-4 text-gray-600" />
                )}
              </div>
            </div>
          </div>

          <Link to="/" className="block pt-4">
            <button
              type="submit"
              className="w-full rounded-lg bg-Primary-btn py-2.5 hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 text-[14px] leading-none tracking-normal text-center shadow-md hover:shadow-lg cursor-pointer font-semibold"
            >
              Reset Password
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default ResetPasswordForm;
