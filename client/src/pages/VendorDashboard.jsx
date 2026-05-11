import React, { useState } from "react";

function VendorDashboard() {

  // Pending Bookings
  const [pendingBookings, setPendingBookings] = useState([
    {
      id: 1,
      service: "AC Repair Service",
    },
  ]);

  // Accepted Bookings
  const [acceptedBookings, setAcceptedBookings] = useState([
    {
      id: 2,
      service: "Cleaning Service",
    },
  ]);

  // Delivered Bookings
  const [deliveredBookings, setDeliveredBookings] = useState([
    {
      id: 3,
      service: "Plumbing Service",
    },
  ]);

  // Accept Booking Function
  const handleAccept = (booking) => {

    // Remove from Pending
    const updatedPending = pendingBookings.filter(
      (item) => item.id !== booking.id
    );

    setPendingBookings(updatedPending);

    // Add to Accepted
    setAcceptedBookings([...acceptedBookings, booking]);

    alert("✅ Booking Accepted");
  };

  // Deliver Booking Function
  const handleDelivered = (booking) => {

    // Remove from Accepted
    const updatedAccepted = acceptedBookings.filter(
      (item) => item.id !== booking.id
    );

    setAcceptedBookings(updatedAccepted);

    // Add to Delivered
    setDeliveredBookings([...deliveredBookings, booking]);

    alert("✅ Service Delivered");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 text-white p-10">

      <h1 className="text-5xl font-bold text-center text-cyan-400">
        Vendor Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-10 mt-16">

        {/* Pending Booking Section */}
        <div className="bg-yellow-400 text-black p-8 rounded-2xl shadow-xl">

          <h2 className="text-3xl font-bold mb-6">
            Pending Booking
          </h2>

          {pendingBookings.length === 0 ? (
            <p>No Pending Booking</p>
          ) : (
            pendingBookings.map((booking) => (
              <div key={booking.id} className="mb-5">

                <p className="text-lg">
                  {booking.service}
                </p>

                <button
                  onClick={() => handleAccept(booking)}
                  className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg mt-4"
                >
                  Accept
                </button>

              </div>
            ))
          )}

        </div>


        {/* Accepted Booking Section */}
        <div className="bg-green-400 text-black p-8 rounded-2xl shadow-xl">

          <h2 className="text-3xl font-bold mb-6">
            Accepted Booking
          </h2>

          {acceptedBookings.length === 0 ? (
            <p>No Accepted Booking</p>
          ) : (
            acceptedBookings.map((booking) => (
              <div key={booking.id} className="mb-5">

                <p className="text-lg">
                  {booking.service}
                </p>

                <button
                  onClick={() => handleDelivered(booking)}
                  className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg mt-4"
                >
                  Mark Delivered
                </button>

              </div>
            ))
          )}

        </div>


        {/* Delivered Booking Section */}
        <div className="bg-cyan-400 text-black p-8 rounded-2xl shadow-xl">

          <h2 className="text-3xl font-bold mb-6">
            Delivered Booking
          </h2>

          {deliveredBookings.length === 0 ? (
            <p>No Delivered Booking</p>
          ) : (
            deliveredBookings.map((booking) => (
              <div key={booking.id} className="mb-5">

                <p className="text-lg">
                  {booking.service}
                </p>

                <p className="mt-3 font-semibold text-green-900">
                  ✅ Delivered Successfully
                </p>

              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default VendorDashboard;