import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h1>404</h1>
      <h4>Page not found</h4>
      <Link to="/">
        <button className="btn btn-neutral">Go back to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
