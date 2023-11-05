import React, { Fragment } from 'react';
import { type Tour } from '../../interfaces/index';

const TourCard: React.FC<{ payload: Tour }> = ({ payload }) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { urls, alt_description, created_at } = payload;

  return (
    <Fragment>
      <div className="column">
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
      </div>
    </Fragment>
  );
};

export default TourCard;
