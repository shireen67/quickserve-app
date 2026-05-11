import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";

const CustomerLogin = () => {

  const navigate = useNavigate();

  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    if (!phone) {

      alert("Please enter phone number");

      return;

    }

    try {

      setLoading(true);

      const res = await axios.post(

        "https://vendor-booking-app-nlln.onrender.com/customer-login",

        {
          phone
        }

      );

      // SAVE TOKEN

      localStorage.setItem(

        "customerToken",

        res.data.token
      );

      // SAVE CUSTOMER DATA

      localStorage.setItem(

        "customerData",

        JSON.stringify(res.data.customer)
      );

      alert("Login Successful");

      // REDIRECT TO DASHBOARD

      navigate("/customer-dashboard");

    }

    catch (error) {

      console.log(error);

      alert(

        error?.response?.data?.message ||

        "Login Failed"
      );

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#141E30] via-[#243B55] to-[#0F2027] px-5">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl">

        {/* ICON */}

        <div className="flex justify-center mb-6">

          <FaUserCircle

            size={80}

            className="text-cyan-400"

          />

        </div>

        {/* TITLE */}

        <h1 className="text-4xl font-bold text-white text-center mb-3">

          Customer Login

        </h1>

        <p className="text-gray-300 text-center mb-8">

          Login using your phone number

        </p>

        {/* FORM */}

        <form onSubmit={handleLogin}>

          <input

            type="text"

            placeholder="Enter Phone Number"

            value={phone}

            onChange={(e) =>
              setPhone(e.target.value)
            }

            className="w-full p-5 rounded-2xl mb-6 bg-white/20 text-white placeholder:text-gray-300 outline-none"

            required

          />

          <button

            type="submit"

            disabled={loading}

            className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white py-4 rounded-2xl text-xl font-bold hover:scale-105 transition"

          >

            {
              loading
                ? "Please Wait..."
                : "Login"
            }

          </button>

        </form>

        {/* SIGNUP BUTTON */}

        <button

          onClick={() =>
            navigate("/customer-signup")
          }

          className="w-full mt-5 bg-yellow-500 text-white py-4 rounded-2xl text-lg font-bold hover:bg-yellow-600 transition"

        >

          Create New Account

        </button>

      </div>

    </div>

  );
};

export default CustomerLogin;