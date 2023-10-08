import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  console.log(reviews);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-amber-700 lg:mt-8">
        We just ❤️ our clients
      </h1>
      <p className="text-center text-xl text-amber-800 font-medium my-3">
        We make every single customers say
        <span className="text-amber-950 font-extrabold">'Wow'</span> with
        everything we do in our events
      </p>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center justify-center lg:max-w-5xl mx-auto space-y-4">
        {reviews.map(review => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
