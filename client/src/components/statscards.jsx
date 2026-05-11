import React from "react";

import {
  FaClipboardList,
  FaCheckCircle,
  FaClock
} from "react-icons/fa";

const StatsCards = ({ bookings }) => {

  const total = bookings.length;

  const accepted = bookings.filter(
    item => item.status === "accepted"
  ).length;

  const pending = bookings.filter(
    item => item.status === "pending"
  ).length;

  return (

    <div className="grid md:grid-cols-3 gap-8 mb-10">

      <div className="bg-white/20 backdrop-blur-lg border border-white/20 p-7 rounded-3xl shadow-2xl hover:scale-105 transition duration-300">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-gray-200 text-lg">
              Total Orders
            </p>

            <h2 className="text-5xl font-bold text-white mt-3">
              {total}
            </h2>

          </div>

          <FaClipboardList
            size={50}
            className="text-cyan-300"
          />

        </div>

      </div>


      <div className="bg-white/20 backdrop-blur-lg border border-white/20 p-7 rounded-3xl shadow-2xl hover:scale-105 transition duration-300">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-gray-200 text-lg">
              Accepted
            </p>

            <h2 className="text-5xl font-bold text-white mt-3">
              {accepted}
            </h2>

          </div>

          <FaCheckCircle
            size={50}
            className="text-green-300"
          />

        </div>

      </div>


      <div className="bg-white/20 backdrop-blur-lg border border-white/20 p-7 rounded-3xl shadow-2xl hover:scale-105 transition duration-300">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-gray-200 text-lg">
              Pending
            </p>

            <h2 className="text-5xl font-bold text-white mt-3">
              {pending}
            </h2>

          </div>

          <FaClock
            size={50}
            className="text-yellow-300"
          />

        </div>

      </div>

    </div>

  );
};

export default StatsCards;