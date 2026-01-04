import React, { useState } from "react";
import AiMonitor from "../../assets/icons/ai-monitor-logo.svg?react"; // Logo standard use kiya
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";

const VerifyOtpForm = () => {
  const [otp, setOtp] = useState("");

  return (
    <>
      {/* Logo Container - Identical to Login/Forgot */}
      <div className="mx-auto flex justify-center animate-fade-in-up opacity-0 max-w-37.5 md:max-w-none">
        <AiMonitor className="w-full h-auto" />
      </div>

      {/* Main Card - Matching responsiveness and animation */}
      <div className="w-[92%] mx-auto max-w-115.5 rounded-xl py-6 px-4 md:py-7.5 md:px-5 bg-cards-bg backdrop-blur-xl border border-Cards-border shadow-xl text-primary-txt animate-fade-in-up delay-100 opacity-0">
        <h2 className="font-semibold text-2xl md:text-[28px] mb-3 -mt-2 text-center">
          Verify OTP
        </h2>

        <p className="text-center text-xs md:text-sm text-secondary-txt mb-6">
          Enter OTP sent to your email
        </p>

        <form className="space-y-6">
          {" "}
          {/* Balanced spacing for OTP center align */}
          <div className="flex justify-center">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span className="mx-2 md:mx-3"></span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="text-xl rounded-xl border border-Cards-border bg-transparent text-center focus:outline-none focus:ring-1 focus:ring-white transition-all duration-200"
                  style={{ width: "56px", height: "52px" }}
                />
              )}
            />
          </div>
          <Link to="/resetpassword" style={{ display: "block" }}>
            <button
              type="submit"
              className="w-full rounded-lg bg-Primary-btn py-2.5 hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 text-[14px] leading-none tracking-normal text-center shadow-md hover:shadow-lg cursor-pointer font-semibold"
            >
              Verify OTP
            </button>
          </Link>
        </form>

        {/* Resend Section */}
        <div className="text-xs md:text-sm text-slate-400 text-center mt-7">
          00:52{" "}
          <span className="ml-2 text-blue-500 cursor-pointer hover:brightness-125 transition-all">
            Resend
          </span>
        </div>
      </div>
    </>
  );
};

export default VerifyOtpForm;
