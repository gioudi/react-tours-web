import { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import { type Pictures } from '../types';
import api from '../service';
import { type JSX } from 'react/jsx-runtime';
import '../i18n/config';
import { useTranslation } from 'react-i18next';
import CardBenefits from './Commons/CardBenefits';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';


const Hero = (): JSX.Element => {
  const { t } = useTranslation();
  const [imagesSlider, setResponseImages] = useState<Pictures>([]);

  const listBenefits = [
    {
      id: 1,
      title: t('Inspiration'),
      description: t('InspirationDescription'),
      icon: faLightbulb,
    },
    {
      id: 2,
      title: t('Inspiration'),
      description: t('InspirationDescription'),
      icon: faLightbulb,
    },
    {
      id: 3,
      title: t('Inspiration'),
      description: t('InspirationDescription'),
      icon: faLightbulb
    },
    {
      id: 4,
      title: t('Inspiration'),
      description: t('InspirationDescription'),
      icon: faLightbulb,
    },
  ];


  useEffect(() => {
    api.search
      .getPhotos({ query: 'islands', orientation: 'landscape' })
      .then((result) => {
        if (result.response != null) {
          const data = result.response.results as unknown as Pictures;
          setResponseImages(data);
        }
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  }, []);
  return (
    <>
      <section className="is-relative margin-bottom-200" 
      >
        <div>
          {imagesSlider === null ? (
            <div>Loading...</div>
          ) : (
            <Swiper
              slidesPerView={1}
            >
              {imagesSlider.map(
                (image: { alt_description: any; urls: { full: any } }) => {
                  return (
                    <SwiperSlide
                      className="is-relative"
                      style={{ height: '85vh' }}
                      key={image.alt_description}
                    >
                      <img
                        style={{
                          height: '100%',
                          width: '100vw',
                          objectFit: 'fill',
                        }}
                        src={image.urls.full}
                        className=""
                        alt={image.alt_description}
                      />
                      <div
                        style={{ position: 'absolute', top: '55%', left: '9%' }}
                        className="has-text-centered is-flex is-align-items-center is-align-content-center is-justify-content-center is-flex-direction-column"
                      >
                        <p className="title-2 has-text-weight-bold  is-inline">
                          {t('HeroSlogan')}
                        </p>
                        <h1 className="title is-size-1 has-text-weight-bold  is-inline">
                          {t('Hero')}
                        </h1>
                        <small className=" mb-3">{t('HeroDescription')}</small>
                        <a
                          href="#tours"
                          className="button is-clickable is-inline is-success is-outlined"
                        >
                          {t('More')}
                        </a>
                      </div>
                    </SwiperSlide>
                  );
                },
              )}
            </Swiper>
          )}
        </div>
        <div
          className="hero-container-benefits columns is-1-mobile  is-8-desktop is-8-widescreen is-multiline is-mobile"
        >
          {listBenefits.map((item: any) => {
            const { id, title, description, icon } = item;
            return (
              <div
                className="column "
                key={id}
              >
                <CardBenefits
                  title={title}
                  description={description}
                  id={id}
                  icon={icon}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Hero;
