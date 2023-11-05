import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { type Pictures } from '../types';
import api from '../service';
import Contact from './Contact';

const Hero = ():JSX.Element => {
  const [imagesSlider, setResponseImages] = useState<Pictures>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index: number): void => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    api.search
      .getPhotos({ query: 'vacations', orientation: 'landscape' })
      .then((result) => {
        setResponseImages(result.response.results);
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  }, []);
  return (
    <>
      <section
        className="columns"
        id="home"
      >
        <div className="column  is-flex is-align-items-center is-align-content-center is-justify-content-center is-flex-direction-column">
          <h1 className="title is-inline mt-2">Grupo Travel</h1>
          <p className="is-inline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo debitis est autem dicta.
          </p>
          <a
            href="#tours"
            className="button is-inline is-info is-light"
          >
            explore tours
          </a>
        </div>
        <div className="column">
          {imagesSlider === null ? (
            <div>Loading...</div>
          ) : (
            <Carousel
              showArrows={true}
              autoPlay={true}
              selectedItem={imagesSlider[currentIndex]}
              onChange={handleChange}
              showThumbs={false}
            >
              {imagesSlider.map((image) => {
                return (
                  <article key={image.alt_description}>
                    <img
                      src={image.urls.full}
                      className=""
                      alt={image.alt_description}
                    />
                  </article>
                );
              })}
            </Carousel>
          )}
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Hero;
