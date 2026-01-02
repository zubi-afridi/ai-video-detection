import React, { useState } from "react";
import logo from "../../assets/images/AI-Monitor.png";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";

const VerifyOtpForm = () => {
  const [otp, setOtp] = useState("");

  return (
    <>
      <img src={logo} alt="AI Monitor Logo" className="text-center" />

      <div className="w-full max-w-115.5 rounded-xl py-7.5 px-5 bg-cards-bg backdrop-blur-xl border border-Cards-border shadow-xl text-primary-txt">
        <h2 className="font-semibold text-[28px] mb-1 text-center">
          Verify OTP
        </h2>

        <p className="text-center text-sm text-secondary-txt  mb-6  ">
          Enter OTP sent to your email
        </p>

        <form className="space-y-9">
          <div className="flex justify-center">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span className="mx-2"></span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className=" text-xl rounded-xl border border-Cards-border bg-transparent text-center focus:outline-none focus:ring-1 focus:ring-white placeholder:text-muted-txt"
                  style={{ width: "56px", height: "52px" }}
                />
              )}
            />
          </div>
          <Link to="/resetpassword">
            <button
              type="submit"
              className="w-full rounded-lg bg-Primary-btn py-2 text-sm font-semibold hover:bg-blue-700 transition cursor-pointer"
            >
              Verify OTP
            </button>
          </Link>
        </form>
        <div className="text-sm text-slate-400 text-center mt-7">
          00:52{" "}
          <span className="ml-2 text-blue-500 cursor-pointer">Resend</span>
        </div>
      </div>
    </>
  );
};

export default VerifyOtpForm;
