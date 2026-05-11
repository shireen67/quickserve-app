import React from "react";

const BookingCard = ({
  item,
  acceptBooking,
  completeBooking
}) => {

  return (

    <div className="bg-white/20 backdrop-blur-lg border border-white/20 rounded-3xl p-7 shadow-2xl hover:scale-105 transition duration-300">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-3xl font-bold text-white">

            {item.customer_name}

          </h2>

          <p className="text-gray-200 mt-1">

            Premium Customer

          </p>

        </div>

        <span
          className={`
            px-5 py-2 rounded-full text-sm font-bold

            ${item.status === "pending"
              ? "bg-yellow-400 text-black"
              : ""
            }

            ${item.status === "accepted"
              ? "bg-green-400 text-black"
              : ""
            }

            ${item.status === "completed"
              ? "bg-cyan-400 text-black"
              : ""
            }
          `}
        >

          {item.status}

        </span>

      </div>

      <div className="mb-8">

        <p className="text-gray-200 text-lg">

          Service Type

        </p>

        <h3 className="text-2xl font-semibold text-white mt-2">

          {item.service_name}

        </h3>

      </div>

      <div className="flex gap-4">

        {
          item.status === "pending"
          &&
          <button
            onClick={() => acceptBooking(item.id)}
            className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Accept Booking
          </button>
        }

        {
          item.status === "accepted"
          &&
          <button
            onClick={() => completeBooking(item.id)}
            className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Mark Delivered
          </button>
        }

        {
          item.status === "completed"
          &&
          <button
            disabled
            className="bg-cyan-500 text-white px-6 py-3 rounded-2xl font-semibold"
          >
            Delivered
          </button>
        }

      </div>

    </div>

  );
};

export default BookingCard;