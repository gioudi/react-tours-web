/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useEffect, useState } from 'react';
import TourCard from './TourCard';
import api from '../../service';
import { Carousel } from 'react-responsive-carousel';
import { type Pictures } from '../../types';
import { useTranslation } from 'react-i18next';

const Tours = (): JSX.Element => {
  const { t } = useTranslation();
  const [data, setResponse] = useState<Pictures>([]);
  const [currentIndex, setCurrentIndex] = useState<any>(0);

  const handleChange = (index: any): void => {
    setCurrentIndex(index);
  };
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
            <Carousel
              showArrows={true}
              autoPlay={true}
              selectedItem={data[currentIndex]}
              onChange={handleChange}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
            >
              {data.map((photo: any) => (
                <div key={photo.id}>
                <TourCard
                 style={{width: '25%'}}
                  payload={photo}
                />
                </div>
                
              ))}
            </Carousel>
          )}
        </div>
      </div>
    );
}

export default Tours;
