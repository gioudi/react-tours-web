import  { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { type Pictures } from '../types';
import api from '../service';
import Contact from './Contact';
import { type JSX } from 'react/jsx-runtime';
import '../i18n/config'
import { useTranslation } from 'react-i18next';


const Hero = (): JSX.Element => {

  const { t } = useTranslation()
  const [imagesSlider, setResponseImages] = useState<Pictures>([]);
  const [currentIndex, setCurrentIndex] = useState<any>(0);

  const handleChange = (index: any): void => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    api.search
      .getPhotos({ query: 'vacations', orientation: 'landscape' })
      .then((result) => {
        if(result.response != null) {
          const data = result.response.results as unknown as Pictures
          setResponseImages(data);
        }
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
          <h1 className="title is-inline mt-2">{ t('Tours') }</h1>
          <p className="is-inline">
           { t('Description') }
          </p>
          <a
            href="#tours"
            className="button is-inline is-info is-light"
          >
           { t('More') }
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
              {imagesSlider.map((image: { alt_description: any; urls: { full: any; }; }) => {
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
