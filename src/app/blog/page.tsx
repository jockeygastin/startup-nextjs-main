"use client"
import React, { useEffect, useRef } from 'react';
import Navbar from "@/components/custom/Navbar";
import "../../styles/projects.css";
import { FaCaretRight } from "react-icons/fa6";
import Link from 'next/link'; // Add this line
import JackieCard, { JackieCardContain } from '@/components/JackieCard';


const Carousel = () => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    const carouselDom = carouselRef.current;
    const sliderDom = sliderRef.current;
    const thumbnailBorderDom = thumbnailRef.current;
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    const timeDom = timeRef.current;
    const nextDom = document.getElementById('next');
    const prevDom = document.getElementById('prev');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    let timeRunning = 1000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    const showSlider = (type) => {
      const sliderItemsDom = sliderDom.querySelectorAll('.carousel .list .item');
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

      if (type === 'next') {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    nextDom.onclick = () => showSlider('next');
    prevDom.onclick = () => showSlider('prev');

    return () => {
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, []);

  return (
    <>
      <Navbar/>
      <div className="carousel" ref={carouselRef}>
      <div className="list" ref={sliderRef}>
        <div className="item image-container">
          <img src="/contact-us.jpg" loading="lazy" alt="Slide 1" />
          <div className="overlay"></div>
          <div className="content">
            <div className="author">Eavetop's</div>
            <div className="title">Durgadevi</div>
            <div className="topic">Enclave</div>
            <div className="des">
             <p>Location:<span>Happy Valley,Kengeri Rd</span></p>
             <p>Nature: <span>G +3</span></p>
             <p>No. of Flats: <span>48</span></p>
             <p>Builtup Area: <span>62,830 Sft</span></p>
             <p>Yr of Completion; <span>2022</span></p>
            </div>
            {/* <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div> */}
          </div>
        </div>
        <div className="item image-container">
          <img src="/images/blog/new29.webp" loading="lazy" alt="Slide 2" />
          <div className="overlay"></div>
          <div className="content">
            <div className="author">Eavetop's</div>
            <div className="title">Eavetop</div>
            <div className="topic">Signature</div>
            <div className="des">
             <p>Location:<span>Happy Valley,Kengeri Rd</span></p>
             <p>Nature: <span>G +3</span></p>
             <p>No. of Flats: <span>48</span></p>
             <p>Builtup Area: <span>62,830 Sft</span></p>
             <p>Yr of Completion; <span>2022</span></p>
            </div>
           
          </div>
        </div>
        <div className="item image-container">
          <img src="/images/blog/building3.jpg" loading="lazy" alt="Slide 3" />
          <div className="overlay"></div>
          <div className="content">
          <div className="author">Eavetop's</div>
                <div className="title">Eavetop</div>
                <div className="topic"> Serenity</div>
                <div className="des">
             <p>Location:<span>Happy Valley,Kengeri Rd</span></p>
             <p>Nature: <span>G +3</span></p>
             <p>No. of Flats: <span>48</span></p>
             <p>Builtup Area: <span>62,830 Sft</span></p>
             <p>Yr of Completion; <span>2022</span></p>
            </div>
        
          </div>
        </div>
        <div className="item image-container">
          <img src="/infra1.jpg" loading="lazy" alt="Slide 4" />
          <div className="overlay"></div>
          <div className="content">
          <div className="author">Eavetop's</div>
                <div className="title">V6</div>
                <div className="topic"> Enclave</div>
                <div className="des">
             <p>Location:<span>Happy Valley,Kengeri Rd</span></p>
             <p>Nature: <span>G +3</span></p>
             <p>No. of Flats: <span>48</span></p>
             <p>Builtup Area: <span>62,830 Sft</span></p>
             <p>Yr of Completion; <span>2022</span></p>
            </div>
           
          </div>
        </div>
        <div className="item image-container">
          <img src="/images/blog/pic1.jpg" loading="lazy" alt="Slide 5" />
          <div className="overlay"></div>
          <div className="content">
          <div className="author">Eavetop's</div>
                <div className="title">Eavetop</div>
                <div className="topic"> Royal</div>
                <div className="des">
             <p>Location:<span>Happy Valley,Kengeri Rd</span></p>
             <p>Nature: <span>G +3</span></p>
             <p>No. of Flats: <span>48</span></p>
             <p>Builtup Area: <span>62,830 Sft</span></p>
             <p>Yr of Completion; <span>2022</span></p>
            </div>
           
          </div>
        </div>
        <div className="item image-container">
          <img src="/signin.jpg" loading="lazy" alt="Slide 6" />
          <div className="overlay"></div>
          <div className="content">
          <div className="author">Eavetop's</div>
                <div className="title">Eavetop </div>
                <div className="topic"> Square</div>
                <div className="des">
             <p>Location:<span>Happy Valley,Kengeri Rd</span></p>
             <p>Nature: <span>G +3</span></p>
             <p>No. of Flats: <span>48</span></p>
             <p>Builtup Area: <span>62,830 Sft</span></p>
             <p>Yr of Completion; <span>2022</span></p>
            </div>
           
          </div>
        </div>
        <div className="item image-container">
          <img src="/images/blog/new27.jpg" loading="lazy" alt="Slide 7" />
          <div className="overlay"></div>
          <div className="content">
          <div className="author">Eavetop's</div>
                <div className="title">Eavetop </div>
                <div className="topic"> Pearl</div>
                <div className="des">
             <p>Location:<span>Happy Valley,Kengeri Rd</span></p>
             <p>Nature: <span>G +3</span></p>
             <p>No. of Flats: <span>48</span></p>
             <p>Builtup Area: <span>62,830 Sft</span></p>
             <p>Yr of Completion; <span>2022</span></p>
            </div>
          
          </div>
        </div>
        <div className="item image-container">
          <img src="/images/blog/building1.jpg" loading="lazy" alt="Slide 8" />
          <div className="overlay"></div>
          <div className="content">
          <div className="author">Eavetop's</div>
                <div className="title">Eavetop</div>
                <div className="topic"> Greens</div>
                <div className="des">
             <p>Location:<span>Happy Valley,Kengeri Rd</span></p>
             <p>Nature: <span>G +3</span></p>
             <p>No. of Flats: <span>48</span></p>
             <p>Builtup Area: <span>62,830 Sft</span></p>
             <p>Yr of Completion; <span>2022</span></p>
            </div>
           
          </div>
        </div>
        <div className="item image-container">
          <img src="/images/blog/building2.jpg" loading="lazy" alt="Slide 9" />
          <div className="overlay"></div>
          <div className="content">
          <div className="author">Eavetop's</div>
                <div className="title">V6</div>
                <div className="topic">  Golden Nest</div>
                <div className="des">
             <p>Location:<span>Happy Valley,Kengeri Rd</span></p>
             <p>Nature: <span>G +3</span></p>
             <p>No. of Flats: <span>48</span></p>
             <p>Builtup Area: <span>62,830 Sft</span></p>
             <p>Yr of Completion; <span>2022</span></p>
            </div>
          
          </div>
        </div>
      </div>
      <div className="thumbnail" ref={thumbnailRef}>
        <div className="item">
          <img src="/images/blog/building2.jpg" loading="lazy" alt="Thumbnail 1" />
          <div className="content">
            <div className="title">V6</div>
            <div className="description">Golden Nest</div>
          </div>
        </div>
        <div className="item">
          <img src="/images/blog/new25.jpg" loading="lazy" alt="Thumbnail 2" />
          <div className="content">
            <div className="title">Durgadevi</div>
            <div className="description">Enclave</div>
          </div>
        </div>
        <div className="item">
          <img src="/images/blog/new29.webp" loading="lazy" alt="Thumbnail 3" />
          <div className="content">
            <div className="title">Eavetop</div>
            <div className="description">Signature</div>
          </div>
        </div>
        <div className="item">
          <img src="/images/blog/building3.jpg" loading="lazy" alt="Thumbnail 4" />
          <div className="content">
            <div className="title">Eavetop</div>
            <div className="description">Serenity</div>
          </div>
        </div>
        <div className="item">
          <img src="/signup.jpg" loading="lazy" alt="Thumbnail 5" />
          <div className="content">
            <div className="title">V6</div>
            <div className="description">Enclave</div>
          </div>
        </div>
        <div className="item">
          <img src="/images/blog/pic1.jpg" loading="lazy" alt="Thumbnail 6" />
          <div className="content">
            <div className="title">Eavetop</div>
            <div className="description">Royal</div>
          </div>
        </div>
        <div className="item">
          <img src="/signin.jpg" loading="lazy" alt="Thumbnail 7" />
          <div className="content">
            <div className="title">Eavetop</div>
            <div className="description">Square</div>
          </div>
        </div>
        <div className="item">
          <img src="/images/blog/new27.jpg" loading="lazy" alt="Thumbnail 8" />
          <div className="content">
            <div className="title">Eavetop</div>
            <div className="description">Pearl</div>
          </div>
        </div>
        <div className="item">
          <img src="/images/blog/building1.jpg" loading="lazy" alt="Thumbnail 9" />
          <div className="content">
            <div className="title">Eavetop</div>
            <div className="description">Greens</div>
          </div>
        </div>
      </div>
      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
      </div>
      <div className="time" ref={timeRef}></div>
    </div>

<div className="relative overflow-hidden project z-10 fonty">
  <img src="/projects.jpg" alt="" className='relative bg-[black] opacity-90 w-full ' />
  <div className="overlay absolute top-0 left-0 right-0 bottom-0  p-16 flex flex-col justify-center items-center">
  <h1 className='text-2xl font-bold text-white p-10 '>
    <span>Business Development:</span>
    <br />
    <span className='text-[#b39359]'>Enhancing Profitability and Growth</span>
  </h1> 

  <div className='flex text-white justify-center items-center'>
  <p className='font-semibold w-50 text-center'>Eavetop Infra offers data-driven guidance on selecting the right micro-market and asset class to align with market demands. Our expert analysis mitigates risks, ensuring developers make informed decisions that position their projects for success.</p>
</div>
<br /><br />
       <div>
        <h1 className="text-lg font-bold text-white text-center">Key Highlights</h1>
      <br /><br />
        <span className='bg-white p-5 m-4 font-bold'>Professional sales training.</span>
        <span className='bg-white  p-5 m-4 font-bold'>High-conversion pitch strategies.</span>
        <span className='bg-white p-5 m-4 font-bold'>Timeline adherence and turnover maximization.</span>

        
       <Link href={"/services"}>
       <p className='text-white text-center italic underline text-sm font-semibold mt-64'>Learn More About Our Market Advisory Services</p>
       </Link>
</div>
</div>
</div>

<div className="flex flex-col items-center justify-center bg-white p-8 fonty">
                <h1 data-aos="fade-left" data-aos-duration="1000" className="text-xl  font-bold text-center p-2 text-[#0b2c3d]">Discover how the Eavetop Group is reshaping real estate and lifestyle.</h1>
                <p className='text-lg text-center font-bold text-[#b39359]'>Ready to be a part of our success story?</p>
           
            <button className="flex flex-row items-center justify-center bg-[#b39359] font-bold hover:bg-[#0b2c3d] text-white p-2 mx-auto my-16 w-40" >Get in Touch&nbsp;
                <FaCaretRight size={18} />
            </button>
            </div>
           
    </>
   


   
  );
};

export default Carousel;
