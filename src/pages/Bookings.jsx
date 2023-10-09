import React from 'react';
import ChristmasImg from '../assets/christmas.jpg';
const Bookings = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage: `url(${ChristmasImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 lg:text-7xl font-black text-amber-600">
            20% OFF!!!
          </h1>
          <h2 className="text-4xl font-bold text-amber-400">For Christmas</h2>
          <p className="mb-5 font-medium">
            Let us be your partners in creating cherished moments that will last
            a lifetime. From the first twinkling lights to the final farewell,
            'Event Paradise' is here to make your Christmas celebration truly
            spectacular.
          </p>
          <button className="btn bg-amber-800 text-white">Hurry Up</button>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
