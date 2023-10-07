import React from 'react';

const EventCard = ({ event }) => {
  console.log(event);
  const { id, title, image, price, details } = event;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{price}</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
