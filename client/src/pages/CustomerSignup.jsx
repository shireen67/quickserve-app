import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";

const CustomerSignup = () => {

  const navigate = useNavigate();

  const [phone, setPhone] = useState("");

  const [generatedOTP, setGeneratedOTP] =
    useState("");

  const [enteredOTP, setEnteredOTP] =
    useState("");

  const [loading, setLoading] =
    useState(false);


  // SEND OTP

  const sendOTP = () => {

    if (phone.trim() === "") {

      alert("Enter Phone Number");

      return;

    }

    // GENERATE RANDOM OTP

    const otp = Math.floor(
      100000 + Math.random() * 900000
    );

    setGeneratedOTP(otp.toString());

    alert("Demo OTP: " + otp);

  };


  // VERIFY OTP

  const verifyOTP = async () => {

    if (enteredOTP.trim() === "") {

      alert("Enter OTP");

      return;

    }

    if (enteredOTP === generatedOTP) {

      try {

        setLoading(true);

        // SAVE LOGIN TOKEN

        localStorage.setItem(
          "customerToken",
          "demo-customer-token"
        );

        // SAVE CUSTOMER DATA

        localStorage.setItem(

          "customerData",

          JSON.stringify({
            phone: phone
          })

        );

        alert("Signup Successful 🎉");

        // REDIRECT TO DASHBOARD

        navigate("/customer-dashboard");

      }

      catch (error) {

        console.log(error);

        alert("Something went wrong");

      }

      finally {

        setLoading(false);

      }

    }

    else {

      alert("Invalid OTP ❌");

    }

  };


  return (

    <div className="min-h-screen bg-gradient-to-br from-[#141E30] via-[#243B55] to-[#0F2027] flex items-center justify-center p-10">


      <div className="bg-white/20 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-2xl w-full max-w-md">


        {/* USER ICON */}

        <div className="flex justify-center mb-6">

          <FaUserCircle
            size={80}
            className="text-cyan-400"
          />

        </div>


        {/* TITLE */}

        <h1 className="text-4xl font-bold text-white text-center mb-3">

          Customer Signup

        </h1>


        <p className="text-gray-300 text-center mb-8">

          Signup using phone number & OTP

        </p>


        {/* PHONE INPUT */}

        <input

          type="text"

          placeholder="Enter Phone Number"

          value={phone}

          onChange={(e) =>
            setPhone(e.target.value)
          }

          className="w-full p-4 rounded-2xl mb-5 bg-white/20 text-white placeholder:text-gray-300 outline-none"

        />


        {/* SEND OTP BUTTON */}

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

          onChange={(e) =>
            setEnteredOTP(e.target.value)
          }

          className="w-full p-4 rounded-2xl mb-5 bg-white/20 text-white placeholder:text-gray-300 outline-none"

        />


        {/* VERIFY BUTTON */}

        <button

          onClick={verifyOTP}

          disabled={loading}

          className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-4 rounded-2xl font-bold hover:scale-105 transition"

        >

          {

            loading
              ? "Please Wait..."
              : "Verify OTP"

          }

        </button>


        {/* LOGIN BUTTON */}

        <button

          onClick={() =>
            navigate("/customer-login")
          }

          className="w-full mt-5 bg-green-500 text-white py-4 rounded-2xl font-bold hover:bg-green-600 transition"

        >

          Already Have Account? Login

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