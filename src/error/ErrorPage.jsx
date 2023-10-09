import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="lg:mt-36  w-[20vw] mx-auto">
      <h1 className="text-9xl font-extrabold my-20">Oops!</h1>
      <h4 className="text-4xl font-semibold">404 Page not found</h4>
      <p className="my-2 font-medium">
        The page you were looking for might be removed of temporarily
        unavailable
      </p>
      <Link to="/">
        <button className="btn btn-neutral">Go back to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
