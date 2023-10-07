import React from 'react';
import AboutBanner from '../assets/about.banner.webp';
const About = () => {
  return (
    <div>
      <div>
        <h1 className="bg-amber-800 lg:text-3xl rounded-md font-semibold text-white text-center w-1/5 mx-auto p-2">
          About Us
        </h1>
      </div>
      <div className="max-w-6xl mx-auto mt-10 items-center justify-center text-center">
        <h1 className=" text-amber-500 mb-5 text-5xl font-bold underline">
          Our Goal
        </h1>
        <p className="mb-5 text-lg text-amber-400 font-medium">
          At Event Paradise, we transform your dreams into remarkable
          experiences. With a passion for creating unforgettable moments, we are
          your partners in crafting and executing exceptional events. From
          elegant weddings and vibrant birthday celebrations to professional
          corporate gatherings, our expert team is dedicated to bringing your
          vision to life. With meticulous planning, creative flair, and
          attention to every detail, Event Paradise ensures that each event is a
          seamless and awe-inspiring affair. Our commitment to excellence and
          personalized service sets us apart. We understand that every event is
          unique, and we tailor our services to match your preferences and
          exceed your expectations. Let us handle the logistics, design, and
          coordination while you enjoy the celebration. Whether it_s an intimate
          affair or a grand gala, trust Event Paradise to make your special
          moments truly extraordinary. We believe that every occasion deserves
          to be cherished, and we_re here to make it happen. Elevate your events
          with Event Paradise _ Where Every Moment Matters.
        </p>
      </div>
      <div
        className="hero h-[70vh] lg:mt-14"
        style={{
          backgroundImage: `url(${AboutBanner})`,
          borderRadius: '10px',
        }}
      >
        <div className="hero-overlay bg-opacity-30 rounded-lg"></div>
        <div className="hero-content text-center text-neutral-content"></div>
      </div>
    </div>
  );
};

export default About;
