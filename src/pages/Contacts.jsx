import React from 'react';
import { GrPhone, GrMailOption } from 'react-icons/gr';
import { MdLocationOn } from 'react-icons/md';
const Contacts = () => {
  return (
    <section className="grid mt-5 bg-slate-200 rounded-md  gap-3 lg:grid-cols-3  sm:grid-cols-1">
      <div className="p-20  text-center  mx-auto">
        <GrMailOption className="text-2xl ml-20"></GrMailOption>

        <h2 className="font-semibold">info@eventparadise.com</h2>
      </div>
      <div className="lg:p-20  text-center  mx-auto">
        <MdLocationOn className="text-2xl ml-20"></MdLocationOn>
        <h2 className="font-semibold">Dhaka</h2>
        <p className="font-light">kuril chowrasta, badda, 1212</p>
      </div>
      <div className="p-20  text-center  mx-auto">
        <GrPhone className=" ml-10 text-2xl"></GrPhone>

        <h2 className="font-semibold">+1300 138 892</h2>
        <p className="font-light">Monday - Saturday</p>
        <p className="font-light">9 AM - 6 PM</p>
      </div>
    </section>
  );
};

export default Contacts;
