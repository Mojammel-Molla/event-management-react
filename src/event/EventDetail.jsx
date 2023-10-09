import { stringify } from 'postcss';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EventDetail = () => {
  const [event, setEvent] = useState();

  const events = useLoaderData();
  const { id } = useParams();
  const { title, image, price, details, service_points } = event || {};

  useEffect(() => {
    const viewEvent = events?.find(singleEvent => singleEvent.id == id);
    setEvent(viewEvent);
  }, [id, events]);

  const handleSaveToLS = () => {
    const eventLS = localStorage.setItem('eventLocal', JSON.stringify(event));
  };

  return (
    <div>
      <h1 className="text-amber-700 text-center  text-4xl  font-bold md:mb-5 lg:my-10">
        Your event_Your way
      </h1>
      <div className="card card-side sm:h-[60vh] shadow-2xl  ">
        <figure>
          <img
            className="sm:w-[50vw] sm:h-[40vh] lg:w-[50vw] lg:h-full"
            src={image}
          />
        </figure>
        <div className="card-body sm:w-20">
          <h2 className="card-title lg:text-4xl">{title}</h2>
          <p className="lg:text-xl">{details}</p>
          {/* <ul>
            {service_points.map((item) => {
              <li>{ item}</li>;
            })}
          </ul> */}
          <div className="card-actions justify-end">
            <button
              onClick={handleSaveToLS}
              className="btn bg-amber-800 text-white"
            >
              {price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
