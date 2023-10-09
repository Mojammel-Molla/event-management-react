import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../banner/Banner';
import Event from '../event/Event';
import Contacts from './Contacts';
import Marquee from 'react-fast-marquee';
import Image1 from '../assets/sponsored1.jpeg';
import Image2 from '../assets/sponsored2.png';
import Image3 from '../assets/sponsored3.jpeg';
import Image4 from '../assets/sponsored4.jpeg';
import Image5 from '../assets/sponsored5.png';
import Image6 from '../assets/sponsored6.jpeg';
import Image7 from '../assets/sponsored7.png';
import Image8 from '../assets/sponsored8.png';
const Home = () => {
  const events = useLoaderData();
  console.log(events);
  return (
    <div>
      <h2 className="text-center text-amber-700 md:text-2xl lg:text-3xl font-bold mt-4 mb-2">
        Some Latest Works
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
      <h1 className=" text-amber-700 text-center font-bold text-4xl my-5">
        We Arrange Events For...
      </h1>
      <Marquee className="my-16" pauseOnHover={true}>
        <img className="" src={Image3} alt="" />
        <img className="" src={Image1} alt="" />
        <img className="" src={Image2} alt="" />
        <img className="" src={Image4} alt="" />
        <img className="" src={Image5} alt="" />
        <img className="" src={Image6} alt="" />
        <img className="" src={Image7} alt="" />
        <img className="" src={Image8} alt="" />
      </Marquee>
      <Contacts></Contacts>
    </div>
  );
};

export default Home;
