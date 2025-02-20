"use client";
import { PiHouseLineDuotone } from "react-icons/pi";
import { AiTwotoneBank } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Navbar from "@/components/custom/Navbar";
import "../../styles/service.css";
import Link from 'next/link';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import JackieCard, { JackieCardContain } from '@/components/JackieCard';

const page = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
        });
      }, []);
    return (
        <>
              <Navbar />
            <div className="relative z-10 pr-2 pl-50 services">
                <img src="blockchain.jpg" alt="" className="w-full h-[90vh] object-cover z-10" />
                <div className="bg-[rgba(4,4,10,0.5)] absolute top-0 left-0 right-0 bottom-0">
                    <h1 data-aos="fade-left" data-aos-duration="1000" className="absolute text-3xl font-bold text-center p-40 pl-96 bg-white bg-clip-text text-transparent">Mastering an Integrated Ecosystem in Real Estate</h1>
     
                    <p data-aos="fade-up" data-aos-duration="1000" className="text-xl text-center font-semibold text-[#b39359] p-56">Connecting Ventures, Enhancing Value, Driving Success</p>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center text-white gap-10 p-20 bg-white services">
                <div className="items-center justify-center">
                <h1 className="text-2xl font-bold text-black text-center mb-10">Buyer Assistance:</h1>
                <h2 className="text-xl font-bold bg-[#b39359] bg-clip-text text-transparent text-center mb-8">A seamless buying experience Experience from Start to Finish</h2>
                <p className="text-lg text-center text-neutral-700 w-[70%] mx-auto">We streamline bank transactions and handover processes, offering buyers a seamless and hassle-free experience. Eavetop Infra  ensures that every step of the buying process is smooth and efficient, fostering trust and long-term relationships with clients.</p>
                <h3 className="text-xl text-center font-bold text-[#0b2c3d] mt-10">Key Highlights:</h3>
                </div>
                <br /> <br />
               
                <Link href="/property-info">
                    <div className=" flex flex-col items-center justify-center font-semibold rounded-full w-80 h-80 gap-4 bg-[#b39359] hover:bg-[#0b2c3d]">
                        <PiHouseLineDuotone className="text-8xl items-center justify-center text-white" />
                        <p className="text-lg text-center max-w-[60%] text-white"> Efficient property handovers.</p>
                    </div>
                </Link>

                <Link href="/contact-us">
                    <div className="flex flex-col items-center justify-center font-semibold rounded-full w-80 h-80 gap-4 bg-[#b39359] hover:bg-[#0b2c3d]">
                        <AiTwotoneBank className="text-8xl items-center justify-center text-white" />
                        <p className="text-lg text-center max-w-[60%] text-white"> Streamlined bank transaction processes.</p>

                    </div>
                </Link>

                <Link href="/sign-in">
                    <div className="flex flex-col items-center justify-center font-semibold rounded-full w-80 h-80 gap-4 bg-[#b39359] hover:bg-[#0b2c3d]">
                        <FaRegHandshake className="text-8xl items-center justify-center text-white" />
                        <p className="text-lg text-center max-w-[60%] text-white">Building trust through exceiptional service.</p>
                    </div>
                </Link>
            </div>

            {/* 
            
            
            
            
            */}
            {/* <div className="flex flex-col items-center justify-center bg-white">
                <h1 data-aos="fade-left" data-aos-duration="1000" className="text-3xl italic font-bold text-center p-2 bg-gradient-to-r from-green via-pink-500 to-purple-950 bg-clip-text text-transparent">Discover how the Eavetop Group is reshaping real estate and lifestyle.</h1>
                <p className='text-3xl text-center italic font-bold'>Ready to be a part of our success story?</p>
            </div>
            <button className="flex flex-row items-center justify-center bg-gradient-to-r from-yellow  to-orange-800 font-Semibold  text-white rounded-xl p-3 mx-auto my-16 w-40 bg:hover-bg-gradient-to-r hover:from-green hover:to-purple-950">Get in Touch&nbsp;
                <FaCaretRight size={16} />
            </button> */}
           

            <div className=' relative bg-neutral-200 items-center justify-center p-20 min-h-[60vh] services'>
                <div className='max-w-6xl mx-auto'>
                    <h1 data-aos="fade-up" data-aos-duration="1000" className="text-lg italic font-bold bg-[#b39359] bg-clip-text text-transparent">We'd love to know how you discovered Us!</h1>
                    <div className="mt-8">
                        <select aria-placeholder='Tell us who referred you?' className='p-3 bg-white rounded-2xl min-w-[30%]'>
                            <option value="">Tell us who referred you?</option>
                            <option value="google">Google</option>
                            <option value="facebook">Facebook</option>
                            <option value="instagram">Instagram</option>
                            <option value="existing partner">Existing Partner</option>
                        </select>
                        <input type="text" placeholder='Why do you want to partner with us?' className='bg-white rounded-2xl p-3 min-w-[60%] mx-12' />
                    </div>

                    <div className="pb-16 px-4 m-0 services">
                        <p className='font-bold text-xs'>Haven't been referred? No problem</p>
                        <p className='text-xs'>Fill in your details and we will get back to you real soon!</p>
                    </div>

                       <div>
                    <h1 data-aos="fade-left" data-aos-duration="1000" className='text-base font-bold p-2 bg-[#0b2c3d] bg-clip-text text-transparent'>How do we contact you?</h1>
                    <input type="text" placeholder='Name*' className=' bg-white p-3 rounded-2xl mx-8 ml-0 w-80' />
                    <input type="number" placeholder='phone*' className='bg-white p-3 rounded-2xl mx-8  w-80' />
                    <input type="text" placeholder='Email' className='bg-white p-3 rounded-2xl mx-8  w-80' />
                    <br />
                    </div>

                    <div data-aos="fade-up" data-aos-duration="1000" className='pl-96 ml-96'>
                    <button className='flex flex-row items-center justify-center bg-[#b39359] font-semibold  text-white mx-auto my-16 h-10 w-52 hover:bg-[#0b2c3d]'>Let's get started
                        <FaArrowAltCircleRight size={26} className="pl-2" />
                        
                    </button>
                    </div>
                </div>
            </div>



        </>














    )
}

export default page;