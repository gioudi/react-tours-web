const Service = ({title, description, icon})=> {
    return (
        <article className="service">
          <span className="service-icon"><i className={icon}></i></span>
        <div className="service-info">
          <h4 className="title is-4">{title}</h4>
          <p className="is-6">
           {description}
          </p>
        </div>
      </article>
    )
}


export default Service