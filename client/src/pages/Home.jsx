import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (

    <div className="min-h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">

        <h1 className="text-4xl font-extrabold text-cyan-400">
          QuickServe
        </h1>

        <Link to="/customer-signup">

          <button className="bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-3 rounded-2xl font-bold transition duration-300">
            Sign Up
          </button>

        </Link>

      </nav>


      {/* Hero Section */}
      <div className="grid md:grid-cols-2 items-center px-10 py-16 gap-10">

        {/* Left Side */}
        <div>

          <h1 className="text-6xl font-extrabold leading-tight">

            Book Trusted <br />

            Home Services <br />

            Instantly

          </h1>

          <p className="text-gray-300 text-xl mt-6 leading-8">

            AC Repair, Cleaning, Plumbing, Electrician and more services 
            available at your doorstep with verified vendors.

          </p>

          <Link to="/customer-signup">

            <button className="mt-8 bg-gradient-to-r from-green-400 to-blue-500 px-8 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition duration-300">

              Get Started

            </button>

          </Link>

        </div>


        {/* Right Side Image */}
        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
            alt="service"
            className="rounded-3xl shadow-2xl w-full max-w-xl h-[450px] object-cover"
          />

        </div>

      </div>


      {/* Services Section */}
      <div className="px-10 py-20">

        <h2 className="text-5xl font-bold text-center mb-16">
          Popular Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-xl hover:scale-105 transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop"
              alt="AC Repair"
              className="rounded-2xl h-56 w-full object-cover"
            />

            <h3 className="text-3xl font-bold mt-5">
              AC Repair
            </h3>

            <p className="text-gray-300 mt-3">
              Professional AC repair service at affordable price.
            </p>

          </div>


          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-xl hover:scale-105 transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
              alt="Cleaning"
              className="rounded-2xl h-56 w-full object-cover"
            />

            <h3 className="text-3xl font-bold mt-5">
              Home Cleaning
            </h3>

            <p className="text-gray-300 mt-3">
              Deep cleaning services for your home and office.
            </p>

          </div>


          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-xl hover:scale-105 transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1200&auto=format&fit=crop"
              alt="Plumbing"
              className="rounded-2xl h-56 w-full object-cover"
            />

            <h3 className="text-3xl font-bold mt-5">
              Plumbing
            </h3>

            <p className="text-gray-300 mt-3">
              Expert plumbing solutions for every household need.
            </p>

          </div>

        </div>

      </div>


      {/* Advertisement Banner */}
      <div className="px-10 pb-20">

        <div className="bg-gradient-to-r from-cyan-500 to-blue-700 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-10">

          <div>

            <h2 className="text-5xl font-extrabold">
              50% OFF First Booking
            </h2>

            <p className="text-xl mt-5 text-white/90">
              Join QuickServe today and book your first service with exciting discount offers.
            </p>

          </div>

          <Link to="/customer-signup">

            <button className="bg-white text-black px-8 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition duration-300">

              Sign Up Now

            </button>

          </Link>

        </div>

      </div>


      {/* Footer */}
      <footer className="text-center py-8 border-t border-white/10 text-gray-300">

        © 2026 QuickServe. All Rights Reserved.

      </footer>

    </div>

  );
};

export default HomePage;