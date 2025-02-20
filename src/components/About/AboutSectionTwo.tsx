"use client";
import Image from "next/image";
import "../../styles/header.css";


const AboutSectionTwo = () => {

  return (
    <section className=" py-16 md:py-20 bg-gray-100 lg:py-28 dark:bg-gray-dark">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[32/20] max-w-[650px] text-center lg:m-0"
              data-wow-delay=".15s"
            >

              <Image
                src="/images/brands/rooftop3d.png"
                 loading="lazy"
                alt="about image"
                fill
                className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none rounded-3xl lg:mr-0 border-4 border-black"
              
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-4">
                <h3 className="mb-1 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent ">
                Client-Centric Approach
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>

                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed ">
                We listen to your needs and work closely with you throughout the entire process.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="mb-1 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
                Expertise and Experience
               

                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                With years of industry experience, our team brings  proven expertise to every project.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-1 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
                  Commitment to Quality
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>

                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We prioritize excellence in materials, craftsmanship to deliver outstanding projects every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
