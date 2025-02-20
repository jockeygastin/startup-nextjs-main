"use client";
import Navbar from "../custom/Navbar";
import "../../styles/aboutsectionthree.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSectionThree = () => {
  return (
    <>

      <div className="relative bg-[#e8e2e2] p-10">
        <div className="container1 container absolute">
          <div className="contentLeft">
            <div className="row">
              <div className="imgWrapper">
                <img data-aos="fade-up" data-aos-duration="1000" src="https://plus.unsplash.com/premium_photo-1681429766540-f05bd18b4002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJ1aWxkaW5nJTIwNGt8ZW58MHx8MHx8fDA%3D" alt="" />
              </div>
              <div className="imgWrapper">
                <img data-aos="fade-down" data-aos-duration="1000" src="https://images.unsplash.com/photo-1694283057826-939d34a1dabe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGJ1aWxkaW5nJTIwNGt8ZW58MHx8MHx8fDA%3D" alt="" />
              </div>
              <div className="imgWrapper">
                <img data-aos="fade-down" data-aos-duration="1000" src="https://media.istockphoto.com/id/1325342016/photo/mumbai-skyline-wadala-sewri-lalbaug.jpg?s=2048x2048&w=is&k=20&c=kFqeM7qKJSdTG0FgpSZCJ6de_ALmsp889rX95LMTe48=" alt="" />
              </div>
              <div className="imgWrapper">
                <img data-aos="fade-up" data-aos-duration="1000" src="https://plus.unsplash.com/premium_photo-1661964095477-fe68b487f700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmclMjBpbiUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="" />
              </div>
            </div>
          </div>
          <div className="contentRight">
            <div className="content">
              <h4 data-aos="fade-up" data-aos-duration="1000">Welcome To</h4>
              <h2 data-aos="fade-right" data-aos-duration="1000">Our Company</h2>
              <p data-aos="fade-up" data-aos-duration="1000">At Eavetop, we are committed to building the future. With decades of experience in the construction industry, we specialize in delivering high-quality, innovative building solutions that stand the test of time. Our team of experts works tirelessly to ensure that every project meets the highest standards of safety, sustainability, and craftsmanship. From residential developments to large-scale commercial projects, we bring your vision to life with precision and care.</p>
              <a data-aos="fade-right" data-aos-duration="1000" href="#exteriorCladding">know more...</a>
            </div>
          </div>
        </div>
      </div>

      <ul className="c-services">
        <li className="c-services__item">
          <h3>Site Preparation</h3>
          <p>
            We clear, grade, and excavate land to prepare a stable foundation
            for your construction project.
          </p>
        </li>
        <li className="c-services__item">
          <h3>Interior Finishing</h3>
          <p>
            Transform your interiors with drywall installation, painting, trim
            work, and other finishing touches.
          </p>
        </li>
        <li className="c-services__item">
          <h3>Project Management </h3>
          <p>
            Our project management services ensure that your construction
            project runs smoothly from start to finish. We handle scheduling,
            budgeting, and coordination with subcontractors to deliver your
            project on time and within budget, with a focus on quality and
            client satisfaction.
          </p>
        </li>
        <li className="c-services__item">
          <h3>Renovation Services</h3>
          <p>
            Update and refresh your spaces with comprehensive renovations that
            modernize layouts and improve overall functionality and
            aesthetics.
          </p>
        </li>
        <li className="c-services__item">
          <h3>Landscaping</h3>
          <p>
            Design and install beautiful gardens, lawns, and outdoor features
            to enhance your building’s exterior and create inviting spaces.{" "}
          </p>
        </li>
        <li id="exteriorCladding" className="c-services__item">
          <h3>Exterior Cladding</h3>
          <p>
            Oversee your construction project to ensure timely,
            budget-friendly completion with high-quality results.{" "}
          </p>
        </li>
      </ul>


      <div
        className="flex h-full w-full flex-col items-center justify-center gfgf"
      >
        <span className="text-[#0b2c3d] font-bold text-2xl max-w-lg mx-auto mb-2 capitalize flex items-center">
          Meet Our Expert Team
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.9"
            stroke="currentColor"
            className="ml-3 h-6 w-6 text-[#0b2c3d]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
        <h1 data-aos="fade-up" data-aos-duration="1000"
          className={`fifth-line mx-auto mb-16 max-w-3xl text-center bg-clip-text text-transparent bg-[#0b2c3d] text-xl font-semibold leading-snug md:text-5xl xl:text-3xl`}
        >
          Meet the Faces of Our Success.
        </h1>
        <div className="container-fluid mx-auto flex flex-wrap justify-center">
          <div className="mb-4 flex max-w-xs flex-col rounded-lg shadow-lg sm:mb-6 lg:mb-8 lg:flex-2 lg:mx-4 md:mx-2">
            <div
              className="h-auto w-full flex-shrink-0 rounded-b-sm rounded-t-lg px-5"
              style={{
                backgroundImage: "url('/images/blog/profilebackground4.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                boxShadow:
                  "rgba(50, 50, 93, 0.75) 0px 50px 100px -20px, rgba(0, 0, 0, 0.9) 0px 30px 60px -30px, rgba(10, 37, 64, 0.55) 0px -2px 6px 0px inset",
              }}
            >
              <img
                className="h-56 w-full object-contain lg:h-48"
                src="../../../images/blog/1.jpg"
                alt="Sukumar Kondeti"
                loading="lazy"
              />
            </div>
            <div
              className="flex flex-col justify-center rounded-b-lg bg-gray-100 px-3 py-3 flex-grow relative"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `url('your-image-url.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.5, // Adjust opacity
                  filter: "blur(8px)", // Add blur to blend more
                }}
              ></div>


              <div className="relative z-10 client ">
                <h1 className="bg-gradient-to-r from-transparent via-[#0b2c3d] to-transparent text-center text-xl font-bold text-white">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#734b057c] to-transparent"></div>
                  Sukumar Kondeti
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0105107c] to-transparent"></div>
                </h1>
                <h6 className="text-md font-semibold text-center text-[#b39359]">
                  Partner - Eavetop Infra, <br />
                  CEO - Eavetop Softtech
                </h6>
                <p className="pt-1 text-sm text-[#0b2c3d]">
                  Delivered comprehensive plans and rigorously monitored project execution, including luxury villas, G+14 residential apartments, and commercial establishments. Successfully managed a skilled team of 100+ civil engineers, offering expertise and innovative solutions in architectural and engineering services for both USA and Canada markets, achieving exceptional outcomes across diverse projects.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-4 flex max-w-xs flex-col rounded-lg shadow-lg sm:mb-6 lg:mb-8 lg:flex-2 lg:mx-4 md:mx-2">
            <div
              className="h-auto w-full flex-shrink-0 rounded-b-sm rounded-t-lg px-5"
              style={{
                backgroundImage: "url('/images/blog/profilebackground4.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                boxShadow:
                  "rgba(50, 50, 93, 0.75) 0px 50px 100px -20px, rgba(0, 0, 0, 0.9) 0px 30px 60px -30px, rgba(10, 37, 64, 0.55) 0px -2px 6px 0px inset",
              }}
            >
              <img
                className="h-56 w-full object-contain lg:h-48"
                loading="lazy"
                src="../../../images/blog/2.jpg"
                alt="Praneeth Chowdary M N"
              />
            </div>
            <div
              className="flex flex-col justify-center rounded-b-lg bg-gray-100 px-3 py-3 flex-grow"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <h1 className="bg-gradient-to-r from-transparent via-[#0b2c3d] to-transparent text-center text-xl font-bold text-white">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#3d6ffa7c] to-transparent"></div>
                Praneeth Chowdary M N
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#3d6ffa7c] to-transparent"></div>
              </h1>
              <h6 className="text-md text-center font-semibold text-[#b39359]">
                Partner - Eavetop Infra, <br />
                Head of Marketing and Finance
              </h6>
              <p className="pt-1 text-sm text-[#0b2c3d]">
                Possesses a solid construction and marketing background. Leveraging extensive experience,
                he successfully managed to sell around 650 flats, ranging from budget to premium apartments.
                With a longstanding family background in construction under V6 Builders, he established a reputable legacy,
                supported by a skilled marketing team that excels in delivering impressive results across various segments.
              </p>
            </div>
          </div>

          <div className="mb-4 flex max-w-xs flex-col rounded-lg shadow-lg sm:mb-6 lg:mb-8 lg:flex-2 lg:mx-4 md:mx-2">
            <div
              className="h-auto w-full flex-shrink-0 rounded-b-sm rounded-t-lg px-5"
              style={{
                backgroundImage: "url('/images/blog/profilebackground4.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                boxShadow:
                  "rgba(50, 50, 93, 0.75) 0px 50px 100px -20px, rgba(0, 0, 0, 0.9) 0px 30px 60px -30px, rgba(10, 37, 64, 0.55) 0px -2px 6px 0px inset",
              }}
            >
              <img
                className="h-56 w-full object-contain lg:h-48"
                loading="lazy"
                src="../../../images/blog/3.jpg"
                alt="Prasad Kilari"
              />
            </div>
            <div
              className="flex flex-col justify-center rounded-b-lg bg-gray-100 px-3 py-3 flex-grow"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <h1 className="bg-gradient-to-r from-transparent via-[#0b2c3d] to-transparent text-center text-xl font-bold text-white">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#3d6ffa7c] to-transparent"></div>
                Prasad Kilari
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#3d6ffa7c] to-transparent"></div>
              </h1>
              <h6 className="text-md text-center font-semibold text-[#b39359]">
                Partner - Eavetop Infra, <br />
                Head of Procurement and Liasioning
              </h6>
              <p className="pt-1 text-sm  text-[#0b2c3d]">
                A leading supplier of construction materials, awarded No.1 cement dealer in Bangalore by Heidelberg Cements. Deals with top brands of cement, steel, and other materials, including manufacturing of concrete blocks, UPVC fittings, and superior quality building solutions. Recognized for excellence, consistently delivering premium products that meet the highest industry standards.
              </p>
            </div>
          </div>

          <div className="mb-4 flex max-w-xs flex-col rounded-lg shadow-lg sm:mb-6 lg:mb-8 lg:flex-2 lg:mx-4 md:mx-2">
            <div
              className="h-auto w-full flex-shrink-0 rounded-b-sm rounded-t-lg px-5"
              style={{
                backgroundImage: "url('/images/blog/profilebackground4.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                boxShadow:
                  "rgba(50, 50, 93, 0.75) 0px 50px 100px -20px, rgba(0, 0, 0, 0.9) 0px 30px 60px -30px, rgba(10, 37, 64, 0.55) 0px -2px 6px 0px inset",
              }}
            >
              <img
                className="h-56 w-full object-contain lg:h-48"
                loading="lazy"
                src="../../../images/blog/4.png"
                alt="Narsimha Reddy"
              />
            </div>
            <div
              className="flex flex-col justify-center rounded-b-lg bg-gray-100 px-3 py-3 flex-grow"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <h1 className="bg-gradient-to-r from-transparent via-[#0b2c3d] to-transparent text-center text-xl font-bold text-white">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0b2c3d] to-transparent"></div>
                Pranai Chowdary Y S
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0b2c3d] to-transparent"></div>
              </h1>
              <h6 className="text-md text-center font-semibold text-[#b39359]">
                Partner - Eavetop Infra, <br />
                Head of Projects
              </h6>
              <p className="pt-1 text-sm text-[#0b2c3d]">
                Oversees every aspect of project execution, ensuring timely completion while upholding high standards
                of quality and safety. Brings a wealth of experience and knowledge in construction management, consistently leading teams to achieve outstanding results across diverse projects. Maintains a focus on excellence, driving success through effective leadership, strategic planning.
              </p>
            </div>
          </div>

          <div className="max-w-full lg:max-w-[70%] flex flex-row items-start justify-between mb-4 mt-16 aboutpara px-4 lg:px-16">
            <div className="w-[40%]">
              <img src="/oesch.png" alt="oesch" className="" />
              <div className="flex flex-wrap text-center">
                <div className="w-full border-[#0b2c3d] p-6 lg:w-1/2 lg:border-r mb-20">
                  <p className="bg-[#0b2c3d] bg-clip-text text-xl text-transparent lg:text-3xl">
                    2000+
                  </p>
                  <p className="text-[#0b2c3d]">Clients</p>
                </div>
                <div className="w-full p-6 lg:w-1/2">
                  <p className="bg-[#b39359] bg-clip-text text-xl text-transparent lg:text-3xl pr-8">
                    3000+
                  </p>
                  <p className="text-[#0b2c3d]">Properties Sold!</p>
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <h1 className="text-2xl font-bold text-center text-[#0b2c3d] ">About<span className="text-xl font-bold text-center bg-[#b39359] bg-clip-text text-transparent"> Eavetop Infra</span></h1>
              <p className=" text-center text-xl tracking-tighter paragraph">At Eavetop Infra, we are committed to providing exceptional real estate services to our clients. With years of experience in the industry, Our team of expert agents is dedicated to helping you achieve  your Eavetop Infra goals. Whether you're  buying,selling,
                renting,or looking for property management services, wr're here to assist your every step of the way. Our mission is to make your real estate experience as seamless and stress-free as possible. Contact us today to learn more about how we can help you with all your eavetop infra needs.Navigating India's Real Estate MarketWe are
                available in
                40+ Countries!
                Buying: We offer personalized assistance to help you find the perfect property to suit your needs and budget. Our agents will guide you through the entire buying process, from property selection to closing the deal.
                Selling: When it comes to selling your property, our expert agents will create a customized marketing strategy to attract potential buyers and get you the best possible price.
                We Provide Latest Properties for our valuable Clients.Huge number of propreties availabe here for buy, sell and Rent. Also you find here co-living property so lots opportunity you have to choose here and enjoy huge discount.
              </p>
              <div className="">
                <div className="flex flex-row items-center">
                  <img src="/doller.png" alt="" className="-mt-12"/>
                  <div className="">

                    <span className="font-semibold text-xl text-[#0b2c3d] pl-4">Budget Friendly</span>
                    <p className="text-[#b39359] w-[70%] pl-4">Properties are most budget friendly so you have opportunity to find the best one</p>
                  </div>
                </div>
                <br /> 
                <div className="flex flex-row items-center">
                  <img src="/location.png" alt="" className="-mt-12" />
                  <div className="">

                    <span className="font-semibold text-xl text-[#0b2c3d] pl-4">Prime location</span>
                    <p className="text-[#b39359] w-[70%] pl-4">Properties are most budget friendly so you have opportunity to find the best one</p>
                  </div>
                </div>
                <br />
                <div className="flex flex-row items-center">
                  <img src="/trusted.png" alt="" className="-mt-12"/>
                  <div className="">
                    <span className="font-semibold text-xl text-[#0b2c3d] pl-4">Trusted By Thousand</span>
                    <p className="text-[#b39359] w-[70%] pl-4">Properties are most budget friendly so you have opportunity to find the best one</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSectionThree;
