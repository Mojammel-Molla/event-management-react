import React from 'react';
import Navbar from '../../header/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
