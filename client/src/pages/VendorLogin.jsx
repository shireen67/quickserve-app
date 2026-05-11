import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function VendorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Fixed Vendor Credentials
    const vendorEmail = "vendor@gmail.com";
    const vendorPassword = "12345";

    if (email === vendorEmail && password === vendorPassword) {
      alert("✅ Login Successful");

      // Redirect to Vendor Dashboard
      navigate("/vendor-dashboard");
    } else {
      alert("❌ Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-[400px]">
        
        <h1 className="text-white text-4xl font-bold text-center mb-8">
          Vendor Login
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter Vendor Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Login Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white p-4 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-6 text-gray-300 text-center text-sm">
          <p>Email: vendor@gmail.com</p>
          <p>Password: 12345</p>
        </div>
      </div>
    </div>
  );
}

export default VendorLogin;