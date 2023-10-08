import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../banner/Banner';
import Event from '../event/Event';
import Contacts from './Contacts';

const Home = () => {
  const events = useLoaderData();
  console.log(events);
  return (
    <div>
      <h2 className="text-center text-amber-700 md:text-2xl lg:text-3xl font-bold mt-4 mb-2">
        Our Latest Works
      </h2>
      <Banner></Banner>
      <h1 className="text-center text-amber-700 md:text-2xl lg:text-4xl font-bold my-4 ">
        Our All Services
      </h1>
      <p className="text-center text-amber-950 font-medium text-xl">
        We tried our best to make your event Delightful
      </p>
      <div className=" max-w-7xl mx-auto grid sm:grid-cols-1 sm:gap-5 md:grid-cols-2 lg:grid-cols-3  md:gap-2 lg:gap-5">
        {events?.map(event => (
          <Event key={event.id} event={event}></Event>
        ))}
      </div>
      <Contacts></Contacts>
    </div>
  );
};

export default Home;
