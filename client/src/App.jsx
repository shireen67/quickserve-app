import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";

import CustomerSignup from "./pages/CustomerSignup";

import CustomerLogin from "./pages/CustomerLogin";

import CustomerDashboard from "./pages/CustomerDashboard";

import VendorLogin from "./pages/VendorLogin";

import VendorDashboard from "./pages/VendorDashboard";


// PROTECTED ROUTE

const ProtectedCustomerRoute = ({ children }) => {

  const token = localStorage.getItem(
    "customerToken"
  );

  if (!token) {

    return <Navigate to="/customer-login" />;

  }

  return children;

};


function App() {

  return (

    <BrowserRouter>

      <div className="min-h-screen bg-gradient-to-r from-blue-900 to-black text-white">

        {/* NAVBAR */}

        <nav className="flex flex-wrap gap-4 justify-center p-5 bg-black shadow-lg">


          {/* HOME */}

          <Link
            to="/"
            className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-bold transition duration-300"
          >

            Home

          </Link>


          {/* CUSTOMER LOGIN */}

          <Link
            to="/customer-login"
            className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-bold transition duration-300"
          >

            Customer Login

          </Link>


          {/* CUSTOMER SIGNUP */}

          <Link
            to="/customer-signup"
            className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg font-bold transition duration-300"
          >

            Customer Signup

          </Link>


          {/* CUSTOMER DASHBOARD */}

          <Link
            to="/customer-dashboard"
            className="bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-lg font-bold transition duration-300"
          >

            Customer Dashboard

          </Link>


          {/* VENDOR LOGIN */}

          <Link
            to="/vendor-login"
            className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-bold transition duration-300"
          >

            Vendor Login

          </Link>


          {/* VENDOR DASHBOARD */}

          <Link
            to="/vendor-dashboard"
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-bold transition duration-300"
          >

            Vendor Dashboard

          </Link>

        </nav>


        {/* ROUTES */}

        <Routes>


          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* CUSTOMER LOGIN */}

          <Route
            path="/customer-login"
            element={<CustomerLogin />}
          />


          {/* CUSTOMER SIGNUP */}

          <Route
            path="/customer-signup"
            element={<CustomerSignup />}
          />


          {/* CUSTOMER DASHBOARD */}

          <Route

            path="/customer-dashboard"

            element={

              <ProtectedCustomerRoute>

                <CustomerDashboard />

              </ProtectedCustomerRoute>

            }

          />


          {/* VENDOR LOGIN */}

          <Route
            path="/vendor-login"
            element={<VendorLogin />}
          />


          {/* VENDOR DASHBOARD */}

          <Route
            path="/vendor-dashboard"
            element={<VendorDashboard />}
          />


          {/* 404 PAGE */}

          <Route
            path="*"
            element={
              <div className="flex justify-center items-center h-[80vh] text-4xl font-bold">
                404 Page Not Found
              </div>
            }
          />

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;