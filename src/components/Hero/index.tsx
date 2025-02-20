"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import GiphyEmbed from '../Hero/giphyEmbed'; 
import "../../styles/header.css";
import CustomHeader from "../custom/CustomHeader";
import Navbar from "../custom/Navbar";



const Hero = () => {
  const { theme } = useTheme();
  const [backgroundImage, setBackgroundImage] = useState("");
  const [glassClass, setGlassClass] = useState('glass');

  useEffect(() => {
    if (theme === "dark") {
      setBackgroundImage("url('/images/blog/darkbackground8.jpg')");
      setGlassClass('glass1');
    } else {
      setBackgroundImage("url('/images/blog/newb1.jpg')");
      setGlassClass('glass');
    }
  }, [theme]);
  return (
    <>
    <Navbar />
    <CustomHeader />
    {/* <section
      id="home"
      className="relative z-10 overflow-hidden pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px]  h-screen 2xl:pb-[200px]  bg-center bg-no-repeat blur-bottom"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container blur-bottom flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-3/4 pb-4">
          <div className="max-w-[800px] text-left lg:text-left ml-0 mt-0">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight slide-in-top text-pop-up-top focus-in-contract-bck headings">
              EAVETOP <span className="span-color background-span">INFRA</span>
            </h1>
            <p className="mb-12 bold-text1 text-body-color-black dark:text-new sm:text-lg md:text-xl lg:text-6xl bold-text">
              We don’t just build <span className="span-color bold-text">Structures,</span> we create lasting <span className="span-color2 bold-text">Impression.</span>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/3 pb-4 -ml-1 flex justify-center items-center">
          <img src="/images/blog/newb4.png" alt="Your Image Description" className="max-w-full h-auto" />
        </div>
      </div>
    </section> */}
    </>
  );
};

export default Hero;
