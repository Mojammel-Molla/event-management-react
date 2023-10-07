import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventCard from './EventCard';

const EventDetail = () => {
  const events = useLoaderData();
  console.log(events);
  const { id, title, image, price, details } = events || {};
  return (
    <div>
      <h1>event detail</h1>
      {events.filter(event => event.id == id) ? (
        <EventCard event={event}></EventCard>
      ) : (
        ''
      )}
    </div>
  );
};

export default EventDetail;
