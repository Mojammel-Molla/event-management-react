import React from 'react';
import { Link } from 'react-router-dom';

const Event = ({ event }) => {
  const { id, title, image, price, description } = event || {};
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className=" card md:w-96 md:h-96 lg:w-96 lg:h-96 bg-base-100 pt-5 shadow-xl"
      >
        <figure>
          <img className=" md:h-60 md:w-80 lg:h-96 lg:w-96" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-base">{description}</p>
          <div className="card-actions flex justify-between">
            <p className="text-md font-semibold">Price:{price}</p>
            <Link to={`/event/${id}`}>
              <button className="text-lg font-bold text-amber-900">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
