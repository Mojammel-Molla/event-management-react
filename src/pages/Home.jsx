import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../banner/Banner';
import Event from '../event/Event';

const Home = () => {
  const events = useLoaderData();
  console.log(events);
  return (
    <div>
      <h2 className="text-center md:text-2xl lg:text-3xl font-bold mt-4 mb-2">
        Some Of Our Works
      </h2>
      <Banner></Banner>
      <h1 className="text-center md:text-2xl lg:text-4xl font-bold my-4 ">
        Our All Services
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(event => (
          <Event key={event.id} event={event}></Event>
        ))}
      </div>
    </div>
  );
};

export default Home;
