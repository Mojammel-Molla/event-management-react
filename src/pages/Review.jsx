import React from 'react';
import ReactStars from 'react-rating-stars-component';
const Review = ({ review }) => {
  const { name, rating, date, comment, profile_picture } = review || {};
  const firstExample = {
    size: 30,
    value: `${rating}`,
    edit: false,
  };

  return (
    <div>
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-md p-2">
        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
          <img
            src={profile_picture}
            alt="tania andrew"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {name}
                </h5>
                <p>{date}</p>
              </div>

              <div>
                <ReactStars {...firstExample} />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 p-0">
          <p className="block font-medium text-base  leading-relaxed text-inherit antialiased">
            {comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
