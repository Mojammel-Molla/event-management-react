import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './root/Root';
import ErrorPage from '../error/ErrorPage';
import Home from '../pages/Home';
import Reviews from '../pages/Reviews';
import About from '../pages/About';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/reviews',
        element: <Reviews></Reviews>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
    ],
  },
]);
export default Router;
