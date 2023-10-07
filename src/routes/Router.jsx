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
        element: <Reviews></Reviews>,
      },
      {
        path: '/about',
        element: <About></About>,
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
        path: '/event/:id',
        element: <EventDetail></EventDetail>,
        loader: () => fetch('/events.json'),
      },
    ],
  },
]);
export default Router;
