"use client";
import Image from "next/image";
import "../../styles/header.css";

const Video = () => {
  return (
    <section className="blur-top1 relative z-10 py-16 md:py-20 lg:py-25 blur-bottom">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat filter z-[-1]"
        style={{
          backgroundImage: "url('/images/blog/background34.jpg')",
        }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-[-1]"></div>

      <div className="container blur-bottom relative z-10">
        <div className="section-title text-center mb-20">
          <h3 className="text-gray-800 text-4xl md:text-5xl xl:text-7xl font-semibold max-w-3xl mx-auto leading-snug text-center relative">
            <span className="relative inline-block">
              <span className="relative text-gray-800 font-semibold">
                <span className="text-white">Turning your</span> 
                <span className="text-white"> ideas</span>
              </span>
            </span>
            <br />
            <span className="relative inline-block">
              <span className="relative text-white font-semibold">
                into real-life
                <span className="text-white"> magic</span>.
              </span>
            </span>
          </h3>
          <h3 className="text-gray-800 text-4xl md:text-5xl xl:text-4xl font-semibold max-w-3xl mx-auto mb-16 leading-snug text-center relative">
            <span className="relative inline-block">
              <span className="relative text-indigo-900 ">
                – let’s
                <span className="text-indigo-900"> build</span> something
                <span className="text-indigo-900"> Awesome.</span>
              </span>
            </span>
            <br />
          </h3>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-5">
            <div
              className="mx-auto max-w-[970px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image
                  src="/images/blog/image6.png"
                  loading="lazy"
                  alt="video image"
                  fill
                />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
