"use client";
import { useEffect} from "react";
import "../../styles/header3.css";
import AOS from 'aos/dist/aos.js';
import 'aos/dist/aos.css';

const Features = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
<section
  className="min-h-screen text-center py-20 px-8 xl:px-0 flex flex-col justify-center bg-gray-200"
>
  <div className="flex flex-col justify-center items-center h-full">
    <span className="text-[#b39359] font-bold text-xl max-w-lg mx-auto mb-2 capitalize flex items-center">
      what we're offering
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.9" stroke="currentColor" className="text-[#0b2c3d] ml-3 w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    </span>
    <h1 className={`text-4xl md:text-5xl xl:text-4xl font-semibold max-w-3xl mx-auto mb-16 leading-snug fifth-line`}>
      Services Built Specifically for you.
    </h1>
    <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
      <div className="card p-10 relative" data-aos="fade-down-right">
        <div className="circle circle-1" style={{ backgroundImage: 'url("/images/blog/newb5.png")' }}></div>
        <div className="relative lg:pr-52">
          <h2 className="capitalize mb-4 text-lg xl:text-lg fw-bold text-[#b39359]">Recidential <br /> Construction </h2>
          <p className="para">Building new homes or residential units, including single-family homes and apartment complexes.</p>
        </div>
      </div>
      <div className="card p-10 relative" data-aos="fade-down-left">
        <div className="circle circle-2" style={{ backgroundImage: 'url("/images/blog/pm1.jpg")' }}></div>
        <div className="relative lg:pl-48">
          <h2 className="capitalize mb-4 text-lg xl:text-lg fw-bold text-[#b39359]">Project <br /> Management</h2>
          <p className="para ml-4 ">Overseeing the entire construction process, including scheduling, budgeting, and coordination.</p>
        </div>
      </div>
      <div className="card p-10 relative" data-aos="fade-up-right">
        <div className="circle circle-3"  style={{ backgroundImage: 'url("/images/blog/ad1.jpg")' }}></div>
        <div className="relative lg:pr-44">
          <h2 className="capitalize mb-4 text-lg xl:text-lg fw-bold text-[#b39359]" >Architectural <br />Design</h2>
          <p className="para">Creating architectural plans, engineering designs, and construction blueprints.</p>
        </div>
      </div>
      <div className="card p-10 relative" data-aos="fade-up-left">
        <div className="circle circle-4" style={{ backgroundImage: 'url("/images/blog/rr1.jpg")' }}></div>
        <div className="relative lg:pl-48" >
          <h2 className="capitalize mb-4 ml-4 text-lg xl:text-lg fw-bold text-[#b39359]">Renovations and <br />Remodeling</h2>
          <p className="para">Upgrading, renovating, or expanding existing structures to meet new requirements or improve aesthetics.</p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Features;
