import React from 'react';
import Navbar from '../../header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../footer/Footer';

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
