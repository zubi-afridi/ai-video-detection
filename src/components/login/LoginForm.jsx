import { useState } from "react";
import EyeIcon from "../../assets/icons/eye-close.svg?react";
import EyeIconOpen from "../../assets/icons/eye-open.svg?react";
import AiMonitor from "../../assets/icons/ai-monitor-logo.svg?react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div className="mx-auto flex justify-center animate-fade-in-up opacity-0 max-w-37.5 md:max-w-none">
        <AiMonitor className="w-full h-auto" />
      </div>

      <div className="w-[92%] mx-auto max-w-115.5 rounded-xl py-6 px-4 md:py-7.5 md:px-5 bg-cards-bg backdrop-blur-xl border border-Cards-border shadow-xl text-primary-txt animate-fade-in-up delay-100 opacity-0">
        <h2 className="font-semibold text-2xl md:text-[28px] mb-3 -mt-3 text-center">
          Welcome Back
        </h2>

        <p className="text-center text-xs md:text-sm text-secondary-txt mb-6">
          Sign in to monitor activity, track counts, and view{" "}
          <br className="hidden md:block" /> reports.
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

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-primary-txt mb-2 cursor-pointer "
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-Cards-border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white placeholder:text-muted-txt transition-all duration-200"
              />

              <div
                onClick={togglePasswordVisibility}
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

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm">
            <label
              htmlFor="remember"
              className="flex items-center gap-2 text-primary-txt cursor-pointer group"
            >
              <input
                id="remember"
                type="checkbox"
                className="appearance-none h-3 w-3 border border-Primary-btn rounded-xs bg-transparent checked:bg-blue-600 checked:border-blue-600 checked:appearance-auto transition-colors cursor-pointer"
              />
              <span className="group-hover:text-white transition-colors">
                Remember me
              </span>
            </label>

            <Link
              to="/forgotpassword"
              className="text-Primary-btn hover:brightness-125 transition-all text-xs sm:text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          <Link to="/livemonitoring" className="block">
            <button
              type="submit"
              className="w-full rounded-lg bg-Primary-btn py-2.5 hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 text-[14px] leading-none tracking-normal text-center shadow-md hover:shadow-lg cursor-pointer"
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
