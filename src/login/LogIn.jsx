import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
const LogIn = () => {
  const { user, signIn, handleGoogleLogIn, handleGithubLogIn } =
    useContext(AuthContext);
  const handleLogIn = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    signIn(email, password)
      .then(res => {
        console.log(res.user);
      })
      .catch(err => {
        console.log(err);
      });
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
          <button className="btn text-white bg-amber-800">Log in</button>
        </div>
      </form>
      <div>
        <h1 className="text-center font-medium underline py-2">Log in with</h1>
        <div className="flex justify-evenly m-2 ">
          <button onClick={handleGoogleLogIn} className="btn ">
            <FcGoogle></FcGoogle>
            Google
          </button>
          <button className="btn bg-blue-500 text-white  ">
            <ImFacebook2></ImFacebook2> Facebook
          </button>
          <button onClick={handleGithubLogIn} className="btn">
            <FaGithub></FaGithub> Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
