import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerSignup = () => {

  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [enteredOTP, setEnteredOTP] = useState("");

  // SEND OTP
  const sendOTP = () => {

    if (phone.trim() === "") {
      alert("Enter Phone Number");
      return;
    }

    // RANDOM OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    setGeneratedOTP(otp.toString());

    alert("Demo OTP: " + otp);
  };

  // VERIFY OTP
  const verifyOTP = () => {

    if (enteredOTP.trim() === "") {
      alert("Enter OTP");
      return;
    }

    if (enteredOTP === generatedOTP) {

      alert("Signup Successful 🎉");

      // save user login state
      localStorage.setItem("customer", "true");
      localStorage.setItem("customerPhone", phone);

      // React navigation (BEST WAY)
      navigate("/customer-dashboard");

    } else {
      alert("Invalid OTP ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#141E30] via-[#243B55] to-[#0F2027] flex items-center justify-center p-10">

      <div className="bg-white/20 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-2xl w-full max-w-md">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          OTP Signup
        </h1>

        {/* PHONE */}
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-4 rounded-2xl mb-5 bg-white/20 text-white placeholder:text-gray-300 outline-none"
        />

        {/* SEND OTP */}
        <button
          onClick={sendOTP}
          className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white py-4 rounded-2xl font-bold mb-6 hover:scale-105 transition"
        >
          Send OTP
        </button>

        {/* OTP INPUT */}
        <input
          type="text"
          placeholder="Enter OTP"
          value={enteredOTP}
          onChange={(e) => setEnteredOTP(e.target.value)}
          className="w-full p-4 rounded-2xl mb-5 bg-white/20 text-white placeholder:text-gray-300 outline-none"
        />

        {/* VERIFY BUTTON */}
        <button
          onClick={verifyOTP}
          className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-4 rounded-2xl font-bold hover:scale-105 transition"
        >
          Verify OTP
        </button>

        {/* DEMO TEXT */}
        <p className="text-gray-300 text-center mt-6">
          Demo OTP system for project submission
        </p>

      </div>
    </div>
  );
};

export default CustomerSignup;