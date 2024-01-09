import React from 'react';

const TourCard = ({payload}: any): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { urls, alt_description, created_at } = payload;
  console.log(payload)
  return (
    <>
        <article className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={urls.full}
                className=""
                alt={alt_description}
              />
            </figure>
            <h6 className="subtitle is-6 px-4">{created_at}</h6>
          </div>
        </article>
    </>
  );
};

export default TourCard;
