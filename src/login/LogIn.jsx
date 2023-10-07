import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const handleLogIn = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
  };
  return (
    <div className="md:w-3/4 lg:w-2/4 mx-auto border rounded-md lg:mt-12 ">
      <form onSubmit={handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
          <p>
            Do not have account? Please
            <Link to="/register" className="text-blue-500 font-bold">
              Register
            </Link>
          </p>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-amber-800">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
