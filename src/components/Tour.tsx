const Tour = ({payload})=> {
    let {image,date,title,info, icon,location,duration,price} = payload;
    
    return (
      <div className="column">
      <article className="card">
        <div className="card-image">
          <figure className="image is-4by3">
          <img src={image} className="" alt={image} />
          </figure>
          <h6 className="subtitle is-6 px-4">{date}</h6>
        </div>
        <div className="card-content"> 
          <h4 className="title is-4">{title}</h4>
          <p className="content">
            {info}
          </p>
          <div className="tour-footer">
            <p>
              <span><i className={icon}></i></span> {location}
            </p>
            <p>{duration} days</p>
            <p>from ${price}</p>
          </div>
        </div>
      </article>
      </div>

    )
}

export default Tour;