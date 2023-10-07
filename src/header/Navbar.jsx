import { Link, NavLink } from 'react-router-dom';
import UserImage from '../assets/userImage.jpg';
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="reviews">Reviews</NavLink>
      </li>
      <li>
        <NavLink to="about">About Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className=" font-extrabold text-amber-900 lg:text-4xl">
          Event Paradise
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <img className="w-9 h-9 mr-2 rounded-full" src={UserImage} />

        <Link to="/login">
          <button className="text-white bg-amber-800 px-4 py-1 rounded-md">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
