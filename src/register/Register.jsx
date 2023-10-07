import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
  const [show, setShow] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    const check = form.get('check');
    console.log(name, photo, email, password, check);
    createUser(email, password)
      .then(res => {
        console.log(res.user);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className=" md:w-3/4 lg:w-2/4 mx-auto border rounded-md lg:mt-12 ">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            name="photo"
            type="text"
            placeholder="photo"
            className="input input-bordered"
            required
          />
        </div>
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
            type={show ? 'text' : 'password'}
            placeholder="password"
            className="input input-bordered relative"
            required
          />
          <div className="bg-slate-500">
            <p
              onClick={() => setShow(!show)}
              className="absolute sm:right-[15%] sm:bottom-[37%]  md:right-[31%] md:bottom-[37%] lg:right-[36%] lg:top-[53%]"
            >
              {show ? 'Hide' : 'Show'}
            </p>
          </div>
          <label className="my-4">
            <input type="checkbox" name="check" />
            <span className="ml-2 ">
              I agree <a className="font-bold">Terms and Conditions</a>
            </span>
          </label>
          <p>
            Already have account? Please
            <Link className="text-blue-500 font-bold" to="/login">
              Log in
            </Link>
          </p>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-amber-800 ">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
