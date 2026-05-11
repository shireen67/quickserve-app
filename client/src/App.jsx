import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import CustomerSignup from "./pages/CustomerSignup";
import CustomerDashboard from "./pages/CustomerDashboard";
import VendorLogin from "./pages/VendorLogin";
import VendorDashboard from "./pages/VendorDashboard";

function App() {
  return (

    <BrowserRouter>

      <div className="min-h-screen bg-gradient-to-r from-blue-900 to-black text-white">

        {/* Navbar */}

        <nav className="flex flex-wrap gap-4 justify-center p-5 bg-black shadow-lg">

          <Link
            to="/"
            className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-bold transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/customer-signup"
            className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg font-bold transition duration-300"
          >
            Customer Signup
          </Link>

          <Link
            to="/customer-dashboard"
            className="bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-lg font-bold transition duration-300"
          >
            Customer Dashboard
          </Link>

          <Link
            to="/vendor-login"
            className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-bold transition duration-300"
          >
            Vendor Login
          </Link>

          <Link
            to="/vendor-dashboard"
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-bold transition duration-300"
          >
            Vendor Dashboard
          </Link>

        </nav>


        {/* Routes */}

        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Customer Signup */}
          <Route
            path="/customer-signup"
            element={<CustomerSignup />}
          />

          {/* Customer Dashboard */}
          <Route
            path="/customer-dashboard"
            element={<CustomerDashboard />}
          />

          {/* Vendor Login */}
          <Route
            path="/vendor-login"
            element={<VendorLogin />}
          />

          {/* Vendor Dashboard */}
          <Route
            path="/vendor-dashboard"
            element={<VendorDashboard />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;