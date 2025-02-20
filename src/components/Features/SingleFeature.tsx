"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Feature } from "@/types/feature";
import "../../styles/service.css";
import SectionTitle from "../Common/SectionTitle";



const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  const [subheading, setsubheading] = useState('');
  const { theme } = useTheme();


  useEffect(() => {
    if (theme === "dark") {
      setsubheading('text-3d');
    } else {
      setsubheading('text-3d1');
    }
  }, [theme]);
  return (
  <>
    {/* <div className="w-full p-6 rounded-lg border-8 dark:border-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-two dark:hover:shadow-six">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary dark:hover:shadow-five">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color ">
          {paragraph}
        </p>
      </div>
    </div> */}



    {/* <div className="card-wrapper ">
    <div className="card ">
      <div className="card-top gradient-green bg-primary bg-opacity-10 text-primary ">
        <div className="icon ">
        {icon}
        </div>
      </div>
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
    
      </div>
      <div className="overlay slider">
        <h4>{title}</h4>
        <p>{paragraph}</p>
        <button className="btn btn-default overlay-btn">Click Me</button>
      </div>
    </div>
    </div> */}
   <div className="card-wrapper">
  <div className="card color-change-2x">
    <div className="card-top gradient-green bg-primary bg-opacity-10 text-primary">
    <div
  className="icon"
  style={{ backgroundImage: `url(${icon})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
  
</div>
    </div>
    <div className="card-content flex justify-center items-center ">
  <h4 className={`card-title dark:text-new sub-heading ${subheading}`}>
  {title}
  </h4>
</div>
    <div className="overlay slider">
      <p>{paragraph}</p>
      {/* <button className="btn btn-default overlay-btn">Click Me</button> */}
    </div>
  </div>
</div>


    </>
  );
};

export default SingleFeature;
