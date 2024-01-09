/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useEffect, useState } from 'react';
import TourCard from './TourCard';
import api from '../../service';
import {Swiper, SwiperSlide} from 'swiper/react'
import { type Pictures } from '../../types';
import { useTranslation } from 'react-i18next';


import 'swiper/css/effect-coverflow';

import { EffectCoverflow } from 'swiper/modules'

const Tours = (): JSX.Element => {
  const { t } = useTranslation();
  const [data, setResponse] = useState<Pictures>([]);
  useEffect(() => {
    api.search
      .getPhotos({ query: 'trips', orientation: 'landscape' })
      .then((result) => {
        if (result.response != null) {
          const data = result.response.results as unknown as Pictures;
          setResponse(data);
        }
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  }, []);

    return (
      <div className="section">
         <div className="has-text-centered mb-4">
         <p className="title-2 has-text-weight-bold  ">
            {t('HeroSlogan')}
          </p>
          <h1 className="title is-size-1 has-text-weight-bold  ">
            {t('Hero')}
          </h1>
          <small className=" mb-3">{t('HeroDescription')}</small>
         </div>
        <div>
          {data === null ? (
            <div>Loading...</div>
          ) : (
            <Swiper
              spaceBetween={25}
              
              breakpoints={{
                320: {
                  width: 320,
                  slidesPerView: 1
                },
                768:{
                  width: 768,
                  slidesPerView: 2
                },
                994:{
                  slidesPerView: 3
                }

              }}
              effect={'coverflow'}
              coverflowEffect={
                {
                  rotate:50,
                  stretch:0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true
                }
              }
              modules={[EffectCoverflow]}
              centeredSlides={true}
              grabCursor={true}
              
            >
              {data.map((photo: any) => (
                <SwiperSlide key={photo.id}>
                <TourCard
                 style={{width: '25%'}}
                  payload={photo}
                />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    );
}

export default Tours;
