import React, { FC, Fragment} from 'react'
import { Tour } from '../../interfaces/index';

const TourCard: React.FC<{ payload: Tour }> = ({ payload }) => {
    const {  urls, alt_description, created_at } = payload;
  
    return (
      <Fragment>
         <div className="column">
           <article className="card">
          <div className="card-image">
            <figure className="image is-4by3">
            <img src={urls.full} className="" alt={alt_description} />
            </figure>
            <h6 className="subtitle is-6 px-4">{created_at}</h6>
          </div>
        </article>
        </div>
      </Fragment>
    );
}

export default TourCard;