"use client";
import React, { useEffect } from 'react';
import AOS from 'aos/dist/aos.js';
import 'aos/dist/aos.css';
import "../../customHeader.css";
import CustomHeader2 from "src/components/custom/customHeader2";

const CustomHeader = () => {

    useEffect(() => {
        // Initialize AOS
        AOS.init();

        // Tawk.to script
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/66bef881146b7af4a43b0972/1i5cvlfdu';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();
    }, []);

    return (
        <>
            <div className="relative">
                <div className="hero-main text-white" style={{

                    backgroundImage: "url('/j1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100vw",
                    height: "90vh",

                }}>

                    <div className="rounded-left bg-[rgba(4,4,10,0.5)] absolute t-0 l-0 w-full h-full p-6">
                        <div className="middle max-w-[100%] lg:max-w-[60%]">
                            <p data-aos="fade-right" data-aos-duration="1000" className="first-line">Welcome to Eavetop Infra</p>
                            <p data-aos="fade-up" data-aos-duration="1000" className="second-line">Dreams to </p>
                            <p data-aos="fade-up" data-aos-duration="1000" className="second-line2">Reality...</p>
                            <p className="third-line">Transforming your visionary ideas into tangible, stunning structures that stand the test of time and architectural brilliance.</p>
                            <div data-aos="fade-up" data-aos-duration="1000" className="search-container">
                                <div className="input-wrapper">
                                    <input type="email" placeholder="Enter your email" className="search-bar bg-white text-[#0b2c3d]" />
                                    <button className="search-button">Get in touch</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container-fluid cards">
                    <div className="first-div1">
                        <span className="fourth-line">Excellence in Every Endeavor, Always.
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.9" stroke="currentColor" className="text-[#0b2c3d] ml-[390px] -mt-6 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                        </span>
                        <p className="fifth-line p-4">Unleashing Creative Potential</p>
                    </div>
                    <div className="second-div1 m-8">
                        <div className="feature border bg-white" data-aos="fade-left" style={{ borderRadius: '0.rem' }}>
                            <img src="./security1.png" alt="Icon 1" />
                            <h2 className="heroHeadings text-[#b39359]">Built to Last</h2>
                            <p className="third-line3">Creating enduring structures with craftsmanship that stands the test of time, blending strength with timeless design.</p>
                        </div>
                        <div className="feature border bg-white" data-aos="fade-up" style={{ borderRadius: '0.rem' }}>
                            <img src="./idea.png" alt="Icon 2" />
                            <h2 className="heroHeadings text-[#b39359]">Creative Spaces</h2>
                            <p className="third-line3">We craft inspiring environments where form meets function, turning ordinary spaces into extraordinary experiences.</p>
                        </div>
                        <div className="feature border bg-white" data-aos="fade-right" style={{ borderRadius: '0.rem' }}>
                            <img src="./settings.png" alt="Icon 2"/>
                            <h2 className="heroHeadings text-[#b39359]">Community Builders</h2>
                            <p className="third-line3">Constructing not just buildings, but communities where people thrive and connections are made.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomHeader;
