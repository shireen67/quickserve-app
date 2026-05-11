import React, { useState } from "react";

import axios from "axios";

import {
  useNavigate
} from "react-router-dom";

import {
  FaTools,
  FaUserCircle
} from "react-icons/fa";


const CustomerDashboard = () => {

  const navigate = useNavigate();

  const [customerName, setCustomerName] =
    useState("");

  const [serviceName, setServiceName] =
    useState("");


  // SERVICES

  const services = [

    {
      title: "AC Repair",

      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
    },

    {
      title: "Plumbing",

      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop"
    },

    {
      title: "Cleaning",

      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop"
    },

    {
      title: "Electric Repair",

      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
    }

  ];


  // BOOK SERVICE

  const bookService = async (e) => {

    e.preventDefault();

    try {

      await axios.post(

        "https://vendor-booking-app-nlln.onrender.com/book-service",

        {
          customer_name: customerName,

          service_name: serviceName
        }

      );

      alert("Service Booked Successfully");

      setCustomerName("");

      setServiceName("");

    }

    catch (error) {

      console.log(error);

    }

  };


  return (

    <div className="min-h-screen bg-gradient-to-br from-[#141E30] via-[#243B55] to-[#0F2027]">


      {/* NAVBAR */}

      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-xl px-10 py-5 flex justify-between items-center">


        {/* LOGO */}

        <div className="flex items-center gap-4">

          <div className="bg-cyan-500 p-3 rounded-2xl">

            <FaTools
              size={28}
              className="text-white"
            />

          </div>


          <div>

            <h1 className="text-3xl font-bold text-white">

              ServiceHub

            </h1>

            <p className="text-gray-300 text-sm">

              Premium Home Services

            </p>

          </div>

        </div>



        {/* NAV BUTTONS */}

        <div className="flex items-center gap-4">


          {/* HOME */}

          <button

            onClick={() => navigate("/")}

            className="bg-white/20 text-white px-5 py-3 rounded-2xl hover:bg-white/30 transition"

          >

            Home

          </button>



          {/* CUSTOMER LOGIN */}

          <button

            onClick={() => navigate("/customer-login")}

            className="bg-cyan-500 text-white px-5 py-3 rounded-2xl hover:bg-cyan-600 transition"

          >

            Customer Login

          </button>



          {/* CUSTOMER SIGNUP */}

          <button

            onClick={() => navigate("/customer-signup")}

            className="bg-yellow-500 text-white px-5 py-3 rounded-2xl hover:bg-yellow-600 transition"

          >

            Signup

          </button>



          {/* DASHBOARD */}

          <button

            onClick={() => navigate("/customer-dashboard")}

            className="bg-green-500 text-white px-5 py-3 rounded-2xl hover:bg-green-600 transition"

          >

            Dashboard

          </button>



          {/* USER ICON */}

          <FaUserCircle
            size={40}
            className="text-white"
          />

        </div>

      </div>



      {/* HERO SECTION */}

      <div className="text-center py-16">

        <h1 className="text-6xl font-bold text-white mb-6">

          Book Trusted Home Services

        </h1>

        <p className="text-gray-300 text-2xl">

          AC Repair • Plumbing • Cleaning • Electric

        </p>

      </div>



      {/* SERVICE CARDS */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 mb-20">


        {
          services.map((item, index) => (

            <div

              key={index}

              onClick={() =>
                setServiceName(item.title)
              }

              className="bg-white/20 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition duration-300 cursor-pointer"

            >

              <img

                src={item.image}

                alt="service"

                className="w-full h-[240px] object-cover"

              />


              <div className="p-6">

                <h2 className="text-2xl font-bold text-white mb-4">

                  {item.title}

                </h2>


                <button

                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white py-3 rounded-2xl font-bold"

                >

                  Select Service

                </button>

              </div>

            </div>

          ))
        }

      </div>



      {/* BOOKING FORM */}

      <div className="max-w-2xl mx-auto bg-white/20 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-2xl mb-20">


        <h2 className="text-4xl font-bold text-white text-center mb-8">

          Book Your Service

        </h2>


        <form onSubmit={bookService}>


          {/* CUSTOMER NAME */}

          <input

            type="text"

            placeholder="Enter Your Name"

            value={customerName}

            onChange={(e)=>
              setCustomerName(e.target.value)
            }

            className="w-full p-5 rounded-2xl mb-6 outline-none bg-white/20 text-white placeholder:text-gray-300"

            required

          />


          {/* SERVICE */}

          <input

            type="text"

            placeholder="Selected Service"

            value={serviceName}

            onChange={(e)=>
              setServiceName(e.target.value)
            }

            className="w-full p-5 rounded-2xl mb-6 outline-none bg-white/20 text-white placeholder:text-gray-300"

            required

          />


          {/* BOOK BUTTON */}

          <button

            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-5 rounded-2xl text-xl font-bold hover:scale-105 transition"

          >

            Book Service

          </button>

        </form>

      </div>

    </div>

  );
};

export default CustomerDashboard;