import React from 'react';

const TourCard = ({payload}: any): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { urls, alt_description  } = payload;
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
          </div>
          <div className="card-content">
          <h6 className="subtitle is-6 mb-1">Caribe colombiano, Cartagena</h6>
            <p className="mb-1">Descubre Cartagena, paquete 3 dias 2 noches</p>
            <a
              href="#"
              className="button is-clickable is-small is-success"
            >
              Ver mas
            </a>
          </div>
        </article>
    </>
  );
};

export default TourCard;
