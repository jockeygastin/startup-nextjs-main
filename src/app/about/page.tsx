"use client";
import React, { useEffect} from "react";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Navbar from "@/components/custom/Navbar";
import AOS from 'aos/dist/aos.js';
import 'aos/dist/aos.css';


const AboutPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  

  return (
    <div>
      <Navbar />
      <AboutSectionThree />
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}

    </div>
  );
}

export default AboutPage;
