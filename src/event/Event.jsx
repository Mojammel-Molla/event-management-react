import React from 'react';

const Event = ({ event }) => {
  console.log(event);
  const { id, title, image, price, description } = event;
  return (
    <div>
      <div className="card md:w-96 md:h-96 lg:w-96 lg:h-96 bg-base-100 pt-5 shadow-xl">
        <figure>
          <img className=" md:h-60 md:w-80 lg:h-96 lg:w-96" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-base">{description}</p>
          <div className="card-actions flex justify-between">
            <p className="text-md font-semibold">Price:{price}</p>
            <button className="text-lg font-bold">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
