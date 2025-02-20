"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import "../../styles/header.css";


const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const { theme } = useTheme();
  const [backgroundImage, setBackgroundImage] = useState("");
  const [glassClass, setGlassClass] = useState('glass');
  const [subheading, setsubheading] = useState('');

  useEffect(() => {
    if (theme === "dark") {
      setBackgroundImage("url('/images/blog/darkbackground8.jpg')");
      setGlassClass('glass1');
      setsubheading('text-3d');
    }
     else {
      setBackgroundImage("url('/images/blog/background2.jpg')");
      setGlassClass('glass');
      setsubheading('text-3d1');
    }
  }, [theme]);
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-new dark:bg-dark bg-opacity-10 text-green">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="bg-gray-200 dark:bg-bg-color-dark  pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
            <div className="section-title">
                <h1  className={`sub-heading dark:text-new`}>Why Choose Us:</h1>
                <p className={` `} style={{ marginTop: "-15px",
  fontSize: "1rem",
  color:" black",
  fontWeight: "bold",
  paddingLeft: "6px"}}>
                Delivering Unmatched Precision, Innovative Technology, and Exceptional Service.
                </p>
            </div>

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Premium quality" />
                    <List text="Cost Effective" />
                    <List text="Trust" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Timelines" />
                    <List text="Customer Satisfaction" />
                    <List text="Safety First" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[36/20] max-w-[650px]  lg:mr-0">
                <Image
                  src="/images/brands/rooftop1.avif"
                  loading="lazy"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none rounded-3xl lg:mr-0 border-4 border-black"
                />
                <Image
                  src="/images/brands/rooftop1.avif"
                  loading="lazy"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none rounded-3xl border-4 lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
