import { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
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
  const [currentIndex, setCurrentIndex] = useState<any>(0);

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

  const handleChange = (index: any): void => {
    setCurrentIndex(index);
  };

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
      <section className="is-relative " 
      style={{marginBottom: '250px'}}>
        <div>
          {imagesSlider === null ? (
            <div>Loading...</div>
          ) : (
            <Carousel
              showArrows={true}
              autoPlay={true}
              selectedItem={imagesSlider[currentIndex]}
              onChange={handleChange}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
            >
              {imagesSlider.map(
                (image: { alt_description: any; urls: { full: any } }) => {
                  return (
                    <article
                      className="is-relative"
                      style={{ height: '85vh', width: '100vw' }}
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
                    </article>
                  );
                },
              )}
            </Carousel>
          )}
        </div>
        <div
          className="columns is-1-mobile  is-8-desktop is-8-widescreen is-multiline is-mobile"
          style={{ position: 'absolute', top: '90%', left: '10%', width: '80%' }}
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
