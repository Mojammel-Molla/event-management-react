import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EventDetail = () => {
  const [event, setEvent] = useState();
  console.log(event);
  const events = useLoaderData();
  const { id } = useParams();
  const { title, image, price, details, service_points } = event || {};
  console.log(service_points);
  useEffect(() => {
    const viewEvent = events?.find(singleEvent => singleEvent.id == id);
    setEvent(viewEvent);
  }, [id, events]);
  return (
    <div>
      <h1 className="text-amber-500 text-center text-4xl underline font-bold md:mb-5 lg:my-10">
        Event Details
      </h1>
      <div className="card card-side sm:h-[60vh] shadow-2xl  ">
        <figure>
          <img
            className="sm:w-[50vw] sm:h-[40vh]lg:w-[50vw] lg:h-full"
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
            <button className="btn bg-amber-800 text-white">{price}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
