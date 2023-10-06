import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../banner/Banner';

const Home = () => {
  const events = useLoaderData();
  console.log(events);
  return (
    <div>
      <h2 className="text-center md:text-2xl lg:text-3xl font-bold mt-4 mb-2">
        Some Of Our Works
      </h2>
      <Banner></Banner>
    </div>
  );
};

export default Home;
