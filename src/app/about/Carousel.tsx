// src/components/Carousel.js
import React, { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const nextDom = useRef(null);
  const prevDom = useRef(null);
  const carouselDom = useRef(null);
  const sliderDom = useRef(null);
  const thumbnailBorderDom = useRef(null);
  const runTimeOut = useRef(null);
  const runNextAuto = useRef(null);
  const timeRunning = 3000;
  const timeAutoNext = 7000;

  const showSlider = useCallback((type) => {
    const sliderItemsDom = sliderDom.current.querySelectorAll('.list .item');
    const thumbnailItemsDom = thumbnailBorderDom.current.querySelectorAll('.item');

    if (type === 'next') {
      sliderDom.current.appendChild(sliderItemsDom[0]);
      thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);
      carouselDom.current.classList.add('next');
    } else {
      sliderDom.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      thumbnailBorderDom.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      carouselDom.current.classList.add('prev');
    }

    clearTimeout(runTimeOut.current);
    runTimeOut.current = setTimeout(() => {
      carouselDom.current.classList.remove('next');
      carouselDom.current.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto.current);
    runNextAuto.current = setTimeout(() => {
      nextDom.current.click();
    }, timeAutoNext);
  }, [timeRunning, timeAutoNext]);

  useEffect(() => {
    const thumbnailItemsDom = thumbnailBorderDom.current.querySelectorAll('.item');
    thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);

    const nextHandler = () => showSlider('next');
    const prevHandler = () => showSlider('prev');

    nextDom.current.addEventListener('click', nextHandler);
    prevDom.current.addEventListener('click', prevHandler);

    runNextAuto.current = setTimeout(() => {
      nextDom.current.click();
    }, timeAutoNext);

    return () => {
      nextDom.current.removeEventListener('click', nextHandler);
      prevDom.current.removeEventListener('click', prevHandler);
      clearTimeout(runNextAuto.current);
    };
  }, [showSlider, timeAutoNext]);

  return (
    <div className="carousel" ref={carouselDom}>
      <div className="list" ref={sliderDom}>
        <div className="item">
          <Image
            src="/images/brands/rooftop1.avif"
            loading="lazy"
            alt="about-image"
            fill
            className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none rounded-3xl border-4 lg:mr-0"
          />
          <div className="content">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde,
               eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        {/* Add more items here */}
      </div>
      <div className="thumbnail" ref={thumbnailBorderDom}>
        <div className="item">
          <Image
            src="/images/brands/rooftop1.avif"
            loading="lazy"
            alt="about-image"
            fill
            className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none rounded-3xl border-4 lg:mr-0"
          />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        {/* Add more thumbnail items here */}
      </div>
      <div className="arrows">
        <button id="prev" ref={prevDom}>Prev</button>
        <button id="next" ref={nextDom}>Next</button>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default Carousel;
