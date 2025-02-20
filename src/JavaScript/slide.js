import React, { useEffect, useRef, useState } from 'react';

const Carousel = () => {
  const nextDom = useRef(null);
  const prevDom = useRef(null);
  const carouselDom = useRef(null);
  const sliderDom = useRef(null);
  const thumbnailBorderDom = useRef(null);
  const [timeRunning] = useState(3000);
  const [timeAutoNext] = useState(7000);

  useEffect(() => {
    const thumbnailItemsDom = thumbnailBorderDom.current.querySelectorAll('.item');
    thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);

    const nextHandler = () => showSlider('next');
    const prevHandler = () => showSlider('prev');

    nextDom.current.addEventListener('click', nextHandler);
    prevDom.current.addEventListener('click', prevHandler);

    let runNextAuto = setTimeout(() => {
      nextDom.current.click();
    }, timeAutoNext);

    return () => {
      nextDom.current.removeEventListener('click', nextHandler);
      prevDom.current.removeEventListener('click', prevHandler);
      clearTimeout(runNextAuto);
    };
  }, [timeAutoNext]);

  const showSlider = (type) => {
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

    let runTimeOut = setTimeout(() => {
      carouselDom.current.classList.remove('next');
      carouselDom.current.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextDom.current.click();
    }, timeAutoNext);
  };

  return (
    <div className="carousel" ref={carouselDom}>
      <button id="prev" ref={prevDom}>Previous</button>
      <div className="list" ref={sliderDom}>
        {/* Carousel items go here */}
      </div>
      <div className="thumbnail" ref={thumbnailBorderDom}>
        {/* Thumbnail items go here */}
      </div>
      <button id="next" ref={nextDom}>Next</button>
      <div className="time" ref={timeDom}></div>
    </div>
  );
};

export default Carousel;
