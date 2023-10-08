import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './root/Root';
import ErrorPage from '../error/ErrorPage';
import Home from '../pages/Home';
import Reviews from '../pages/Reviews';
import About from '../pages/About';
import EventDetail from '../event/EventDetail';
import LogIn from '../login/LogIn';
import Register from '../register/Register';
import PrivateRoute from '../privateRoute/PrivateRoute';
import Bookings from '../pages/Bookings';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/events.json'),
      },
      {
        path: '/reviews',
        element: (
          <PrivateRoute>
            <Reviews></Reviews>
          </PrivateRoute>
        ),
      },
      {
        path: '/about',
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <LogIn></LogIn>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/bookings',
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
      {
        path: '/event/:id',
        element: (
          <PrivateRoute>
            <EventDetail></EventDetail>
          </PrivateRoute>
        ),
        loader: () => fetch('/events.json'),
      },
    ],
  },
]);
export default Router;
