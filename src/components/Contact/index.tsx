"use client";
import Link from 'next/link';
// import React from 'react'
import "../../styles/contact.css";
import { TiArrowRightThick } from "react-icons/ti";
import Navbar from "@/components/custom/Navbar";
import React, { useEffect } from "react";
import JackieCard, { JackieCardContain } from '@/components/JackieCard';
import AOS from "aos";
import "aos/dist/aos.css";



const page = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
        });
      }, []);
    return (

        <>
             
            <Navbar />
             <div className="contactbg">
                <h1 data-aos="fade-up" data-aos-duration="1000" className="her md:text-4xl text-3xl font-bold md:mx-16 pt-32 pb-10">Building A Legacy of Execellence</h1>
                <p data-aos="fade-up" data-aos-duration="1000" className="hero text-white text-lg font-semibold md:mx-16 md:max-w-[20%]">Find your dream home with our real estate services. Whether you're looking to buy, sell, or rent, we're here to help.</p>
           
                </div>
            <div className=" bg-gray-200 p-10 text-[#0b2c3d] cont">
                <p data-aos="fade-up" data-aos-duration="1000" className="text-lg mx-auto md:max-w-[20%] text-center font-semibold">Whether you have a question, a project in mind, or want to explore partnership opportunities,
                    we'd love to hear from you.
                </p>

                <h1
        data-aos="fade-left"
        data-aos-duration="1000"
        className="text-2xl md:text-3xl lg:text-2xl font-bold text-center p-16 text-[#0b2c3d]"
      >       
                Our{" "}
        <span className=" text-xl md:text-5xl lg:text-3xl font-bold text-center bg-[#b39359] bg-clip-text text-transparent">
          Services
        </span>
      </h1>

      <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto md:max-w-5xl lg:max-w-6xl">
    <JackieCard
    title={"Market Advisory:"}
    description={"Data-Driven Guidance On Selecting The Right Micro-Market And Asset Class."}
    image={"/software.jpg"} color={"#000000"}  opacity={'aa'}/>

<JackieCard
    title={"Business Development:"}
    description={"Strategies TO Enhance Profitability, Focusing On P$L Management And Capex Utilization."}
    image={"/sales.jpg"} color={"#000000"} opacity={'aa'}
/>

<JackieCard
    title={"Product Fitment:"}
    description={"Design Products Based On Market Research, Support With Design And Architectural Needs."}
    image={"/fitment.jpg"} color={"#000000"} opacity={'aa'}
/>

<JackieCard
    title={"Go-to Market Strategies:"}
    description={"Craft Targeted Campaigns Based On Buyers Personal Market Penetration."}
    image={"/soft.jpg"} color={"#000000"} opacity={'aa'}/>

<JackieCard
    title={"Sales Support:"}
    description={"Trained Team Excels In Pitches, Conversions, Maximizing Trunover Margins."}
    image={"/support.jpg"} color={"#000000"} opacity={'aa'}
/>

<JackieCard
    title={"Buyer Assistance:"}
    description={"Streamline bank transactions and handover processes for a seamless experience."}
    image={"/Buyer.jpg"} color={"#000000"} opacity={'aa'}
/>

</div>
               
            <div>
                <p className="text-lg md:max-w-[40%] text-center mx-auto text-[#0b2c3d] p-16 our">Our team is ready to assist with any inquiries you may have.Reach out to us via phone, email, or through out contact form, and we'll get back to you promptly.</p>
            <h1 data-aos="fade-up" data-aos-duration="1000" className="text-2xl font-semibold mx-auto max-w-[40%] text-center text-[#0b2c3d]">Contact&nbsp;
                <span className="bg-[#b39359] bg-clip-text text-3xl text-transparent">Us</span></h1>
           

            <div className="flex md:flex-row items-start justify-between flex-col md:px-24 mx-2 md:mx-4 gap-24 md:py-16">
                <div className="flex flex-col max-w-[100%] md:max-w-[40%]" style={{ flex: 4 }}>
                    <img src="/blobcontact.png" alt="blobcontact" className=" blob w-full" />
                </div>

                <form className="flex flex-col items-start justify-between w-full md:max-w-[35%] my-16 py-24 md:py-24 gap-8 md:px-8 px-2 rounded-lg mt-10 bg-white" style={{ flex: 6 }} id="input">
                    <input type="text" placeholder="Name*" className="w-full rounded-lg md:p-3 p-2 text-white bg-[#0b2c3d]" required />
                    <input type="number" placeholder="phone*" className="w-full rounded-lg md:p-3 p-2 text-white bg-[#0b2c3d]" required />
                    <input type="email" placeholder="Email" className="w-full rounded-lg md:p-3 p-2 text-white bg-[#0b2c3d]" />
                    <input type="text" placeholder="Message" className="w-full rounded-lg md:p-3 p-2 text-white bg-[#0b2c3d]" />
                    <button className="flex flex-row w-full bg-[#b39359] text-white px-4 md:py-3 py-2 rounded-xl hover:bg-[#0b2c3d] font-bold gap-2" type='submit'>Submit
                        <TiArrowRightThick size={20} />

                    </button>
                </form>
            </div>

            <h1 data-aos="fade-up" data-aos-duration="1000" className="text-2xl font-semibold mx-auto md:max-w-[40%] text-center text-[#0b2c3d]">Our&nbsp;
                <span className="bg-[#b39359] bg-clip-text text-transparent">Offices</span></h1>
            <br />
            <br /><br /><br />

            <div className="flex md:flex-row flex-col-reverse items-center justify-between gap-8 md:px-16 p-2">
                <iframe src="https://maps.google.com/maps?q=eavetop+softtech&t=&z=13&ie=UTF8&iwloc=&output=embed" className='md:w-[1100px] w-full' height="450" loading="lazy">
                </iframe>
                <div className='md:-mt-48 linked'>
                     <Link href={'/groups'}>
                    <h1 className="text-xl font-bold bg-[#0b2c3d] bg-clip-text text-transparent mx-16 text-center py-6 hover:text-[#b39359]">Eavetop Infra</h1>
                    </Link>
                    <p className=" max-w-[80%] mx-auto text-center text-[#0b2c3d]">Maruthi Industrial Estate, 4th floor, Building No 3, ITPL Main Rd, KIADB Export Promotion Industrial Area, Bengaluru, Karnataka 560048</p>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            </div>
            </div>
        </>

    );
};

export default page;








// "use client";
// import { useEffect } from "react";
// import "../../styles/contact.css";
// import Navbar from "@/components/custom/Navbar";

// const Contact = () => {

//   useEffect(() => {
//     const inputs = document.querySelectorAll(".input");

//     function focusFunc() {
//       let parent = this.parentNode;
//       parent.classList.add("focus");
//     }

//     function blurFunc() {
//       let parent = this.parentNode;
//       if (this.value === "") {
//         parent.classList.remove("focus");
//       }
//     }

//     inputs.forEach((input) => {
//       input.addEventListener("focus", focusFunc);

//       input.addEventListener("blur", blurFunc);
//     });

//     // Clean up the event listeners on component unmount
//     return () => {
//       inputs.forEach((input) => {
//         input.removeEventListener("focus", focusFunc);
//         input.removeEventListener("blur", blurFunc);
//       });
//     };
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="bgg">
//       <div className="container-fluid contain">
//         <span className="big-circle"></span>
//         <img src="img/shape.png" className="square" alt="" />
//         <div className="form">
//           <div className="contact-info">
//             <h3 className="title">Let's get in touch...</h3>
//             <p className="text">
//             Have a question or need assistance? Reach out to us, and we'll get back to you shortly.
//             </p>

//             <div className="info">
//               <div className="information">
//                 <i className="fas fa-map-marker-alt pb-3"></i> &nbsp;&nbsp;
//                 <p>Maruthi Industrial Estate,4th floor, Building No 3, ITPL Main Rd, KIADB Export Promotion Industrial Area, Bengaluru</p>
//               </div>
//               <div className="information">
//                 <i className="fas fa-envelope pb-3"></i> &nbsp;&nbsp;
//                 <p>EavetopInfra@gmail.com</p>
//               </div>
//               <div className="information">
//                 <i className="fas fa-phone pb-3"></i>&nbsp;&nbsp;
//                 <p>9480-243-905</p>
//               </div>
//             </div>

//             <div className="social-media">
//               <p>Connect with us :</p>
//               <div className="social-icons">
//                 <a href="#">
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fab fa-instagram"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="contact-form">
//             <span className="circle one"></span>
//             <span className="circle two"></span>

//             <form action="https://formspree.io/f/xgvwnngp" method="POST" className="contact-inputs" autoComplete="off">
//               <h3 className="title">Contact us</h3>
//               <div className="input-container">
//                 <input type="text" name="name" className="input" />
//                 <label htmlFor="">Username</label>
//                 <span>Username</span>
//               </div>
//               <div className="input-container">
//                 <input type="email" name="email" className="input" />
//                 <label htmlFor="">Email</label>
//                 <span>Email</span>
//               </div>
//               <div className="input-container">
//                 <input type="tel" name="phone" className="input" pattern="\d{10}"/>
//                 <label htmlFor="">Phone</label>
//                 <span>Phone</span>
//               </div>
//               <div className="input-container textarea">
//                 <textarea name="message" className="input"></textarea>
//                 <label htmlFor="">Message</label>
//                 <span>Message</span>
//               </div>
//               <div className="buttons">
//                 <button className="blob-btn" type="submit" value="Send">
//                   Send
//                   <span className="blob-btn__inner">
//                     <span className="blob-btn__blobs">
//                       <span className="blob-btn__blob"></span>
//                       <span className="blob-btn__blob"></span>
//                       <span className="blob-btn__blob"></span>
//                       <span className="blob-btn__blob"></span>
//                     </span>
//                   </span>
//                 </button>
//                 <br/>
//               </div>              

//             </form>
//           </div>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
